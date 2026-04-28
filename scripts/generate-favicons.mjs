import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_LOGO = path.join(ROOT, "public", "images", "logo.png");
const PUBLIC_DIR = path.join(ROOT, "public");
const APP_DIR = path.join(ROOT, "src", "app");

async function ensure(dir) {
  await fs.mkdir(dir, { recursive: true });
}

// Build a minimal valid .ico file containing one or more PNG-encoded images.
// ICO header (6 bytes) + 1 directory entry (16 bytes) per image + image data.
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(images.length, 4); // count

  const dirEntries = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(data.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += data.length;
  }
  return Buffer.concat([header, ...dirEntries, ...images.map((i) => i.data)]);
}

async function makeBrandedSquare(size, padRatio = 0) {
  const pad = Math.round(size * padRatio);
  const inner = size - pad * 2;
  const logo = await sharp(SRC_LOGO)
    .resize(inner, inner, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

async function makeMaskableSquare(size) {
  // Maskable icons need solid bg + ~10% safe zone
  const inner = Math.round(size * 0.78);
  const logo = await sharp(SRC_LOGO)
    .resize(inner, inner, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 5, g: 150, b: 105, alpha: 1 }, // emerald-600
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

async function makeOgImage(outPath) {
  // Use the existing hero-1.jpg and overlay logo + brand
  const heroPath = path.join(ROOT, "public", "images", "hero-1.jpg");
  const W = 1200;
  const H = 630;

  const base = await sharp(heroPath)
    .resize(W, H, { fit: "cover" })
    .toBuffer();

  // Dark gradient overlay
  const overlay = await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0.55 },
    },
  })
    .png()
    .toBuffer();

  const logoSize = 160;
  const logo = await sharp(SRC_LOGO)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  const titleSvg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <style>
        .title { font: 700 64px 'Segoe UI', Arial, sans-serif; fill: #ffffff; }
        .accent { font: 700 64px 'Segoe UI', Arial, sans-serif; fill: #34d399; }
        .tagline { font: 500 30px 'Segoe UI', Arial, sans-serif; fill: #d1fae5; }
        .tag { font: 600 22px 'Segoe UI', Arial, sans-serif; fill: #ffffff; letter-spacing: 2px; }
      </style>
      <text x="80" y="280" class="tag">SINCE 2020 — BUREAU VERITAS CERTIFIED</text>
      <text x="80" y="370" class="title">International Commercial</text>
      <text x="80" y="445" class="accent">Diving Services</text>
      <text x="80" y="510" class="tagline">Underwater Survey, Inspection &amp; Marine Repair · Bangladesh</text>
    </svg>`
  );

  await sharp(base)
    .composite([
      { input: overlay, blend: "over" },
      { input: logo, top: 80, left: 80 },
      { input: titleSvg, top: 0, left: 0 },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(outPath);
}

async function main() {
  await ensure(PUBLIC_DIR);

  // Standard favicon PNGs
  const sizes = [16, 32, 48, 64, 96, 144, 180, 192, 256, 384, 512];
  for (const size of sizes) {
    const buf = await makeBrandedSquare(size, 0.05);
    await fs.writeFile(path.join(PUBLIC_DIR, `favicon-${size}x${size}.png`), buf);
  }

  // Apple touch icon
  await fs.writeFile(
    path.join(PUBLIC_DIR, "apple-touch-icon.png"),
    await makeBrandedSquare(180, 0.05)
  );

  // Android Chrome icons
  await fs.writeFile(
    path.join(PUBLIC_DIR, "android-chrome-192x192.png"),
    await makeMaskableSquare(192)
  );
  await fs.writeFile(
    path.join(PUBLIC_DIR, "android-chrome-512x512.png"),
    await makeMaskableSquare(512)
  );

  // Maskable PNGs
  await fs.writeFile(
    path.join(PUBLIC_DIR, "icon-maskable-192x192.png"),
    await makeMaskableSquare(192)
  );
  await fs.writeFile(
    path.join(PUBLIC_DIR, "icon-maskable-512x512.png"),
    await makeMaskableSquare(512)
  );

  // Multi-image favicon.ico (16, 32, 48)
  const ico = buildIco([
    { size: 16, data: await makeBrandedSquare(16, 0.05) },
    { size: 32, data: await makeBrandedSquare(32, 0.05) },
    { size: 48, data: await makeBrandedSquare(48, 0.05) },
  ]);
  await fs.writeFile(path.join(PUBLIC_DIR, "favicon.ico"), ico);
  // Note: not writing to APP_DIR — icons are referenced via metadata.icons in layout.tsx
  // to avoid Next.js's auto-injected hashed favicon link competing with explicit ones.
  void APP_DIR;

  // OG images for each page (same image, but different file names so we can override later)
  const ogTargets = [
    "og-image.jpg",
    "og-home.jpg",
    "og-about.jpg",
    "og-services.jpg",
    "og-team.jpg",
    "og-equipment.jpg",
    "og-projects.jpg",
    "og-contact.jpg",
  ];

  const ogBaseOut = path.join(PUBLIC_DIR, "images", ogTargets[0]);
  await makeOgImage(ogBaseOut);

  for (let i = 1; i < ogTargets.length; i++) {
    await fs.copyFile(ogBaseOut, path.join(PUBLIC_DIR, "images", ogTargets[i]));
  }

  console.log("✓ Generated favicons & OG images");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
