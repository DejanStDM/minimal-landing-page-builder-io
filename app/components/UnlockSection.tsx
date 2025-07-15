import React from "react";
import { Button } from "./Button";
import { SectionHeader } from "./SectionHeader";

interface UnlockSectionProps {
  title: string;
  description: string;
  button: string;
  image: string;
  buttonHref: string;
  className?: string;
}

export function UnlockSection({ title, description, button, image, buttonHref, className = "" }: UnlockSectionProps) {
  return (
    <section className={`unlock section__spacing-top section__spacing-bottom ${className}`}>
      <div className="sec__container">
        <div className="unlock__wrapper">
          <div className="unlock__image-wrap">
            <img src={image} alt="Unlock illustration" className="unlock__image" />
          </div>
          <div className="unlock__content">
            <SectionHeader title={title} subtitle={description} className="unlock__header" align="left" />
            <Button type="primary" size="normal" className="unlock__button" href={buttonHref}>
              {button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 