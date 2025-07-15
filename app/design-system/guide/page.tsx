import { LayoutGuide } from "../../components/SpacingGuide";

export default function GuidePage() {
  return (
    <div className="design-system-page">
      <div className="design-system-container">
        {/* Page Header */}
        <header className="design-system-header">
          <h1 className="design-system-title">Layout Guide</h1>
          <p className="design-system-description">
            Visual guidelines for spacing, margins, and layout structure used throughout the design system. Use these standards for consistent, responsive layouts.
          </p>
        </header>

        {/* Container & Spacing Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Container & Spacing</h2>
          <p className="design-system-section-description">
            Standard container margins (144px) and gutter spacing (24px) for consistent layout structure.
          </p>
          <div className="design-system-section-example">
            <LayoutGuide />
          </div>
          <div className="design-system-section-specs">
            <h3>Specifications</h3>
            <ul>
              <li><strong>Container Margin:</strong> 144px on desktop</li>
              <li><strong>Gutter Spacing:</strong> 24px between content sections</li>
              <li><strong>Maximum Width:</strong> 1440px for large screens</li>
              <li><strong>Responsive:</strong> Adjusts proportionally on smaller screens</li>
            </ul>
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Usage Guidelines</h2>
          <div className="design-system-guidelines">
            <div className="design-system-guidelines-item">
              <h3>When to Use</h3>
              <ul>
                <li>For all page and component layouts</li>
                <li>To ensure consistent spacing and alignment</li>
                <li>For responsive design across breakpoints</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Accessibility Features</h3>
              <ul>
                <li>Consistent spacing improves readability and focus</li>
                <li>Responsive margins help maintain usability on all devices</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Props / Classes</h3>
              <div className="design-system-props">
                <div className="prop-item">
                  <code>LayoutGuide</code>
                  <span>Visualizes container and spacing rules</span>
                </div>
                <div className="prop-item">
                  <code>design-system-section</code>
                  <span>Section wrapper for layout guide</span>
                </div>
              </div>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Code Example</h3>
              <pre className="design-system-code">
{`import { LayoutGuide } from "../../components/SpacingGuide";

<LayoutGuide />
`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
