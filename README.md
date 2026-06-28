<<<<<<< HEAD
<<<<<<< HEAD
# Svg-to-mp4
=======
# ✦ Aura SVG Studio

Aura SVG Studio is a premium, web-based vector animation exporter and rendering tool that converts animated SVGs into high-quality WebM videos directly in the browser. Designed with a sleek, responsive cyberpunk dashboard aesthetic, it allows creators to upload custom vector shapes, preview animations, customize encoding settings, and render smooth video files.

---

## 🚀 Key Features

### 1. **Interactive SVG Dropzone & Parser**
* **Drag & Drop Upload:** Supported by a beautiful, animated drag-and-drop workspace powered by `react-dropzone`.
* **Deep Element Extraction:** Dynamically parses incoming SVG files on the client-side to calculate dimensions, viewBox scales, element counts, and identifies tags requiring animation.
* **Smart DOM Computation:** Resolves animations using a sandboxed offscreen attachment to guarantee accurate `window.getComputedStyle` resolution.

### 2. **Professional Render Settings**
* **Custom Resolutions:** Export videos in standard dimensions including:
  * `1920x1080` (Full HD)
  * `1280x720` (HD)
  * `854x480` (SD)
  * `640x360` (Mobile)
* **Variable Frame Rates:** Select from standard cinematic and digital rates (`24 FPS`, `30 FPS`, and `60 FPS`) to achieve optimal smoothness.
* **Encoding & Quality Profiles:** Choice of video compression standards (`VP9` and `VP8`) alongside low, medium, and high quality bitrate parameters.
* **Configurable Duration:** Custom duration timing up to an admin-enforced limit of 60 seconds.

### 3. **HTML5 Canvas Animation Engine**
* **Precise Frame-by-Frame Rendering:** Translates SVG shapes to WebP images sequentially, compiling them into a final WebM container.
* **Transform Correction:** Resolves transforms (such as `rotate` and `scale`) centered exactly around the center of each shape bounding box using standard `fill-box` mapping.
* **Active Status Feedback:** Live rendering progress bar showing the exact completion percentage and quality parameters.

### 4. **Aesthetic & Responsive Cyberpunk UI**
* Glassmorphism layout panels featuring glowing boundaries and neon accents.
* Smooth micro-animations on interactive sliders, dropdowns, buttons, and dropzones using `framer-motion`.
* Instant feedback via dark-styled toast notifications from `react-toastify`.

---

## 🛠 Tech Stack

* **Frontend Library:** [React 19](https://react.dev/)
* **Build Tool:** [Vite 8](https://vite.dev/) (powered by the ultra-fast Rolldown bundler)
* **Styling & Theme:** Vanilla CSS with Cyberpunk-inspired design guidelines (glowing neon gradients, interactive hover effects, custom scrollbars)
* **Animation Library:** [Framer Motion](https://www.framer.com/motion/)
* **Icon Set:** [Lucide React](https://lucide.dev/)
* **Video Generation:** [WebM-Writer](https://github.com/thenickdude/webm-writer)
* **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/)

---

## ⚡ Quick Start & Run

### Running on Windows
Double-click the **`run.cmd`** script in the project root directory. It will automatically:
1. Check if Node.js is installed.
2. Install the necessary dependencies if the `node_modules` folder is missing.
3. Launch the Vite development server.
4. Open the app URL (default: `http://localhost:5173/`).

### Running Manually via CLI
1. Navigate to the project directory:
   ```bash
   cd aura-svg-clone
   ```
2. Install the node package dependencies:
   ```bash
   npm install
   ```
3. Run the Vite development server:
   ```bash
   npm run dev
   ```
4. Access the web interface in your browser:
   * **URL:** `http://localhost:5173/`

---

## 🎨 Creating Compatible Animated SVGs

To utilize the animation engine, you can apply custom attributes to your SVG elements. Here is a simple example:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <rect width="100%" height="100%" fill="#0a0a1a"/>
  
  <!-- Rotating Outer Ring -->
  <circle cx="200" cy="200" r="80" fill="none" stroke="#00d4ff" stroke-width="8" stroke-dasharray="10 20" animate="rotate" dur="5"/>
  
  <!-- Pulsing Inner Circle -->
  <circle cx="200" cy="200" r="40" fill="#7c3aed" opacity="0.8" animate="scale" dur="3"/>

  <!-- Fading Core -->
  <circle cx="200" cy="200" r="15" fill="#00ff88" animate="opacity" dur="2"/>
</svg>
```

A template matches this layout is available at `/public/sample.svg` in the project.

---

## 📞 Support & Feedback
For any issues, feedback, or assistance, contact developers at **+880 1761 709821**.
>>>>>>> 4fead9d (initial commit)
=======
# Svg-to-mp4
>>>>>>> 611e63d330c11b6b355ef6851a3f8c1390189faf
