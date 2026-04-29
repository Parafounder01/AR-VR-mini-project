# 🔬⚡ WebXR Electronics 3D Lab

Interactive VR environment for learning electronics with CRO (Cathode Ray Oscilloscope) and AFO (Audio Frequency Oscillator). Built with A-Frame + Three.js + WebXR Device API.

## Targeting: Oculus Quest 2 / Quest 3

### Features

- CRO Display with real-time waveform rendering
- AFO with frequency/amplitude/waveform controls
- Signal info panel
- AR/VR mode toggle
- Quest controller support
- Wrist HUD

## Quick Start

```bash
npm install
npm start
```

Then open https://localhost:8443 in a WebXR-capable browser.

For Quest access:
1. Find your local IP: `ipconfig`
2. Navigate to `https://<YOUR_IP>:8443` in Quest browser
3. Accept the self-signed certificate
4. Press VR button to enter immersive mode

## Controls

| Controller | Action |
|------------|--------|
| Grip | Grab component |
| Trigger | Interact/Click |
| A Button | Toggle AR/VR |
| B Button | Reset scene |
| X Button | Cycle frequency |

## Tech Stack

- A-Frame 1.7
- Three.js
- WebXR Device API
- Express (server)