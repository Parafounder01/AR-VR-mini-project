/**
 * Signal Engine — Real-time Waveform Generator
 * Generates mathematical signals for CRO display
 */

window.SignalEngine = class SignalEngine {
  constructor() {
    this.frequency = 1000;
    this.amplitude = 5.0;
    this.phase = 0;
    this.waveform = 'sine';
    this.dcOffset = 0;
    this.noiseLevel = 0.05;
    this.time = 0;
    this.sampleRate = 44100;
  }

  sample(t) {
    const w = 2 * Math.PI * this.frequency;
    const A = this.amplitude;
    const phi = this.phase;
    let signal = 0;

    switch (this.waveform) {
      case 'sine':
        signal = A * Math.sin(w * t + phi);
        break;
      case 'square':
        signal = A * Math.sign(Math.sin(w * t + phi));
        break;
      case 'triangle':
        signal = (2 * A / Math.PI) * Math.asin(Math.sin(w * t + phi));
        break;
      case 'sawtooth':
        signal = (2 * A / Math.PI) * Math.atan(1 / Math.tan((Math.PI * this.frequency * t) + phi / 2));
        break;
      case 'noise':
        signal = A * (Math.random() * 2 - 1);
        break;
      default:
        signal = 0;
    }

    signal += this.dcOffset;
    signal += this.noiseLevel * A * (Math.random() * 2 - 1);

    return signal;
  }

  generateBuffer(numSamples, timebase) {
    const buffer = new Float32Array(numSamples);
    const dt = timebase / numSamples;
    for (let i = 0; i < numSamples; i++) {
      buffer[i] = this.sample(this.time + i * dt);
    }
    this.time += timebase;
    return buffer;
  }

  get vrms() { return this.amplitude / Math.SQRT2; }
  get period() { return 1 / this.frequency; }
  get vpp() { return 2 * this.amplitude; }
  get omega() { return 2 * Math.PI * this.frequency; }
};