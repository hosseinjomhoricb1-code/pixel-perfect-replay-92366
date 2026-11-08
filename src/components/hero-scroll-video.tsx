import { useEffect, useRef } from "react";

type HeroScrollVideoProps = {
  className?: string;
};

export function HeroScrollVideo({ className = "" }: HeroScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetTimeRef = useRef(0);
  const displayedTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const getScrollTime = () => {
      const hero = video.closest("section");
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const heroTop = hero ? hero.getBoundingClientRect().top + scrollTop : 0;
      const heroHeight = Math.max(hero?.getBoundingClientRect().height || window.innerHeight, 1);
      const progress = Math.min(Math.max((scrollTop - heroTop) / heroHeight, 0), 1);
      return progress * (Number.isFinite(video.duration) ? video.duration : 0);
    };

    const updateTarget = () => {
      targetTimeRef.current = getScrollTime();
    };

    const renderFrame = () => {
      const distance = targetTimeRef.current - displayedTimeRef.current;
      displayedTimeRef.current += distance * 0.14;
      if (Math.abs(distance) < 0.01) displayedTimeRef.current = targetTimeRef.current;
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        video.currentTime = displayedTimeRef.current;
      }
      animationFrameRef.current = window.requestAnimationFrame(renderFrame);
    };

    video.pause();
    video.addEventListener("loadedmetadata", updateTarget);
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
