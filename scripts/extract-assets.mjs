import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uploadedDir = '/Users/shekharyadav/.gemini/antigravity/brain/1bbd0a53-01a9-49d6-b06c-ec4b3aa4343f/.user_uploaded';
const outputDir = path.resolve('public/images');

fs.mkdirSync(outputDir, { recursive: true });

const homeImg = path.join(uploadedDir, 'media_1793383461349_5e509849.jpg');
const workImg = path.join(uploadedDir, 'media_1793383424025_41302d75.jpg');
const blogImg = path.join(uploadedDir, 'media_1793383424024_e51c938c.jpg');
const whyUsImg = path.join(uploadedDir, 'media_1793383424024_c7bd938b.jpg');

async function extractAssets() {
  console.log('Extracting assets...');

  // 1. Logo
  await sharp(homeImg)
    .extract({ left: 30, top: 8, width: 120, height: 75 })
    .toFile(path.join(outputDir, 'sam-logo.png'));
  console.log('Extracted sam-logo.png');

  // 1b. 3D Metal Logo from About section
  await sharp(homeImg)
    .extract({ left: 24, top: 480, width: 195, height: 175 })
    .toFile(path.join(outputDir, 'sam-3d-logo.jpg'));
  console.log('Extracted sam-3d-logo.jpg');

  // 2. Hero Background (Home)
  await sharp(homeImg)
    .extract({ left: 0, top: 0, width: 682, height: 360 })
    .toFile(path.join(outputDir, 'hero-home.jpg'));
  console.log('Extracted hero-home.jpg');

  // 3. Hero Background (Why Us)
  await sharp(whyUsImg)
    .extract({ left: 0, top: 0, width: 682, height: 285 })
    .toFile(path.join(outputDir, 'hero-why-us.jpg'));
  console.log('Extracted hero-why-us.jpg');

  // 4. Hero Background (Our Work)
  await sharp(workImg)
    .extract({ left: 0, top: 0, width: 682, height: 215 })
    .toFile(path.join(outputDir, 'hero-work.jpg'));
  console.log('Extracted hero-work.jpg');

  // 5. Hero Background (Blog)
  await sharp(blogImg)
    .extract({ left: 0, top: 0, width: 682, height: 215 })
    .toFile(path.join(outputDir, 'hero-blog.jpg'));
  console.log('Extracted hero-blog.jpg');

  // 6. About Staircase Image
  await sharp(homeImg)
    .extract({ left: 500, top: 468, width: 182, height: 200 })
    .toFile(path.join(outputDir, 'about-staircase.jpg'));
  console.log('Extracted about-staircase.jpg');

  // 7. Why Us Staircase Expertise
  await sharp(whyUsImg)
    .extract({ left: 235, top: 497, width: 305, height: 180 })
    .toFile(path.join(outputDir, 'why-us-staircase.jpg'));
  console.log('Extracted why-us-staircase.jpg');

  // 8. Why Us Built on Trust Carport
  await sharp(whyUsImg)
    .extract({ left: 14, top: 798, width: 236, height: 135 })
    .toFile(path.join(outputDir, 'commitment-carport.jpg'));
  console.log('Extracted commitment-carport.jpg');

  // 9. Client Feedback Balcony photo (Our Work)
  await sharp(workImg)
    .extract({ left: 0, top: 706, width: 334, height: 132 })
    .toFile(path.join(outputDir, 'feedback-balcony.jpg'));
  console.log('Extracted feedback-balcony.jpg');

  // 10. Featured Blog Image
  await sharp(blogImg)
    .extract({ left: 275, top: 262, width: 215, height: 160 })
    .toFile(path.join(outputDir, 'blog-featured-gate.jpg'));
  console.log('Extracted blog-featured-gate.jpg');

  // 11. Projects Grid from Our Work (12 projects)
  const projects = [
    { name: 'project-main-gate.jpg', left: 16, top: 263, width: 205, height: 100 },
    { name: 'project-window-grill.jpg', left: 238, top: 263, width: 205, height: 100 },
    { name: 'project-ss-railing.jpg', left: 460, top: 263, width: 205, height: 100 },
    { name: 'project-ms-staircase.jpg', left: 16, top: 388, width: 205, height: 100 },
    { name: 'project-car-shed.jpg', left: 238, top: 388, width: 205, height: 100 },
    { name: 'project-ms-structure.jpg', left: 460, top: 388, width: 205, height: 100 },
    { name: 'project-custom-fab.jpg', left: 16, top: 513, width: 205, height: 100 },
    { name: 'project-canopy.jpg', left: 238, top: 513, width: 205, height: 100 },
    { name: 'project-sliding-gate.jpg', left: 460, top: 513, width: 205, height: 100 },
    { name: 'project-balcony-railing.jpg', left: 16, top: 638, width: 205, height: 100 },
    { name: 'project-industrial-fab.jpg', left: 238, top: 638, width: 205, height: 100 },
    { name: 'project-pergola.jpg', left: 460, top: 638, width: 205, height: 100 },
  ];

  for (const p of projects) {
    await sharp(workImg)
      .extract({ left: p.left, top: p.top, width: p.width, height: p.height })
      .toFile(path.join(outputDir, p.name));
    console.log(`Extracted ${p.name}`);
  }

  // 12. Blog Grid images (6 posts)
  const blogPosts = [
    { name: 'blog-post-1.jpg', left: 18, top: 440, width: 154, height: 80 },
    { name: 'blog-post-2.jpg', left: 180, top: 440, width: 154, height: 80 },
    { name: 'blog-post-3.jpg', left: 342, top: 440, width: 154, height: 80 },
    { name: 'blog-post-4.jpg', left: 18, top: 628, width: 154, height: 80 },
    { name: 'blog-post-5.jpg', left: 180, top: 628, width: 154, height: 80 },
    { name: 'blog-post-6.jpg', left: 342, top: 628, width: 154, height: 80 },
  ];

  for (const b of blogPosts) {
    await sharp(blogImg)
      .extract({ left: b.left, top: b.top, width: b.width, height: b.height })
      .toFile(path.join(outputDir, b.name));
    console.log(`Extracted ${b.name}`);
  }

  console.log('All image assets extracted successfully!');
}

extractAssets().catch(err => {
  console.error('Error extracting assets:', err);
  process.exit(1);
});
