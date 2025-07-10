import React from "react";
import unlockData from "../../data/unlock.json";

export function Unlock({ className = "" }: { className?: string }) {
  const { title, description, button, image } = unlockData as {
    title: string;
    description: string;
    button: string;
    image: string;
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
          <button className="unlock__button">{button}</button>
        </div>
        </div>
      </div>
    </section>
  );
} 