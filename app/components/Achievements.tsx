import React from "react";
import achievementsData from "../../data/achievements.json";
import { SectionHeader } from "./SectionHeader";

export interface AchievementStat {
  icon: string;
  number: string;
  label: string;
}

export function Achievements({ className = "" }: { className?: string }) {
  const { title, description, stats } = achievementsData as {
    title: string;
    description: string;
    stats: AchievementStat[];
  };

  return (
    <section className={`achievements__sec sec section__spacing-top section__spacing-bottom ${className}`}>
      <div className="sec__container">
        <div className="achievements">
          <SectionHeader title={title} subtitle={description} className="achievements__header" />
          <div className="achievements__stats">
            <div className="achievements__stats-row">
              {stats.slice(0, 2).map((stat, idx) => (
                <div className="achievements__stat" key={idx}>
                  <div className="achievements__stat-icon">
                    <img src={stat.icon} alt={`${stat.label} icon`} />
                  </div>
                  <div className="achievements__stat-details">
                    <div className="achievements__stat-number">
                      {stat.number}
                    </div>
                    <div className="achievements__stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="achievements__stats-row">
              {stats.slice(2).map((stat, idx) => (
                <div className="achievements__stat" key={idx}>
                  <div className="achievements__stat-icon">
                    <img src={stat.icon} alt={`${stat.label} icon`} />
                  </div>
                  <div className="achievements__stat-details">
                    <div className="achievements__stat-number">
                      {stat.number}
                    </div>
                    <div className="achievements__stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
