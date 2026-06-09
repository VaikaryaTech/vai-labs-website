import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicAsset from "@/assets/background-music.mp3.asset.json";

const STORAGE_KEY = "vai-bg-music-muted";
const DEFAULT_VOLUME = 0.12;

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem(STORAGE_KEY);
    // Default to muted on first visit to satisfy autoplay policies.
    return stored === null ? true : stored === "true";
  });

  // Try to (re)start playback. Safe to call multiple times.
  const tryPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = DEFAULT_VOLUME;
    const p = audio.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        /* Autoplay blocked — will retry on next user gesture. */
      });
    }
  }, []);

  // Initial mount: configure audio, attempt muted autoplay, and arm
  // listeners that start playback on the first user gesture.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = DEFAULT_VOLUME;
    audio.muted = muted;
    tryPlay();

    const onInteract = () => {
      tryPlay();
    };
    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "click",
      "keydown",
      "touchstart",
      "scroll",
    ];
    events.forEach((ev) =>
      window.addEventListener(ev, onInteract, { once: true, passive: true } as AddEventListenerOptions),
    );

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, onInteract));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync mute state -> audio element + persistence.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = muted;
    localStorage.setItem(STORAGE_KEY, String(muted));
  }, [muted]);

  const handleToggle = () => {
    const audio = audioRef.current;
    const next = !muted;
    setMuted(next);
    if (!audio) return;
    // Apply + play synchronously inside the click gesture so browsers
    // accept the play() promise even when audio was never started.
    audio.muted = next;
    audio.volume = DEFAULT_VOLUME;
    const p = audio.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={musicAsset.url}
        loop
        preload="auto"
        autoPlay
        playsInline
      />
      <button
        type="button"
        onClick={handleToggle}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        title={muted ? "Unmute background music" : "Mute background music"}
        className="fixed bottom-5 right-5 z-[60] h-11 w-11 rounded-full border border-border bg-background/70 backdrop-blur-md flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-background/90 shadow-md transition-colors"
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </>
  );
};
