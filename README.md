# Virtual Electronics & RF Lab for Quest 2/3

## Project Overview

**Project Title:** Virtual Electronics & RF Lab - WebXR learning platform

**100-Word Abstract:**
This project develops an immersive 3D WebXR electronics laboratory accessible through Meta Quest 2/3 browser without native app installation. Students can enter a virtual lab environment, interact with electronic components (CRO, AFO, resistors, capacitors, LEDs), build RC circuits, run simulations with real-time waveforms, and experiment with Yagi-Uda antenna radiation patterns. The system combines Three.js 3D rendering with WebXR for VR/AR mode, featuring drag-and-drop components, live circuit calculations, and educational tooltips. Designed for STEM education, the lab provides hands-on electronics learning in an accessible, cost-effective virtual format.

## Problem Statement

Traditional electronics labs require expensive equipment (CROs, signal generators, components) that most educational institutions cannot afford. Hardware labs have limited access, safety concerns, and fixed schedules. Students need a safe, accessible, engaging way to learn electronics concepts through hands-on experimentation without physical equipment constraints.

## Objectives

1. Create immersive 3D WebXR electronics lab accessible via Quest browser
2. Implement 12 electronic components/instruments with 3D models and educational descriptions
3. Build interactive RC circuit simulation with real-time charging/discharging curves
4. Design Yagi-Uda antenna experiment with radiation pattern visualization
5. Provide VR controller interactions (grab, select, teleport, info popups)
6. Support desktop fallback with mouse/keyboard controls
7. Deploy for HTTPS access on Quest 2/3 WebXR browser

---

## Lab Tables Structure

### Table 1: Components & Instruments
| # | Component | Icon | Purpose | Parameters | For RC | For Antenna | General |
|---|----------|------|--------|-----------|--------|-----------|---------|
| 1 | CRO | 📊 | Display waveforms | 20MHz, 2ch | ✅ | ✅ | ✅ |
| 2 | AFO | 🎵 | Signal source | 20Hz-20kHz | ✅ | - | ✅ |
| 3 | Spectrum | 📈 | Frequency domain | 9kHz-22GHz | - | ✅ | ✅ |
| 4 | Antenna | 📡 | RF transmit/receive | Varies | - | ✅ | ✅ |
| 5 | Radar | 🛰️ | Object detection | 1m accuracy | - | ✅ | ✅ |
| 6 | Resistor | ⚡ | Limit current | 10KΩ, 1/4W | ✅ | - | ✅ |
| 7 | Capacitor | 🔋 | Store energy | 1µF, 25V | ✅ | - | ✅ |
| 8 | Inductor | 🧲 | Magnetic storage | 10mH | - | - | ✅ |
| 9 | Relay | 🔌 | Switch | 5V SPDT | - | - | ✅ |
| 10 | Sensor | 🌡️ | Physical→electrical | TMP36 | - | - | ✅ |
| 11 | LED | 💡 | Light emission | 20mA | ✅ | - | ✅ |
| 12 | LCD 16x2 | 🖥️ | Text display | 2×16 chars | - | - | ✅ |

### Table 2: RC Circuit Simulation
**Circuits:**
- RC Low-Pass Filter
- RC High-Pass Filter  
- Charging/Discharging

**Features:**
- Variable R (1KΩ-100KΩ)
- Variable C (1µF-100µF)
- Real-time τ = R×C calculation
- Cutoff frequency fc = 1/(2πRC)
- Waveform display on CRO
- Theoretical vs simulated comparison

**Student Procedure:**
1. Select circuit type
2. Adjust R and C values
3. Observe waveform changes
4. Calculate expected τ and fc
5. Compare with simulation
6. Answer worksheet questions

### Table 3: Yagi-Uda Antenna
**Parameters:**
- Frequency: 144MHz, 435MHz, 1296MHz
- Elements: 3, 5, 7
- Gain, Directivity, Beamwidth, F/B Ratio

**Features:**
- 3D antenna visualization
- Radiation pattern (polar plot)
- Element identification
- Live parameter calculation

---

## WebXR Interaction Design (Quest 2/3)

| Action | Controller | VR Behavior |
|--------|-----------|------------|
| Select | Trigger | Highlight component, show info |
| Grab | Grip | Pick up, move component |
| Teleport | Thumbstick | Move around lab |
| Rotate | Two-hand grip | Rotate component |
| Wire | Trigger + drag | Connect terminals |
| Menu | A Button | Toggle UI panels |
| Back | B Button | Go back / close |

---

## Technical Stack

**Selected: Three.js + WebXR**
- Reasons:
  - Full control over 3D rendering
  - Direct WebXR API access
  - Smaller bundle than A-Frame
  - More flexibility for labs
  - Better Quest performance

**Stack:**
- **3D Engine:** Three.js r128
- **VR:** WebXR Device API
- **Deployment:** GitHub Pages / Netlify (HTTPS required)

---

## 3 Implementation Versions

### Version 1: MVP (Quick Build)
- Single HTML file
- Basic 3D lab with 6 components
- Simple circuit calculation
- Desktop mouse controls only
- No VR mode

### Version 2: Standard (Good Student Experience)
- Complete 3 tables
- All 12 components/instruments
- RC circuit simulation
- Antenna radiation plot
- Desktop + basic VR support

### Version 3: Advanced (Full VR Simulation)
- All Standard features
- Full WebXR VR controls
- Hand tracking
- Wire connection system
- Student worksheet mode
- Assessment quizzes

---

## What Is Easy
- Basic 3D scene with Three.js
- Component selection/info display
- Simple R×C calculations
- 2D graph rendering
- Desktop mouse navigation

---

## What Is Difficult
- Full VR wire connection between components
- Accurate circuit simulation (needs SPICE)
- Real-time antenna radiation calculation
- Hand tracking optimization
- Multiple user interactions

---

## What Can Be Approximated Visually
- Component 3D models (use primitives)
- Radiation pattern shape
- Circuit waveforms
- Antenna gain/directivity

---

## What Needs Real Simulation
- Accurate RC charging curves
- Frequency response
- Antenna parameters
- S-parameter display

---

## Risks & Limitations
1. **No real SPICE engine** - approximate waveforms only
2. **Quest performance** - must use low-poly models
3. **HTTPS required** - only works when deployed
4. **Single-user** - no multi-user sync yet
5. **Browser compatibility** - Quest 2/3 browser limits

---

## File Structure
```
AR-VR-mini-project/
├── index.html          # Main application
├── README.md          # This file
└── (assets/)         # (embedded or CDN)
```

---

## Hardware/Software Requirements

**Desktop:**
- Chrome/Firefox/Edge (latest)
- 4GB RAM minimum
- WebGL 2.0 support

**Quest 2/3:**
- Meta Quest browser
- HTTPS deployment
- Hand controllers

---

## Expected Result
- Live 3D electronics lab accessible via browser
- Interactive component exploration
- RC circuit simulation with waveforms
- Yagi-Uda antenna visualization
- VR mode on Quest 2/3

---

## Future Scope
- Add more circuit types (RL, RLC, filters)
- Implement SPICE simulation engine
- Add multi-user collaboration
- More antenna types (dipole, patch, helical)
- Wave interference experiments
- Student progress tracking
- Mobile AR mode (Quest passthrough)

---

## License
MIT

---

## Built With
- Three.js
- WebXR API
- PAVITHRA AI Agent