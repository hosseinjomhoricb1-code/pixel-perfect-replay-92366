import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type HeroScrollVideoProps = {
  className?: string;
  poster?: string;
};

export function HeroScrollVideo({ className = "", poster }: HeroScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const displayedTimeRef = useRef(0);
  const [muted, setMuted] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTarget = () => {
      const hero = video.closest("section");
      const scrollTop = document.scrollingElement?.scrollTop ?? window.scrollY;
      const heroTop = hero ? hero.getBoundingClientRect().top + scrollTop : 0;
      const heroHeight = Math.max(hero?.getBoundingClientRect().height ?? window.innerHeight, 1);
      const progress = Math.min(Math.max((scrollTop - heroTop) / heroHeight, 0), 1);
      targetTimeRef.current = progress * (Number.isFinite(video.duration) ? video.duration : 0);
    };

    const renderFrame = () => {
      const distance = targetTimeRef.current - displayedTimeRef.current;
      displayedTimeRef.current += distance * 0.12;
      if (Math.abs(distance) < 0.01) displayedTimeRef.current = targetTimeRef.current;
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        video.currentTime = displayedTimeRef.current;
        const duration = Number.isFinite(video.duration) ? video.duration : 0;
        const progress = duration > 0 ? displayedTimeRef.current / duration : 0;
        video.style.transform = `scale(${1.08 - progress * 0.04}) translate3d(0, ${progress * -2}%, 0)`;
      }
      animationFrameRef.current = window.requestAnimationFrame(renderFrame);
    };

    video.pause();
    video.addEventListener("loadedmetadata", updateTarget);
    video.addEventListener("error", () => setVideoFailed(true));
    window.addEventListener("scroll", updateTarget, { passive: true });
    updateTarget();
    animationFrameRef.current = window.requestAnimationFrame(renderFrame);

    return () => {
      video.removeEventListener("loadedmetadata", updateTarget);
      window.removeEventListener("scroll", updateTarget);
      if (animationFrameRef.current !== null) window.cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="sticky top-0 h-[100svh] overflow-hidden rounded-3xl">
      {videoFailed && poster ? <img src={poster} alt="" className={`${className} absolute`} aria-hidden="true" /> : null}
      <video
        ref={videoRef}
        className={`${className} ${videoFailed ? "hidden" : ""}`}
        src="/hero-house-scroll.mp4"
        poster={poster}
        muted={muted}
        playsInline
        preload="auto"
        aria-label="Cinematic walkthrough of a modern home"
      />
      <button
        type="button"
        onClick={() => setMuted((value) => !value)}
        className="absolute bottom-8 left-5 z-10 flex items-center gap-2 rounded-full bg-ink/55 px-3 py-2 text-xs text-ink-foreground backdrop-blur-sm md:left-12"
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
      >
        {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        {muted ? "Sound off" : "Sound on"}
      </button>
    </div>
  );
}
