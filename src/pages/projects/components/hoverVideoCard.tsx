import { useRef, useState } from "react";
import type { ReactNode } from "react";

type HoverVideoCareProps = {
  children: ReactNode;
  videoSrc: string;
};

export default function HoverVideoCard({
  children,
  videoSrc,
}: HoverVideoCareProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      video.classList.add("opacity-100");
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.classList.remove("opacity-100");
    }
  };
  const handleEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.classList.remove("opacity-100");
    }
  };
  return (
    <div
      className={`bg-background-dark relative transition-all duration-500 project-card overflow-hidden p-0
        ${isHovered ? "extra-glowing-blue-border" : "glowing-blue-border"} `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[500ms] pointer-events-none"
          muted
          preload="auto"
          onEnded={handleEnded}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="relative z-10 h-full w-full backdrop-blur-[0px] p-5 m-0">
        {children}
      </div>
    </div>
  );
}
