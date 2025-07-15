import React from "react";
import unlockData from "../../data/unlock.json";
import { Button } from "./Button";

export function Unlock({ className = "" }: { className?: string }) {
  const { title, description, button, image, buttonHref } = unlockData as {
    title: string;
    description: string;
    button: string;
    image: string;
    buttonHref: string;
  };
  return (
    <section className={`unlock ${className}`}>
      <div className="sec__container">
        <div className="unlock__wrapper">

        <div className="unlock__image-wrap">
          <img src={image} alt="Unlock illustration" className="unlock__image" />
        </div>
        <div className="unlock__content">
          <h2 className="headline-2 sec__title">{title}</h2>
          <p className="unlock__description">{description}</p>
          <Button type="primary" size="normal" className="unlock__button" href={buttonHref}>
            {button}
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
} 