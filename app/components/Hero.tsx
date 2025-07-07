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
            src="https://cdn.builder.io/o/assets%2F9cbbb97b27784086a538ac468ac265d8%2F40aafa13c57f462dae3258aed76d9e7d?alt=media&token=73b98b6f-8e0d-4acf-8f93-348cf00c690e&apiKey=9cbbb97b27784086a538ac468ac265d8"
            alt="Business growth illustration showing a person with laptop and analytics"
            className="hero__illustration"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
