import { useEffect, useRef } from "react";

type HeroScrollVideoProps = {
  className?: string;
};

export function HeroScrollVideo({ className = "" }: HeroScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const animate = () => {
      const smoothing = 0.14;
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * smoothing;
      if (video.duration) video.currentTime = currentProgressRef.current * video.duration;

      if (Math.abs(targetProgressRef.current - currentProgressRef.current) > 0.0005) {
        frameRef.current = window.requestAnimationFrame(animate);
      } else {
        frameRef.current = null;
      }
    };

    const syncToScroll = () => {
      const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      targetProgressRef.current = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(animate);
    };

    const handleLoadedMetadata = () => {
      video.currentTime = 0;
      syncToScroll();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    window.addEventListener("scroll", syncToScroll, { passive: true });
    syncToScroll();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", syncToScroll);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src="/hero-house-scroll.mp4"
      muted
      playsInline
      preload="auto"
      aria-label="Cinematic walkthrough of a modern home"
    />
  );
}
