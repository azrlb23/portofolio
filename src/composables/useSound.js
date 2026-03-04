import { ref } from 'vue';

export function useSound() {
    const isEnabled = ref(true); // Can toggle later if needed

    // Need to wait for user interaction before AudioContext can be created safely in some browsers
    let audioCtx = null;

    const initAudio = () => {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                audioCtx = new AudioContext();
            }
        }
    };

    /**
     * Helper to play a soft, short percussive UI sound (like a muted tap)
     */
    const playTap = (baseFreq, duration = 0.05, vol = 0.03, type = 'sine') => {
        if (!isEnabled.value) return;
        initAudio();
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        // Use a low sine wave for a heavy, premium "thump" or "click"
        osc.type = type;

        // Pitch envelope: sharp drop to give it a percussive attack
        osc.frequency.setValueAtTime(baseFreq * 2, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(baseFreq, audioCtx.currentTime + 0.02);

        // Amplitude envelope: sharp attack, smooth decay
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + 0.005);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    };

    /**
     * Helper to play a soft sweeping UI sound (like a smooth card slide)
     */
    const playSweep = (startFreq, endFreq, duration = 0.2, vol = 0.02) => {
        if (!isEnabled.value) return;
        initAudio();
        if (!audioCtx) return;
        if (audioCtx.state === 'suspended') audioCtx.resume();

        const osc = audioCtx.createOscillator();
        // A lowpass filter smooths out the raw oscillator to make it organic
        const filter = audioCtx.createBiquadFilter();
        const gainNode = audioCtx.createGain();

        osc.type = 'sine';

        // Freq Sweep
        osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(endFreq, audioCtx.currentTime + duration * 0.8);

        // Filter Settings
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(startFreq * 2, audioCtx.currentTime);

        // Amplitude envelope: soft swell and fade
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + duration * 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    };

    const playClick = () => {
        // Deep, muted wooden tap feeling (very soft)
        playTap(150, 0.08, 0.06);
    };

    const playOpen = () => {
        // Smooth, breathy rise
        playSweep(200, 450, 0.25, 0.06);
    };

    const playClose = () => {
        // Soft, quick dimuendo fall
        playSweep(300, 150, 0.15, 0.04);
    };

    const playType = () => {
        // Premium soft keyboard thock (very low pitch, quick duration)
        playTap(200, 0.04, 0.02);
    };

    return {
        isEnabled,
        playClick,
        playOpen,
        playClose,
        playType
    };
}
