/**
 * AFO Controller — Audio Frequency Oscillator
 * Controls frequency, amplitude, waveform type
 */

AFRAME.registerComponent('afo-controller', {
  schema: {
    frequency: { type: 'number', default: 1000 },
    amplitude: { type: 'number', default: 5.0 },
    waveform: { type: 'string', default: 'sine' },
    dcOffset: { type: 'number', default: 0 },
    outputOn: { type: 'boolean', default: true }
  },

  init: function() {
    this._emitSignal();
    this._updateDisplay();
  },

  tick: function() {
    // Display cycling handled in main.js via events
  },

  _emitSignal: function() {
    this.el.sceneEl.emit('afo-signal-update', {
      frequency: this.data.frequency,
      amplitude: this.data.amplitude,
      waveform: this.data.waveform,
      dcOffset: this.data.dcOffset
    });
  },

  _updateDisplay: function() {
    const display = this.el.querySelector('[afo-display]');
    if (display) {
      const text = this._formatFreq(this.data.frequency);
      const label = this.el.querySelector('a-text');
      if (label) {
        label.setAttribute('value', text);
      }
    }
    
    // Update signal info panel
    const freqText = document.querySelector('#signal-freq-text');
    const ampText = document.querySelector('#signal-amp-text');
    const typeText = document.querySelector('#signal-type-text');
    const periodText = document.querySelector('#signal-period-text');
    const vrmsText = document.querySelector('#signal-vrms-text');
    
    if (freqText) freqText.setAttribute('value', 'Frequency: ' + this._formatFreq(this.data.frequency));
    if (ampText) ampText.setAttribute('value', 'Amplitude: ' + this.data.amplitude.toFixed(2) + ' V');
    if (typeText) typeText.setAttribute('value', 'Waveform: ' + this.data.waveform.toUpperCase());
    if (periodText) periodText.setAttribute('value', 'Period: ' + (1000 / this.data.frequency).toFixed(4) + ' ms');
    if (vrmsText) vrmsText.setAttribute('value', 'Vrms: ' + (this.data.amplitude / Math.SQRT2).toFixed(3) + ' V');
  },

  _updateWristHUD: function() {
    const wristFreq = document.querySelector('#wrist-hud a-text:nth-child(2)');
    const wristWave = document.querySelector('#wrist-hud a-text:nth-child(3)');
    const wristVolts = document.querySelector('#wrist-hud a-text:nth-child(4)');
    
    if (wristFreq) wristFreq.setAttribute('value', 'Freq: ' + this._formatFreq(this.data.frequency));
    if (wristWave) wristWave.setAttribute('value', 'Wave: ' + this.data.waveform.toUpperCase());
    if (wristVolts) wristVolts.setAttribute('value', 'Vpp: ' + (this.data.amplitude * 2).toFixed(1) + ' V');
  },

  setFrequency: function(freq) {
    this.data.frequency = freq;
    this._emitSignal();
    this._updateDisplay();
    this._updateWristHUD();
  },

  setAmplitude: function(amp) {
    this.data.amplitude = amp;
    this._emitSignal();
    this._updateDisplay();
    this._updateWristHUD();
  },

  setWaveform: function(type) {
    this.data.waveform = type;
    this._emitSignal();
    this._updateDisplay();
    this._updateWristHUD();
  },

  cycleFrequency: function() {
    const ranges = [50, 100, 500, 1000, 5000, 10000, 50000, 100000];
    const idx = ranges.findIndex(r => r >= this.data.frequency);
    this.data.frequency = ranges[(idx + 1) % ranges.length];
    this._emitSignal();
    this._updateDisplay();
    this._updateWristHUD();
  },

  _formatFreq: function(hz) {
    if (hz >= 1e6) return (hz / 1e6).toFixed(2) + ' MHz';
    if (hz >= 1e3) return (hz / 1e3).toFixed(2) + ' kHz';
    return hz.toFixed(1) + ' Hz';
  }
});