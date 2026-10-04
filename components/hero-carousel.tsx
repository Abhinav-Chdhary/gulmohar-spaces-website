import Image from "next/image";

const slides = [
  { src: "/reference/hero-bedroom.jpg", alt: "A calm bedroom with blue upholstery and botanical artwork" },
  { src: "/carousel/interior-01.jpg", alt: "Gulmohar Spaces residential interior" },
  { src: "/carousel/interior-02.jpg", alt: "Gulmohar Spaces interior project" },
  { src: "/carousel/interior-03.jpg", alt: "Gulmohar Spaces designed room" },
  { src: "/carousel/interior-04.webp", alt: "Gulmohar Spaces interior study" },
  { src: "/carousel/interior-05.webp", alt: "Botanical cafe interior in golden light" },
  { src: "/carousel/interior-06.webp", alt: "Warm cafe kitchen with a terracotta island" },
];

export function HeroCarousel() {
  const carouselSlides = [...slides, slides[0]];

  return (
    <div className="hero-carousel" role="region" aria-label="Featured interiors" aria-roledescription="carousel">
      <div className="hero-carousel__track">
        {carouselSlides.map((slide, slideIndex) => {
          const isClone = slideIndex === slides.length;
          return (
            <div
              className="hero-carousel__slide"
              key={`${slide.src}-${slideIndex}`}
              aria-hidden={slideIndex !== 0 || isClone}
            >
              <Image
                priority={slideIndex === 0}
                loading={slideIndex === 0 ? "eager" : "lazy"}
                fetchPriority={slideIndex === 0 ? "high" : "low"}
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
