"use client";

import React from "react";
import { Button } from "./Button";

export interface HeroProps {
  className?: string;
}

export function Hero({ className = "" }: HeroProps) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__heading">
              <span className="hero__heading-primary">
                Lessons and insights{" "}
              </span>
              <span className="hero__heading-accent">from 8 years</span>
            </h1>
            <p className="hero__subtitle">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <Button type="primary" size="medium" className="hero__cta">
            Register
          </Button>
        </div>
        <div className="hero__visual">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F9cbbb97b27784086a538ac468ac265d8%2F5ffe54d7dbef47bc985bb524ff171116?format=webp&width=800"
            alt="Developer illustration showing a programmer working with code, HTML, CSS and development tools"
            className="hero__illustration"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
