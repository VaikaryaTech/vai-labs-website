import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicAsset from "@/assets/background-music.mp3.asset.json";

const STORAGE_KEY = "vai-bg-music-muted";
const DEFAULT_VOLUME = 0.12;
const MUSIC_SRC = `https://id-preview--45e7cdcb-ec4a-4532-9e54-30a521cfc568.lovable.app${musicAsset.url}`;

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem(STORAGE_KEY);
    // Default to audible at a low volume; playback starts only after a real user gesture.
    return stored === null ? false : stored === "true";
  });

  // Try to (re)start playback. Safe to call multiple times.
  const tryPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.muted) return;
    audio.volume = DEFAULT_VOLUME;
    const p = audio.play();
    if (p && typeof p.catch === "function") {
      p.then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
        /* Autoplay blocked — will retry on next user gesture. */
      });
    } else {
      setIsPlaying(!audio.paused);
    }
  }, []);

  // Initial mount: configure audio, attempt muted autoplay, and arm
  // listeners that start playback on the first user gesture.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = DEFAULT_VOLUME;
    audio.muted = muted;
    if (!muted) tryPlay();

    const onInteract = () => {
      if (!audio.muted) tryPlay();
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
    if (muted) {
      audio.pause();
      setIsPlaying(false);
    }
    localStorage.setItem(STORAGE_KEY, String(muted));
  }, [muted]);

  const handleToggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = DEFAULT_VOLUME;

    if (muted || audio.paused || !isPlaying) {
      setMuted(false);
      audio.muted = false;
      const p = audio.play();
      if (p && typeof p.catch === "function") {
        p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(!audio.paused);
      }
      return;
    }

    setMuted(true);
    audio.muted = true;
    audio.pause();
    setIsPlaying(false);
  };

  const isMuted = muted || !isPlaying;

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        loop
        preload="auto"
        playsInline
        crossOrigin="anonymous"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        title={isMuted ? "Unmute background music" : "Mute background music"}
        className="fixed bottom-5 right-5 z-[60] h-11 w-11 rounded-full border border-border bg-background/70 backdrop-blur-md flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-background/90 shadow-md transition-colors"
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </>
  );
};
