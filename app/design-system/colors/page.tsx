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
    <div className="colors-page">
      <h1 className="headline-2 colors-title">Colors</h1>

      {/* Neutral Colors */}
      <ColorSection title="Neutral">
        <ColorSwatch
          color="var(--Neutral-Black)"
          name="Black"
          hexCode="#263238"
        />
        <ColorSwatch
          color="var(--Neutral-D_Grey)"
          name="D_Grey"
          hexCode="#4D4D4D"
        />
        <ColorSwatch
          color="var(--Neutral-Grey)"
          name="Grey"
          hexCode="#717171"
        />
        <ColorSwatch
          color="var(--Neutral-L_Grey)"
          name="L_Grey"
          hexCode="#89939E"
        />
        <ColorSwatch
          color="var(--Neutral-Grey_Blue)"
          name="Grey-blue"
          hexCode="#ABBED1"
        />
        <ColorSwatch
          color="var(--Neutral-Silver)"
          name="Silver"
          hexCode="#F5F7FA"
        />
        <ColorSwatch
          color="var(--Neutral-White)"
          name="White"
          hexCode="#FFFFFF"
          className="white-swatch"
        />
      </ColorSection>

      {/* Primary, Secondary, Info Colors */}
      <ColorSection title="Brand Colors">
        <div className="brand-color-group">
          <div className="brand-color-label">Primary</div>
          <ColorSwatch
            color="var(--Brand-Primary)"
            name="Primary"
            hexCode="#4CAF4F"
          />
        </div>
        <div className="brand-color-group">
          <div className="brand-color-label">Secondary</div>
          <ColorSwatch
            color="var(--Brand-Secondary)"
            name="Secondary"
            hexCode="#263238"
          />
        </div>
        <div className="brand-color-group">
          <div className="brand-color-label">Info</div>
          <ColorSwatch
            color="var(--Brand-Info)"
            name="Info"
            hexCode="#2194F3"
          />
        </div>
      </ColorSection>

      {/* Color Shades */}
      <ColorSection title="Color Shade">
        <ColorSwatch color="var(--Shade-S1)" name="Shade 1" hexCode="#43A046" />
        <ColorSwatch color="var(--Shade-S2)" name="Shade 2" hexCode="#388E3B" />
        <ColorSwatch color="var(--Shade-S3)" name="Shade 3" hexCode="#237D31" />
        <ColorSwatch color="var(--Shade-S4)" name="Shade 4" hexCode="#1B5E1F" />
        <ColorSwatch color="var(--Shade-S5)" name="Shade 5" hexCode="#103E13" />
      </ColorSection>

      {/* Color Tints */}
      <ColorSection title="Color Tint">
        <ColorSwatch color="var(--Tint-T1)" name="Tint 1" hexCode="#66BB69" />
        <ColorSwatch color="var(--Tint-T2)" name="Tint 2" hexCode="#81C784" />
        <ColorSwatch color="var(--Tint-T3)" name="Tint 3" hexCode="#A5D6A7" />
        <ColorSwatch color="var(--Tint-T4)" name="Tint 4" hexCode="#C8E6C9" />
        <ColorSwatch color="var(--Tint-T5)" name="Tint 5" hexCode="#E8F5E9" />
      </ColorSection>

      {/* Action Colors */}
      <ColorSection title="Action" className="last-section">
        <ColorSwatch
          color="var(--Action-Warning)"
          name="Warning"
          hexCode="#FBC02D"
        />
        <ColorSwatch
          color="var(--Action-Error)"
          name="Error"
          hexCode="#E53835"
        />
        <ColorSwatch
          color="var(--Action-Success)"
          name="Success"
          hexCode="#2E7D31"
        />
      </ColorSection>
    </div>
  );
}
