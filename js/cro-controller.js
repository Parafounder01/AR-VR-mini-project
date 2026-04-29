/**
 * CRO Controller — A-Frame Component
 * Manages CRO display and real-time canvas waveform rendering
 */

AFRAME.registerComponent('cro-controller', {
  schema: {
    timebase: { type: 'number', default: 0.001 },
    voltdiv: { type: 'number', default: 1.0 },
    trigger: { type: 'number', default: 0 },
    channel: { type: 'int', default: 1 },
    running: { type: 'boolean', default: true },
    grid: { type: 'boolean', default: true }
  },

  init: function() {
    this.signal = new window.SignalEngine();
    this.canvas = document.createElement('canvas');
    this.canvas.width = 512;
    this.canvas.height = 384;
    this.ctx = this.canvas.getContext('2d');
    this.animFrame = null;
    this._startRender();

    const display = this.el.querySelector('#cro-screen');
    if (display) {
      display.addEventListener('loaded', () => {
        this._updateTexture();
      });
    }

    this.el.sceneEl.addEventListener('afo-signal-update', (e) => {
      const detail = e.detail;
      this.signal.frequency = detail.frequency;
      this.signal.amplitude = detail.amplitude;
      this.signal.waveform = detail.waveform;
      this.signal.dcOffset = detail.dcOffset;
    });
  },

  _startRender: function() {
    const render = () => {
      this._drawScope();
      this.animFrame = requestAnimationFrame(render);
    };
    render();
  },

  _drawScope: function() {
    const W = this.canvas.width;
    const H = this.canvas.height;
    const ctx = this.ctx;
    const data = this.data;
    const N = 512;
    const timeWindow = data.timebase * 10;

    ctx.fillStyle = '#001100';
    ctx.fillRect(0, 0, W, H);

    if (data.grid) {
      ctx.strokeStyle = '#00440044';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 10; i++) {
        const x = (i / 10) * W;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let j = 0; j <= 8; j++) {
        const y = (j / 8) * H;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.strokeStyle = '#00660066';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(W / 2, 0);
      ctx.lineTo(W / 2, H);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, H / 2);
      ctx.lineTo(W, H / 2);
      ctx.stroke();
    }

    const trigY = H / 2 - (data.trigger / (data.voltdiv * 8)) * H;
    ctx.strokeStyle = '#ff880055';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(0, trigY);
    ctx.lineTo(W, trigY);
    ctx.stroke();
    ctx.setLineDash([]);

    const samples = this.signal.generateBuffer(N, timeWindow);
    ctx.strokeStyle = '#00ff44';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#00ff4466';
    ctx.shadowBlur = 4;
    ctx.beginPath();

    for (let i = 0; i < N; i++) {
      const x = (i / N) * W;
      const volts = samples[i];
      const y = H / 2 - (volts / (data.voltdiv * 8)) * H;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#00ff88cc';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('f = ' + this._formatFreq(this.signal.frequency), 8, 16);
    ctx.fillText('Vpp = ' + this.signal.vpp.toFixed(2) + ' V', 8, 32);
    ctx.fillText('Vrms = ' + this.signal.vrms.toFixed(3) + ' V', 8, 48);
    ctx.fillText('T = ' + this._formatTime(this.signal.period), 8, 64);
    ctx.fillText((data.timebase * 1000) + ' ms/div', W - 90, 16);
    ctx.fillText(data.voltdiv + ' V/div', W - 70, 32);

    ctx.fillStyle = '#ffaa00cc';
    ctx.fillText('CH1 — ' + this.signal.waveform.toUpperCase(), 8, H - 8);
  },

  _formatFreq: function(hz) {
    if (hz >= 1e6) return (hz / 1e6).toFixed(2) + ' MHz';
    if (hz >= 1e3) return (hz / 1e3).toFixed(2) + ' kHz';
    return hz.toFixed(1) + ' Hz';
  },

  _formatTime: function(s) {
    if (s < 1e-6) return (s * 1e9).toFixed(1) + ' ns';
    if (s < 1e-3) return (s * 1e6).toFixed(1) + ' μs';
    if (s < 1) return (s * 1e3).toFixed(2) + ' ms';
    return s.toFixed(3) + ' s';
  },

  remove: function() {
    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
    }
  }
});