"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "./Button";
import heroSlidesData from "../../data/heroSlides.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export interface HeroProps {
  className?: string;
}

interface HeroSlide {
  id: number;
  title: {
    primary: string;
    accent: string;
  };
  subtitle: string;
  ctaText: string;
  image: {
    src: string;
    alt: string;
  };
}

export function Hero({ className = "" }: HeroProps) {
  const slides: HeroSlide[] = heroSlidesData;
  const showPagination = slides.length > 1;

  return (
    <section className={`hero ${className}`}>
      <div className="sec__container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={
            showPagination
              ? {
                  clickable: true,
                  el: ".hero__pagination",
                  bulletClass: "hero__pagination-bullet",
                  bulletActiveClass: "hero__pagination-bullet--active",
                }
              : false
          }
          className="hero__slider"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hero__slide">
                <div className="hero__content">
                  <div className="hero__text">
                    <h1 className="headline-1 sec__title">
                      <span className="hero__heading-primary">
                        {slide.title.primary}{" "}
                      </span>
                      <span className="hero__heading-accent">
                        {slide.title.accent}
                      </span>
                    </h1>
                    <p className="hero__subtitle">{slide.subtitle}</p>
                  </div>
                  <Button type="primary" size="medium" className="hero__cta">
                    {slide.ctaText}
                  </Button>
                </div>
                <div className="hero__visual">
                  <img
                    src={slide.image.src}
                    alt={slide.image.alt}
                    className="hero__illustration"
                    loading={slide.id === 1 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showPagination && <div className="hero__pagination"></div>}
      </div>
    </section>
  );
}
