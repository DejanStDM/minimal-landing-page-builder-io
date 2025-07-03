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
    <h2 className="section-header" style={{ marginBottom: "40px" }}>
      {title}
    </h2>
    <div className="color-grid">{children}</div>
    <hr className="section-divider" />
  </div>
);

export default function ColorsPage() {
  return (
    <div className="colors-page">
      <h1
        className="headline-2"
        style={{ textAlign: "center", marginBottom: "120px" }}
      >
        Colors
      </h1>

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

      <style jsx>{`
        .colors-page {
          padding: 60px;
          max-width: 1440px;
          margin: 0 auto;
          background-color: #fff;
        }

        .color-section {
          margin-bottom: 100px;
        }

        .last-section {
          margin-bottom: 0;
        }

        .color-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 32px;
          max-width: 1320px;
        }

        .brand-color-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .brand-color-label {
          font-family: "Inter", sans-serif;
          font-size: 28px;
          font-weight: 600;
          line-height: 36px;
          letter-spacing: 0.1px;
          color: var(--Primary-M_Blue);
          text-align: center;
        }

        .color-swatch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          min-width: 88px;
        }

        .color-preview {
          width: 88px;
          height: 88px;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .white-swatch .color-preview {
          border: 1px solid #abbed1;
        }

        .color-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 88px;
        }

        .color-name {
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.1px;
          color: var(--Neutral-L_Grey);
        }

        .color-hex {
          font-family: "Inter", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.1px;
          color: var(--Neutral-L_Grey);
        }

        .section-divider {
          border: none;
          border-top: 1px solid var(--Neutral-Grey-blue);
          margin: 60px 0 0 0;
          width: 100%;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .colors-page {
            padding: 40px;
          }

          .color-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 24px;
          }

          .color-preview {
            width: 80px;
            height: 80px;
          }

          .color-info {
            width: 80px;
          }

          .color-swatch {
            min-width: 80px;
          }
        }

        @media (max-width: 768px) {
          .colors-page {
            padding: 24px;
          }

          .color-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 20px;
          }

          .color-preview {
            width: 72px;
            height: 72px;
          }

          .color-info {
            width: 72px;
          }

          .color-swatch {
            min-width: 72px;
          }

          .brand-color-label {
            font-size: 24px;
            line-height: 32px;
          }

          .color-name,
          .color-hex {
            font-size: 14px;
            line-height: 20px;
          }
        }

        @media (max-width: 480px) {
          .colors-page {
            padding: 16px;
          }

          .color-grid {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 16px;
          }

          .color-preview {
            width: 64px;
            height: 64px;
          }

          .color-info {
            width: 64px;
          }

          .color-swatch {
            min-width: 64px;
          }

          .brand-color-label {
            font-size: 20px;
            line-height: 28px;
          }

          .color-name,
          .color-hex {
            font-size: 12px;
            line-height: 16px;
          }

          .section-header {
            font-size: 24px;
            line-height: 32px;
          }
        }
      `}</style>
    </div>
  );
}
