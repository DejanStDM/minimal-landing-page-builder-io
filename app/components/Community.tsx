import React from "react";
import communityData from "../../data/community.json";

export interface CommunityCard {
  icon: string;
  title: string;
  description: string;
}

export function Community({ className = "" }: { className?: string }) {
  const { title, subtitle, cards } = communityData as {
    title: string;
    subtitle: string;
    cards: CommunityCard[];
  };
  return (
    <section className={`community ${className}`}>
      <div className="sec__container">
      <div className="community__header">
        <h2 className="headline-2 sec__title">{title}</h2>
        <p className="body-1-regular community__subtitle">{subtitle}</p>
      </div>
      <div className="community__cards">
        {cards.map((card) => (
          <div className="community__card" key={card.title}>
            <div className="community__icon-wrap">
              <img src={card.icon} alt="" className="community__icon" />
            </div>
            <h3 className="headline-3 sec__sub-title">{card.title}</h3>
            <p className="body-2-regular community__card-desc">{card.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
} 