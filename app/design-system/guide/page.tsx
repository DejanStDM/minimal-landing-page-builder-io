import { LayoutGuide } from "../../components/SpacingGuide";

export default function GuidePage() {
  return (
    <div className="design-system-page">
      <div className="design-system-page__header">
        <h1 className="design-system-page__title">Layout Guide</h1>
        <p className="design-system-page__description">
          Visual guidelines for spacing, margins, and layout structure used
          throughout the design system.
        </p>
      </div>

      <section className="design-system-section">
        <h2 className="design-system-section__title">Container & Spacing</h2>
        <p className="design-system-section__description">
          Standard container margins (144px) and gutter spacing (24px) for
          consistent layout structure.
        </p>

        <div className="design-system-section__example">
          <LayoutGuide />
        </div>

        <div className="design-system-section__specs">
          <h3>Specifications</h3>
          <ul>
            <li>
              <strong>Container Margin:</strong> 144px on desktop
            </li>
            <li>
              <strong>Gutter Spacing:</strong> 24px between content sections
            </li>
            <li>
              <strong>Maximum Width:</strong> 1440px for large screens
            </li>
            <li>
              <strong>Responsive:</strong> Adjusts proportionally on smaller
              screens
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
