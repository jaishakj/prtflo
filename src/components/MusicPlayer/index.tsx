import { useRef, useState, useCallback, useEffect } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/assets/Sleeping-City.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing) {
      audio.play().catch(() => {
        setPlaying(false);
      });
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, [playing]);

  return (
    <button
      className={`music-player ${playing ? "playing" : ""}`}
      onClick={toggle}
      type="button"
      aria-label={playing ? "Pause background music" : "Play background music"}
      aria-pressed={playing}
    >
      <div className="music-visualizer">
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}
