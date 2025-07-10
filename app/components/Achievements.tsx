import achievementsData from "../../data/achievements.json";

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
    <section className={`achievements__sec sec ${className}`}>
      <div className="sec__container">
        <div className="achievements">
          <div className="achievements__content">
            <h2 className="headline-2 sec__title achievements__title">
              {title}
            </h2>
            <p className="body-2-regular achievements__description">
              {description}
            </p>
          </div>
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
              {stats.slice(2, 4).map((stat, idx) => (
                <div className="achievements__stat" key={idx + 2}>
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
