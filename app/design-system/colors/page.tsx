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
        <ColorSwatch color="#263238" name="Black" hexCode="#263238" />
        <ColorSwatch color="#4D4D4D" name="D_Grey" hexCode="#4D4D4D" />
        <ColorSwatch color="#717171" name="Grey" hexCode="#717171" />
        <ColorSwatch color="#89939E" name="L_Grey" hexCode="#89939E" />
        <ColorSwatch color="#ABBED1" name="Grey-blue" hexCode="#ABBED1" />
        <ColorSwatch color="#F5F7FA" name="Silver" hexCode="#F5F7FA" />
        <ColorSwatch
          color="#FFFFFF"
          name="White"
          hexCode="#FFFFFF"
          className="white-swatch"
        />
      </ColorSection>

      {/* Primary, Secondary, Info Colors */}
      <ColorSection title="Brand Colors">
        <div className="brand-color-group">
          <div className="brand-color-label">Primary</div>
          <ColorSwatch color="#4CAF4F" name="Primary" hexCode="#4CAF4F" />
        </div>
        <div className="brand-color-group">
          <div className="brand-color-label">Secondary</div>
          <ColorSwatch color="#263238" name="Secondary" hexCode="#263238" />
        </div>
        <div className="brand-color-group">
          <div className="brand-color-label">Info</div>
          <ColorSwatch color="#2194F3" name="Info" hexCode="#2194F3" />
        </div>
      </ColorSection>

      {/* Color Shades */}
      <ColorSection title="Color Shade">
        <ColorSwatch color="#43A046" name="Shade 1" hexCode="#43A046" />
        <ColorSwatch color="#388E3B" name="Shade 2" hexCode="#388E3B" />
        <ColorSwatch color="#237D31" name="Shade 3" hexCode="#237D31" />
        <ColorSwatch color="#1B5E1F" name="Shade 4" hexCode="#1B5E1F" />
        <ColorSwatch color="#103E13" name="Shade 5" hexCode="#103E13" />
      </ColorSection>

      {/* Color Tints */}
      <ColorSection title="Color Tint">
        <ColorSwatch color="#66BB69" name="Tint 1" hexCode="#66BB69" />
        <ColorSwatch color="#81C784" name="Tint 2" hexCode="#81C784" />
        <ColorSwatch color="#A5D6A7" name="Tint 3" hexCode="#A5D6A7" />
        <ColorSwatch color="#C8E6C9" name="Tint 4" hexCode="#C8E6C9" />
        <ColorSwatch color="#E8F5E9" name="Tint 5" hexCode="#E8F5E9" />
      </ColorSection>

      {/* Action Colors */}
      <ColorSection title="Action" className="last-section">
        <ColorSwatch color="#FBC02D" name="Warning" hexCode="#FBC02D" />
        <ColorSwatch color="#E53835" name="Error" hexCode="#E53835" />
        <ColorSwatch color="#2E7D31" name="Success" hexCode="#2E7D31" />
      </ColorSection>
    </div>
  );
}
