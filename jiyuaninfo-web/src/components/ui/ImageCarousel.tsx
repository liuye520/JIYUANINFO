"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  autoPlay = true,
  interval = 4000,
  className = "",
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, images.length]);

  if (images.length === 0) return null;

  return (
    <div className={`rounded-xl overflow-hidden ${className}`}>
      {/* Image area */}
      <div className="relative h-[240px] md:h-[360px] lg:h-[480px] overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls bar */}
      {images.length > 1 && (
        <div className="flex items-center justify-between bg-white h-10 px-4">
          <button
            onClick={prev}
            className="w-7 h-7 rounded-full bg-[#E5E6EB] flex items-center justify-center hover:bg-[#C9CDD4] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#4E5969]" />
          </button>
          <div className="flex items-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-[#2B5AED]" : "bg-[#C9CDD4]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-7 h-7 rounded-full bg-[#E5E6EB] flex items-center justify-center hover:bg-[#C9CDD4] transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#4E5969]" />
          </button>
        </div>
      )}
    </div>
  );
}
