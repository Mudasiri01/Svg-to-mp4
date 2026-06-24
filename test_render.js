import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderVideoWithRemotion } from './server/renderer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    try {
        console.log("Starting test render with sample.svg...");
        const sampleSvgPath = path.join(__dirname, 'public', 'sample.svg');
        const animatedSvg = fs.readFileSync(sampleSvgPath, 'utf8');

        await renderVideoWithRemotion({
            svgContent: animatedSvg,
            format: 'mp4',
            resolution: '400x400',
            duration: 2,
            fps: 30,
            hardwareAcceleration: 'none'
        });
        console.log("Test render completed successfully.");
    } catch (err) {
        console.error("Test render failed with error:", err);
    }
}

run();
