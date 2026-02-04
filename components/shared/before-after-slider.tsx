"use client";

import Image from "next/image";
import { useId, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  className = "",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);
  const sliderId = useId();

  return (
    <div
      className={`overflow-hidden w-full h-[60vh] border border-white/10 bg-(--card) shadow-[0_24px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="relative aspect-video w-full h-[50vh]">
        <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
            priority
          />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          
          <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority
        />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 flex items-center"
          style={{ left: `${value}%` }}
        >
          <div className="h-full w-px bg-white/80" />
        </div>
        <div className="absolute left-4 bottom-4 rounded-full border border-white/10 bg-[rgba(11,15,20,0.7)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
          Before
        </div>
        <div className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-[rgba(11,15,20,0.7)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground backdrop-blur">
          After
        </div>
      </div>
      <div className="flex flex-col gap-2 border-t border-white/10 bg-[rgba(11,15,20,0.5)] px-6 py-4 text-xs uppercase tracking-[0.2em] text-(--muted)">
        <label htmlFor={sliderId} className="text-[0.65rem]">
          Drag to reveal the edit
        </label>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-full accent-[rgb(244,184,58)]"
          aria-label="Before and after slider"
        />
      </div>
    </div>
  );
}
