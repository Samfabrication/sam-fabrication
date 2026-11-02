import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputHero = '/Users/shekharyadav/.gemini/antigravity/brain/1bbd0a53-01a9-49d6-b06c-ec4b3aa4343f/luxury_steel_villa_hero_png_1793386248526.jpg';
const outputDir = path.resolve('public/images');
const distDir = path.resolve('dist/images');

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(distDir, { recursive: true });

async function processHero() {
  console.log('Processing clean hero images...');

  // 1. hero-home (1376x768 high-res)
  await sharp(inputHero)
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'hero-home.jpg'));
  await sharp(inputHero)
    .webp({ quality: 88 })
    .toFile(path.join(outputDir, 'hero-home.webp'));
  console.log('Updated hero-home.jpg & hero-home.webp');

  // Copy directly to dist/images as well
  fs.copyFileSync(path.join(outputDir, 'hero-home.jpg'), path.join(distDir, 'hero-home.jpg'));
  fs.copyFileSync(path.join(outputDir, 'hero-home.webp'), path.join(distDir, 'hero-home.webp'));

  // 2. hero-why-us (clean architectural crop)
  await sharp(inputHero)
    .resize(1376, 650, { fit: 'cover', position: 'top' })
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'hero-why-us.jpg'));
  await sharp(inputHero)
    .resize(1376, 650, { fit: 'cover', position: 'top' })
    .webp({ quality: 88 })
    .toFile(path.join(outputDir, 'hero-why-us.webp'));

  fs.copyFileSync(path.join(outputDir, 'hero-why-us.jpg'), path.join(distDir, 'hero-why-us.jpg'));
  fs.copyFileSync(path.join(outputDir, 'hero-why-us.webp'), path.join(distDir, 'hero-why-us.webp'));

  // 3. hero-work (clean architectural crop)
  await sharp(inputHero)
    .resize(1376, 580, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'hero-work.jpg'));
  await sharp(inputHero)
    .resize(1376, 580, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(path.join(outputDir, 'hero-work.webp'));

  fs.copyFileSync(path.join(outputDir, 'hero-work.jpg'), path.join(distDir, 'hero-work.jpg'));
  fs.copyFileSync(path.join(outputDir, 'hero-work.webp'), path.join(distDir, 'hero-work.webp'));

  // 4. hero-blog (clean architectural crop)
  await sharp(inputHero)
    .resize(1376, 580, { fit: 'cover', position: 'bottom' })
    .jpeg({ quality: 90 })
    .toFile(path.join(outputDir, 'hero-blog.jpg'));
  await sharp(inputHero)
    .resize(1376, 580, { fit: 'cover', position: 'bottom' })
    .webp({ quality: 88 })
    .toFile(path.join(outputDir, 'hero-blog.webp'));

  fs.copyFileSync(path.join(outputDir, 'hero-blog.jpg'), path.join(distDir, 'hero-blog.jpg'));
  fs.copyFileSync(path.join(outputDir, 'hero-blog.webp'), path.join(distDir, 'hero-blog.webp'));

  console.log('All hero images successfully updated with clean architectural renders!');
}

processHero().catch(err => {
  console.error('Error processing hero images:', err);
  process.exit(1);
});

