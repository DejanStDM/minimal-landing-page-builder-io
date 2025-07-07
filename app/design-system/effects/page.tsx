import React from "react";

interface ShadowCardProps {
  shadowClass: string;
  description: string;
}

const ShadowCard: React.FC<ShadowCardProps> = ({
  shadowClass,
  description,
}) => (
  <div className="shadow-card">
    <div className={`shadow-preview ${shadowClass}`} />
    <div className="shadow-description">{description}</div>
  </div>
);

interface EffectSectionProps {
  title: string;
  children: React.ReactNode;
}

const EffectSection: React.FC<EffectSectionProps> = ({ title, children }) => (
  <div className="effect-section">
    <h2 className="effect-section-title">{title}</h2>
    <div className="effects-grid">{children}</div>
  </div>
);

export default function EffectsPage() {
  return (
    <div className="effects-page">
      <h1 className="effects-title">Effects</h1>

      <EffectSection title="Shadows">
        <ShadowCard shadowClass="shadow-sm" description="2px, #ABBED1 (60%)" />
        <ShadowCard shadowClass="shadow-md" description="4px, #ABBED1 (40%)" />
        <ShadowCard shadowClass="shadow-lg" description="6px, #ABBED1 (30%)" />
        <ShadowCard shadowClass="shadow-xl" description="8px, #ABBED1 (40%)" />
        <ShadowCard
          shadowClass="shadow-2xl"
          description="16px, #ABBED1 (30%)"
        />
      </EffectSection>
    </div>
  );
}
