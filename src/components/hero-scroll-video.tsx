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

    const getScrollProgress = () => {
      const hero = video.parentElement;
      const scrollTop = document.scrollingElement?.scrollTop ?? window.scrollY;
      const heroStart = hero ? hero.getBoundingClientRect().top + scrollTop : 0;
      const heroDistance = Math.max(hero?.clientHeight ?? window.innerHeight, 1);
      return Math.min(Math.max((scrollTop - heroStart) / heroDistance, 0), 1);
    };

    const animate = () => {
      targetProgressRef.current = getScrollProgress();
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.16;
      if (video.duration) video.currentTime = currentProgressRef.current * video.duration;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const syncToScroll = () => {
      targetProgressRef.current = getScrollProgress();
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
