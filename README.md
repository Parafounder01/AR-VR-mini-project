# 🎓 Virtual Electronics Lab - WebXR for Meta Quest 2/3

<p align="center">
<img src="https://img.shields.io/badge/Live-HTTPS-success?style=for-the-badge">
<img src="https://img.shields.io/badge/Platform-WebXR-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/Quest-2%2F3-purple?style=for-the-badge">
</p>

## 🔗 Live Demo

**URL:** https://Parafounder01.github.io/AR-VR-mini-project/

Open this URL in Meta Quest 2/3 browser for VR/AR mode.

---

## 📋 Project Summary

**Project Title:** Complete Virtual Electronics Lab - WebXR

**Abstract:**
An immersive 3D WebXR electronics laboratory featuring 20+ circuit types, 20+ components, real-time CRO waveforms, and VR/AR support for Meta Quest 2/3. Built with Three.js and WebXR API for browser-based learning without native apps.

---

## 🎯 Objectives (Completed)

✅ Create immersive 3D WebXR electronics lab via Quest browser  
✅ Implement 20+ electronic components with 3D models  
✅ Build interactive circuit simulation (RC, RL, 555, Oscillators, Digital)  
✅ Provide VR controller interactions (select, grab, teleport, info popups)  
✅ Support desktop fallback with mouse/keyboard controls  
✅ Deploy for HTTPS access on Quest 2/3 WebXR browser  

---

## 🔌 Circuit Types (20+ Categories)

### Filters
| Circuit | Description |
|---------|-------------|
| RC Low-Pass | Blocks high frequency |
| RC High-Pass | Blocks low frequency |
| Bandpass | Allows frequency range |
| Notch | Blocks frequency range |

### 555 Timer
| Circuit | Description |
|---------|-------------|
| 555 Astable | Free-running oscillator |
| 555 Monostable | One-shot pulse |

### Oscillators
| Circuit | Description |
|---------|-------------|
| Hartley | LC oscillator with tapped inductor |
| Colpitts | LC oscillator with tapped capacitor |
| Crystal | Stable frequency reference |

### Analog
| Circuit | Description |
|---------|-------------|
| Charge | Capacitor charging curve |
| Discharge | Capacitor discharging |
| Zener Regulator | Voltage regulation |
| Rectifier | AC to DC conversion |
| NPN CE | Common emitter amplifier |
| Emitter Follower | Buffer amplifier |

### Digital (NEW)
| Circuit | Description |
|---------|-------------|
| JK Toggle | JK Flip-Flop toggle mode |
| JK Clock | Clocked JK flip-flop |
| D Latch | Data latch |
| 4-bit Counter | Binary counter (Mod-16) |
| SR Latch | Set-Reset latch |
| XOR Gate | Exclusive OR logic |
| PWM | Pulse Width Modulation |
| PCM | Pulse Code Modulation |

---

## 🧩 Components (20+ Types)

### Passive
| Component | Icon | Values |
|-----------|------|--------|
| Resistor | ⚡ | 1KΩ - 100KΩ |
| Capacitor | 🔋 | 1µF - 100µF |
| Inductor | 🧲 | 1mH - 100mH |
| LED | 🔴 | Red/Green |
| Battery | 🔌 | 3V - 24V |

### Semiconductors
| Component | Icon | Purpose |
|-----------|------|---------|
| NPN Transistor | 🔺 | Amplifier/Switch |
| Diode | ▶ | Current one-way |
| Zener | ◀ | Voltage regulator |

### ICs
| Component | Icon | Purpose |
|-----------|------|---------|
| 555 Timer | 🕐 | Timing circuits |
| Relay | 🪬 | Electromechanical switch |
| JK Flip-Flop | 🟦 | Digital memory |
| D Flip-Flop | 🟩 | Data storage |
| Counter | 🔢 | Binary counter |
| XOR Gate | ⊕ | Logic gate |
| NAND Gate | ⊼ | Universal gate |

---

## 🕹️ Controls

### Desktop
| Action | Control |
|--------|---------|
| Add component | Drag from tray to breadboard |
| Rotate view | Right-drag mouse |
| Zoom | Scroll wheel |
| Select circuit | Click buttons |
| Adjust values | Sliders |
| Run simulation | Click "Run" button |

