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
    <div className="design-system-page">
      <div className="design-system-container">
        {/* Page Header */}
        <header className="design-system-header">
          <h1 className="design-system-title">Effects</h1>
          <p className="design-system-description">
            Visual effects such as shadows help create depth, focus, and separation between UI elements. Use these classes for consistent elevation and emphasis.
          </p>
        </header>

        {/* Shadows Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Shadows</h2>
          <p className="design-system-section-description">
            Use shadow classes to add elevation and visual hierarchy to cards, modals, and overlays.
          </p>
          <div className="effects-grid">
            <ShadowCard shadowClass="shadow-sm" description="2px, #ABBED1 (60%)" />
            <ShadowCard shadowClass="shadow-md" description="4px, #ABBED1 (40%)" />
            <ShadowCard shadowClass="shadow-lg" description="6px, #ABBED1 (30%)" />
            <ShadowCard shadowClass="shadow-xl" description="8px, #ABBED1 (40%)" />
            <ShadowCard shadowClass="shadow-2xl" description="16px, #ABBED1 (30%)" />
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Usage Guidelines</h2>
          <div className="design-system-guidelines">
            <div className="design-system-guidelines-item">
              <h3>When to Use</h3>
              <ul>
                <li>To create depth and separation between UI layers</li>
                <li>For cards, modals, dropdowns, and overlays</li>
                <li>To highlight important or interactive elements</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Accessibility Features</h3>
              <ul>
                <li>Shadows are visual only; do not rely on them for critical information</li>
                <li>Always pair with other cues (color, border, focus) for accessibility</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Props / Classes</h3>
              <div className="design-system-props">
                <div className="prop-item">
                  <code>shadow-sm</code>
                  <span>Small shadow (2px)</span>
                </div>
                <div className="prop-item">
                  <code>shadow-md</code>
                  <span>Medium shadow (4px)</span>
                </div>
                <div className="prop-item">
                  <code>shadow-lg</code>
                  <span>Large shadow (6px)</span>
                </div>
                <div className="prop-item">
                  <code>shadow-xl</code>
                  <span>Extra large shadow (8px)</span>
                </div>
                <div className="prop-item">
                  <code>shadow-2xl</code>
                  <span>Double extra large shadow (16px)</span>
                </div>
              </div>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Code Example</h3>
              <pre className="design-system-code">
{`<div className="shadow-card shadow-lg">Content</div>`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
