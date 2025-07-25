import React from "react";
import communityUpdatesData from "../../data/communityUpdates.json";
import { Link } from "./Button";
import { SectionHeader } from "./SectionHeader";

export function CommunityUpdates({ className = "" }: { className?: string }) {
  const { sectionTitle, description, articles } = communityUpdatesData as {
    sectionTitle: string;
    description: string;
    articles: Array<{
      id: number;
      image: string;
      title: string;
      readMoreText: string;
      url: string;
    }>;
  };

  return (
    <section className={`community-updates section__spacing-top section__spacing-bottom ${className}`}>
      <div className="sec__container">
        <SectionHeader title={sectionTitle} subtitle={description} className="community-updates__header" />
        <div className="community-updates__grid">
          {articles.map((article) => (
            <div key={article.id} className="community-updates__card">
              <div className="community-updates__image-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="community-updates__image"
                />
              </div>
              <div className="community-updates__content">
                <h3 className="headline-5 community-updates__card-title">
                  {article.title}
                </h3>
                <Link href={article.url} className="community-updates__link">
                  <span className="community-updates__link-text">
                    {article.readMoreText}
                  </span>
                  <span className="link__icon"> 

                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 16.3989L19.7929 13.106C20.1834 12.7155 20.1834 12.0823 19.7929 11.6918L16.5 8.39893M19.5 12.3989L5.5 12.3989"
                      stroke="#4CAF4F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
