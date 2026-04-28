# AR-VR Mini Project - Interactive Electronics Lab

An immersive WebXR electronics lab simulator with RC oscillator circuit, drag-and-drop components, and CRO oscilloscope display.

Compatible with Meta Quest 2/3 browser via WebXR.

## Features

- ⚡ Resistor (10KΩ)
- 🔋 Capacitor (1µF)
- 💡 LED (blinks at oscillator frequency)
- 🔌 IC 741 Op-Amp
- 📋 Breadboard
- 📊 CRO Display (real-time sine wave)
- 🥽 AR/VR Mode for Quest 3

## Tech Stack

- **3D:** Three.js + WebXR API
- **Deployment:** GitHub Pages / Netlify

## Run Locally

```bash
# Open index.html in browser
# Or serve with any web server:
npx serve .
```

Then open http://localhost:3000

## VR Mode

Click "Enter VR" button for immersive VR on Quest headsets.

## RC Oscillator Formula

- Time Constant: τ = R × C
- Frequency: f = 1 / (2π√6 × R × C)

With R = 10KΩ, C = 1µF:
- τ = 10 ms
- f ≈ 26.5 Hz

## Live Demo

Deploy to Netlify or GitHub Pages for live HTTPS access.

---

Built with PAVITHRA AI Agent