### VR (Quest 2/3)
| Action | Controller |
|--------|------------|
| Select component | Trigger |
| Grab & move | Grip |
| Point selection | Controller ray |
| Teleport | Thumbstick forward |
| Info popup | Select component |

### AR (Quest 3)
| Action | Description |
|--------|-------------|
| Camera passthrough | Enabled in AR mode |
| Lab overlay | Virtual lab on real world |

---

## 📊 Live Measurements

- **Vout**: Output voltage
- **Ton**: ON time (555 circuits)
- **Frequency**: Signal frequency  
- **Duty**: PWM duty cycle

### Calculations
- Time constant: τ = R × C
- Cutoff frequency: fc = 1/(2πRC)
- 555 Astable: T = 0.693(R1+2R2)C
- 555 Monostable: T = 1.1RC
- Hartley: f = 1/(2π√LC)

---

## 🔧 Technical Stack

- **3D Engine**: Three.js r128
- **VR/AR**: WebXR Device API
- **Deployment**: GitHub Pages (HTTPS)
- **Single File**: index.html (self-contained)

---

## 🎮 VR Controller Mapping

```
Quest Controller → Action
------------------------------------------
Trigger        → Select (show info popup)
Grip          → Grab and move object
Ray pointer   → Component selection
Thumbstick   → Teleport (when supported)
```

---

## 🚀 Deployment

### GitHub Pages (Current)
1. Go to repo Settings → Pages
2. Source: Deploy from branch
3. Branch: main → / (root)
4. Save → Wait 2-5 minutes

### Quick Deploy
- **URL**: https://Parafounder01.github.io/AR-VR-mini-project/

---

## 📁 File Structure

```
AR-VR-mini-project/
├── index.html     # Complete application (self-contained)
└── README.md      # This documentation
```

---

## ✅ What's Working

- [x] Desktop drag-drop component placement
- [x] Mouse navigation (rotate, zoom)
- [x] 20+ circuit types with real-time simulation
- [x] 20+ components with 3D models
- [x] Live CRO oscilloscope waveforms
- [x] 4 measurement meters
- [x] Value sliders (R, C, L, Vcc, R1, R2)
- [x] VR mode with controller support
- [x] VR teleport system
- [x] VR component info popups
- [x] AR passthrough mode (Quest 3)
- [x] Help and Theory guides

---

## 🎓 Learning Outcomes

After using this lab, students will understand:
- RC circuit time constant and cutoff frequency
- 555 timer operation (astable/monostable)
- Oscillator principles (Hartley/Colpitts)
- Digital logic (flip-flops, counters, gates)
- PWM and signal modulation
- Component identification and pinouts
- VR interaction design

---

## 🔬 Testing Checklist

- [x] PC: Drag components → breadboard
- [x] PC: Select circuit → Run
- [x] PC: Adjust sliders → Values update
- [x] Quest VR: Enter VR mode
- [x] Quest VR: Point → Select with trigger
- [x] Quest VR: Grip → Move component
- [x] Quest VR: See info popup
- [x] Quest AR: Enter AR mode
- [x] Quest AR: Camera passthrough

---

## 🐛 Known Limitations

1. Approximate waveform simulation (not full SPICE)
2. Single-user (no multi-player)
3. Requires HTTPS for WebXR
4. VR hand tracking optional

---

## 🚦 Future Enhancements

- [ ] Multi-user collaboration
- [ ] More circuit types (filters, modulators)
- [ ] SPICE-level simulation
- [ ] Student progress tracking
- [ ] Assessment quizzes
- [ ] Mobile touch controls

---

## 📜 License

MIT License

---

## 🤖 Built With

- **Three.js** - 3D Rendering
- **WebXR API** - VR/AR Support  
- **Anantha kumar** - Development

---

<p align="center">
<strong>🎉 Full Electronics Lab Ready for Meta Quest 2/3! 🎉</strong>

Open in Quest Browser: https://Parafounder01.github.io/AR-VR-mini-project/
</p>
