// Create and manage sound effects using Web Audio API
class SoundManager {
  private audioContext: AudioContext | null = null;
  private enabled: boolean = true;

  private initAudioContext() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  private resumeAudioContext() {
    if (
      this.audioContext &&
      this.audioContext.state === "suspended"
    ) {
      this.audioContext.resume();
    }
  }

  // Soft click/hover sound
  playHoverSound(frequency: number = 800) {
    if (!this.enabled) return;

    try {
      const ctx = this.initAudioContext();
      this.resumeAudioContext();

      const now = ctx.currentTime;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, now);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.5, now + 0.1);

      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

      oscillator.start(now);
      oscillator.stop(now + 0.1);
    } catch (e) {
      console.log("Audio playback not available");
    }
  }

  // Smooth transition sound
  playTransitionSound(startFreq: number = 600, endFreq: number = 1000) {
    if (!this.enabled) return;

    try {
      const ctx = this.initAudioContext();
      this.resumeAudioContext();

      const now = ctx.currentTime;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(startFreq, now);
      oscillator.frequency.exponentialRampToValueAtTime(endFreq, now + 0.15);

      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

      oscillator.start(now);
      oscillator.stop(now + 0.15);
    } catch (e) {
      console.log("Audio playback not available");
    }
  }

  // Click/tap sound
  playClickSound() {
    if (!this.enabled) return;

    try {
      const ctx = this.initAudioContext();
      this.resumeAudioContext();

      const now = ctx.currentTime;
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(1200, now);
      oscillator.frequency.exponentialRampToValueAtTime(600, now + 0.08);

      gainNode.gain.setValueAtTime(0.12, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      oscillator.start(now);
      oscillator.stop(now + 0.08);
    } catch (e) {
      console.log("Audio playback not available");
    }
  }

  // Success/positive sound
  playSuccessSound() {
    if (!this.enabled) return;

    try {
      const ctx = this.initAudioContext();
      this.resumeAudioContext();

      const now = ctx.currentTime;
      const notes = [800, 1000, 1200];

      notes.forEach((freq, index) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(freq, now);

        const delay = index * 0.08;
        gainNode.gain.setValueAtTime(0, now + delay);
        gainNode.gain.linearRampToValueAtTime(0.1, now + delay + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.15);

        oscillator.start(now + delay);
        oscillator.stop(now + delay + 0.15);
      });
    } catch (e) {
      console.log("Audio playback not available");
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  isEnabled() {
    return this.enabled;
  }
}

export const soundManager = new SoundManager();
