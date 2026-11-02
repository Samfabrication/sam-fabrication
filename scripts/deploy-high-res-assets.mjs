import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = '/Users/shekharyadav/.gemini/antigravity/brain/1bbd0a53-01a9-49d6-b06c-ec4b3aa4343f';
const outputDir = path.resolve('public/images');
const distDir = path.resolve('dist/images');

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(distDir, { recursive: true });

const rawAssets = {
  gate: path.join(brainDir, 'gate_luxury_cnc_png_1793387135984.jpg'),
  grill: path.join(brainDir, 'window_grill_modern_png_1793387148108.jpg'),
  ssRailing: path.join(brainDir, 'ss_balcony_railing_png_1793387161032.jpg'),
  staircase: path.join(brainDir, 'floating_metal_staircase_png_1793387186360.jpg'),
  carport: path.join(brainDir, 'car_parking_shed_png_1793387199925.jpg'),
  industrial: path.join(brainDir, 'industrial_steel_structure_png_1793387213111.jpg'),
  canopy: path.join(brainDir, 'entrance_canopy_pergola_png_1793387238544.jpg'),
  slidingGate: path.join(brainDir, 'sliding_driveway_gate_png_1793387253939.jpg'),
  msRailing: path.join(brainDir, 'ms_matte_balcony_railing_png_1793387267297.jpg'),
  customScreen: path.join(brainDir, 'bespoke_laser_cut_screen_png_1793387294459.jpg'),
  emblem: path.join(brainDir, 'metallic_3d_wall_emblem_png_1793387305504.jpg'),
};

async function saveAsset(srcPath, baseName, width = 1000, height = 650) {
  const jpgOut = path.join(outputDir, `${baseName}.jpg`);
  const webpOut = path.join(outputDir, `${baseName}.webp`);

  await sharp(srcPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90 })
    .toFile(jpgOut);

  await sharp(srcPath)
    .resize(width, height, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(webpOut);

  fs.copyFileSync(jpgOut, path.join(distDir, `${baseName}.jpg`));
  fs.copyFileSync(webpOut, path.join(distDir, `${baseName}.webp`));
  console.log(`Saved high-res: ${baseName}.jpg & .webp`);
}

async function run() {
  console.log('🚀 Deploying High-Resolution Unblurred Fabrication Imagery...');

  // 1. Gates
  await saveAsset(rawAssets.gate, 'project-main-gate', 1200, 750);
  await saveAsset(rawAssets.gate, 'blog-featured-gate', 1200, 800);
  await saveAsset(rawAssets.gate, 'blog-post-4', 1000, 650);

  // 2. Sliding Gates
  await saveAsset(rawAssets.slidingGate, 'project-sliding-gate', 1200, 750);

  // 3. Grills
  await saveAsset(rawAssets.grill, 'project-window-grill', 1200, 750);
  await saveAsset(rawAssets.grill, 'blog-post-1', 1000, 650);

  // 4. SS Railings
  await saveAsset(rawAssets.ssRailing, 'project-ss-railing', 1200, 750);
  await saveAsset(rawAssets.ssRailing, 'feedback-balcony', 1200, 750);
  await saveAsset(rawAssets.ssRailing, 'blog-post-2', 1000, 650);

  // 5. MS Railings
  await saveAsset(rawAssets.msRailing, 'project-balcony-railing', 1200, 750);

  // 6. Staircases
  await saveAsset(rawAssets.staircase, 'project-ms-staircase', 1200, 750);
  await saveAsset(rawAssets.staircase, 'about-staircase', 1000, 800);
  await saveAsset(rawAssets.staircase, 'why-us-staircase', 1000, 700);
  await saveAsset(rawAssets.staircase, 'blog-post-5', 1000, 650);

  // 7. Car Parking Sheds
  await saveAsset(rawAssets.carport, 'project-car-shed', 1200, 750);
  await saveAsset(rawAssets.carport, 'commitment-carport', 1000, 650);
  await saveAsset(rawAssets.carport, 'blog-post-3', 1000, 650);

  // 8. Industrial Structural Steel
  await saveAsset(rawAssets.industrial, 'project-ms-structure', 1200, 750);
  await saveAsset(rawAssets.industrial, 'project-industrial-fab', 1200, 750);
  await saveAsset(rawAssets.industrial, 'blog-post-6', 1000, 650);

  // 9. Canopies & Pergolas
  await saveAsset(rawAssets.canopy, 'project-canopy', 1200, 750);
  await saveAsset(rawAssets.canopy, 'project-pergola', 1200, 750);

  // 10. Custom Laser Cut Screen
  await saveAsset(rawAssets.customScreen, 'project-custom-fab', 1200, 750);

  // 11. 3D Metal Wall Emblem
  await saveAsset(rawAssets.emblem, 'sam-3d-logo', 900, 750);

  console.log('\n🎉 All 24 site images updated with ultra-sharp, high-resolution architectural photographs!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

