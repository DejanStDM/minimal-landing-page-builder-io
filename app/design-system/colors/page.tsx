import React from "react";

interface ColorSwatchProps {
  color: string;
  name: string;
  hexCode: string;
  className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  name,
  hexCode,
  className = "",
}) => (
  <div className={`color-swatch ${className}`}>
    <div className="color-preview" style={{ backgroundColor: color }} />
    <div className="color-info">
      <span className="color-name">{name}</span>
      <span className="color-hex">{hexCode}</span>
    </div>
  </div>
);

interface ColorSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ColorSection: React.FC<ColorSectionProps> = ({
  title,
  children,
  className = "",
}) => (
  <div className={`color-section ${className}`}>
    <h2 className="section-header">{title}</h2>
    <div className="color-grid">{children}</div>
    <hr className="section-divider" />
  </div>
);

export default function ColorsPage() {
  return (
    <div className="design-system-page">
      <div className="design-system-container">
        {/* Page Header */}
        <header className="design-system-header">
          <h1 className="design-system-title">Colors</h1>
          <p className="design-system-description">
            The color palette for the design system, including brand, neutral, shade, tint, and action colors. Use these variables for consistent theming and accessibility.
          </p>
        </header>

        {/* Neutral Colors Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Neutral Colors</h2>
          <p className="design-system-section-description">
            Core background, text, and border colors for layouts and components.
          </p>
          <div className="color-grid">
            <ColorSwatch color="var(--Neutral-Black)" name="Black" hexCode="#263238" />
            <ColorSwatch color="var(--Neutral-D_Grey)" name="D_Grey" hexCode="#4D4D4D" />
            <ColorSwatch color="var(--Neutral-Grey)" name="Grey" hexCode="#717171" />
            <ColorSwatch color="var(--Neutral-L_Grey)" name="L_Grey" hexCode="#89939E" />
            <ColorSwatch color="var(--Neutral-Grey_Blue)" name="Grey-blue" hexCode="#ABBED1" />
            <ColorSwatch color="var(--Neutral-Silver)" name="Silver" hexCode="#F5F7FA" />
            <ColorSwatch color="var(--Neutral-White)" name="White" hexCode="#FFFFFF" className="white-swatch" />
          </div>
        </section>

        {/* Brand Colors Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Brand Colors</h2>
          <p className="design-system-section-description">
            Primary, secondary, and info colors for branding and highlights.
          </p>
          <div className="color-grid">
            <ColorSwatch color="var(--Brand-Primary)" name="Primary" hexCode="#4CAF4F" />
            <ColorSwatch color="var(--Brand-Secondary)" name="Secondary" hexCode="#263238" />
            <ColorSwatch color="var(--Brand-Info)" name="Info" hexCode="#2194F3" />
          </div>
        </section>

        {/* Color Shades Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Color Shades</h2>
          <p className="design-system-section-description">
            Darker variations of the primary color for depth and emphasis.
          </p>
          <div className="color-grid">
            <ColorSwatch color="var(--Shade-S1)" name="Shade 1" hexCode="#43A046" />
            <ColorSwatch color="var(--Shade-S2)" name="Shade 2" hexCode="#388E3B" />
            <ColorSwatch color="var(--Shade-S3)" name="Shade 3" hexCode="#237D31" />
            <ColorSwatch color="var(--Shade-S4)" name="Shade 4" hexCode="#1B5E1F" />
            <ColorSwatch color="var(--Shade-S5)" name="Shade 5" hexCode="#103E13" />
          </div>
        </section>

        {/* Color Tints Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Color Tints</h2>
          <p className="design-system-section-description">
            Lighter variations of the primary color for backgrounds and subtle highlights.
          </p>
          <div className="color-grid">
            <ColorSwatch color="var(--Tint-T1)" name="Tint 1" hexCode="#66BB69" />
            <ColorSwatch color="var(--Tint-T2)" name="Tint 2" hexCode="#81C784" />
            <ColorSwatch color="var(--Tint-T3)" name="Tint 3" hexCode="#A5D6A7" />
            <ColorSwatch color="var(--Tint-T4)" name="Tint 4" hexCode="#C8E6C9" />
            <ColorSwatch color="var(--Tint-T5)" name="Tint 5" hexCode="#E8F5E9" />
          </div>
        </section>

        {/* Action Colors Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Action Colors</h2>
          <p className="design-system-section-description">
            Colors for warnings, errors, and success states.
          </p>
          <div className="color-grid">
            <ColorSwatch color="var(--Action-Warning)" name="Warning" hexCode="#FBC02D" />
            <ColorSwatch color="var(--Action-Error)" name="Error" hexCode="#E53835" />
            <ColorSwatch color="var(--Action-Success)" name="Success" hexCode="#2E7D31" />
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Usage Guidelines</h2>
          <div className="design-system-guidelines">
            <div className="design-system-guidelines-item">
              <h3>When to Use</h3>
              <ul>
                <li>To ensure brand consistency across the UI</li>
                <li>For accessible contrast and readability</li>
                <li>To communicate status (success, error, warning)</li>
                <li>For backgrounds, text, borders, and highlights</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Accessibility Features</h3>
              <ul>
                <li>Semantic color usage for status and feedback</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Props</h3>
              <div className="design-system-props">
                <div className="prop-item">
                  <code>color: string</code>
                  <span>CSS color value or variable</span>
                </div>
                <div className="prop-item">
                  <code>name: string</code>
                  <span>Color name label</span>
                </div>
                <div className="prop-item">
                  <code>hexCode: string</code>
                  <span>Hex code for reference</span>
                </div>
                <div className="prop-item">
                  <code>className?: string</code>
                  <span>Custom CSS classes</span>
                </div>
              </div>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Code Example</h3>
              <pre className="design-system-code">
{`import { ColorSwatch } from "./components/ColorSwatch";

<ColorSwatch color="var(--Brand-Primary)" name="Primary" hexCode="#4CAF4F" />
`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
