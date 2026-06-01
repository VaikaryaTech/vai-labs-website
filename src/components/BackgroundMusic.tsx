import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import musicAsset from "@/assets/background-music.mp3.asset.json";

const STORAGE_KEY = "vai-bg-music-muted";
const DEFAULT_VOLUME = 0.12;

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem(STORAGE_KEY);
    // Default to muted to comply with browser autoplay policies; user unmutes.
    return stored === null ? true : stored === "true";
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = DEFAULT_VOLUME;
    audio.muted = muted;
    const tryPlay = () => {
      audio.play().catch(() => {
        // Autoplay blocked — will start after first user interaction.
      });
    };
    tryPlay();

    const onFirstInteract = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
    window.addEventListener("pointerdown", onFirstInteract, { once: true });
    window.addEventListener("keydown", onFirstInteract, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstInteract);
      window.removeEventListener("keydown", onFirstInteract);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = muted;
    localStorage.setItem(STORAGE_KEY, String(muted));
    if (!muted && audioRef.current?.paused) {
      audioRef.current.play().catch(() => {});
    }
  }, [muted]);

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
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute background music" : "Mute background music"}
        title={muted ? "Unmute background music" : "Mute background music"}
        className="fixed bottom-5 right-5 z-[60] h-11 w-11 rounded-full border border-border bg-background/70 backdrop-blur-md flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-background/90 shadow-md transition-colors"
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </>
  );
};
