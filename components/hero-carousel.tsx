"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const slides = [
  { src: "/reference/hero-bedroom.jpg", alt: "A calm bedroom with blue upholstery and botanical artwork" },
  { src: "/carousel/interior-01.jpg", alt: "Gulmohar Spaces residential interior" },
  { src: "/carousel/interior-02.jpg", alt: "Gulmohar Spaces interior project" },
  { src: "/carousel/interior-03.jpg", alt: "Gulmohar Spaces designed room" },
  { src: "/carousel/interior-04.png", alt: "Gulmohar Spaces interior study" },
  { src: "/carousel/interior-05.png", alt: "Botanical cafe interior in golden light" },
  { src: "/carousel/interior-06.png", alt: "Warm cafe kitchen with a terracotta island" },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const carouselSlides = useMemo(() => [...slides, slides[0]], []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reduceMotion || isMoving) return;

    const timer = window.setTimeout(() => {
      setIsMoving(true);
      setIndex((current) => current + 1);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [index, isMoving, reduceMotion]);

  const finishMove = () => {
    if (index === slides.length) {
      setIsMoving(false);
      setIndex(0);
      return;
    }

    setIsMoving(false);
  };

  return (
    <div className="hero-carousel" role="region" aria-label="Featured interiors" aria-roledescription="carousel">
      <div
        className="hero-carousel__track"
        style={{
          transform: `translate3d(-${index * 100}%, 0, 0)`,
          transition: isMoving ? undefined : "none",
        }}
        onTransitionEnd={finishMove}
      >
        {carouselSlides.map((slide, slideIndex) => {
          const isClone = slideIndex === slides.length;
          return (
            <div
              className="hero-carousel__slide"
              key={`${slide.src}-${slideIndex}`}
              aria-hidden={slideIndex !== index || isClone}
            >
              <Image
                priority={slideIndex === 0}
                fill
                src={slide.src}
                alt={isClone ? "" : slide.alt}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
