/**
 * Elegant Web Audio synthesizer for ambient romantic melody
 * Soft harp / music-box style arpeggios that play gently in background
 */

class RomanticAmbientPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.noteIndex = 0;
    // Gentle melodic notes in D major pentatonic / romantic chord progression
    this.frequencies = [
      293.66, 369.99, 440.00, 587.33, 659.25, 739.99, 880.00,
      587.33, 440.00, 369.99, 329.63, 392.00, 493.88, 587.33,
      440.00, 369.99, 293.66, 369.99, 440.00, 587.33, 659.25,
      587.33, 440.00, 369.99, 293.66, 220.00, 293.66, 369.99
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playNote(freq) {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Soft bell / harp harmonic mix
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.9);
    } catch (e) {
      console.warn("Audio note error", e);
    }
  }

  start(onStateChange) {
    this.init();
    this.isPlaying = true;
    if (onStateChange) onStateChange(true);

    const step = () => {
      if (!this.isPlaying) return;
      const freq = this.frequencies[this.noteIndex % this.frequencies.length];
      this.playNote(freq);
      this.noteIndex++;
      this.timer = setTimeout(step, 650);
    };

    step();
  }

  stop(onStateChange) {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (onStateChange) onStateChange(false);
  }

  toggle(onStateChange) {
    if (this.isPlaying) {
      this.stop(onStateChange);
    } else {
      this.start(onStateChange);
    }
  }
}

export const ambientPlayer = new RomanticAmbientPlayer();
