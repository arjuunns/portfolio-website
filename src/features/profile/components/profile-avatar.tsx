"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const FRONT_IMAGE = "/images/profile/pf-main.JPG";
const BACK_IMAGE = "/images/profile/pf-back.jpg";

export function ProfileAvatar({
  alt,
  className,
}: {
  alt: string;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  const faceClass =
    "absolute inset-0 size-full rounded-full object-cover select-none ring-1 ring-border ring-offset-2 ring-offset-background [backface-visibility:hidden]";

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-label="Flip profile photo"
      aria-pressed={flipped}
      className={cn(
        "size-32 shrink-0 cursor-pointer rounded-full [perspective:1000px] sm:size-40",
        className
      )}
    >
      <div
        className="relative size-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <img
          className={faceClass}
          src={FRONT_IMAGE}
          alt={alt}
          fetchPriority="high"
          draggable={false}
        />

        {/* Back */}
        <img
          className={cn(faceClass, "[transform:rotateY(180deg)]")}
          src={BACK_IMAGE}
          alt={`${alt} (back)`}
          loading="lazy"
          draggable={false}
        />
      </div>
    </button>
  );
}
