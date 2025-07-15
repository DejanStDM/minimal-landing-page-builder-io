export default function Typography() {
  return (
    <div className="design-system-page">
      <div className="design-system-container">
        {/* Page Header */}
        <header className="design-system-header">
          <h1 className="design-system-title">Typography</h1>
          <p className="design-system-description">
            The typography system defines the font styles, weights, and hierarchy for all UI elements. Use these classes for consistent, accessible text across the product.
          </p>
        </header>

        {/* Headlines Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Headlines</h2>
          <p className="design-system-section-description">
            Use headline classes for page titles, section headers, and important UI elements.
          </p>
          <div style={{ marginLeft: "448px" }}>
            <div className="category-header" style={{ marginBottom: "40px" }}>
              Header
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
              <h1 className="headline-1">Headline 1</h1>
              <span className="typography-descriptor">Semi Bold, 64/76</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
              <h2 className="headline-2">Headline 2</h2>
              <span className="typography-descriptor">Semi Bold, 36/44</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
              <h3 className="headline-3">Headline 3</h3>
              <span className="typography-descriptor">Semi Bold, 28/36</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
              <h4 className="headline-4">Headline 4</h4>
              <span className="typography-descriptor">Semi Bold, 20/28</span>
            </div>
          </div>
        </section>

        {/* Body Text Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Body</h2>
          <p className="design-system-section-description">
            Use body classes for paragraphs, descriptions, and general content.
          </p>
          <div style={{ display: "flex", gap: "341px", marginLeft: "448px" }}>
            <div>
              <div className="category-header" style={{ marginBottom: "40px" }}>
                Regular
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-1-regular">Body 1</p>
                <span className="typography-descriptor">Regular, 18/28</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-2-regular">Body 2</p>
                <span className="typography-descriptor">Regular, 16/24</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-3-regular">Body 3</p>
                <span className="typography-descriptor">Regular, 14/20</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-4-regular">Body 4</p>
                <span className="typography-descriptor">Regular, 12/16</span>
              </div>
            </div>
            <div>
              <div className="category-header" style={{ marginBottom: "40px" }}>
                Medium
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-1-medium">Body 1</p>
                <span className="typography-descriptor">Regular, 18/28</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-2-medium">Body 2</p>
                <span className="typography-descriptor">Regular, 16/24</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-3-medium">Body 3</p>
                <span className="typography-descriptor">Regular, 14/20</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
                <p className="body-4-medium">Body 4</p>
                <span className="typography-descriptor">Regular, 12/16</span>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Usage Guidelines</h2>
          <div className="design-system-guidelines">
            <div className="design-system-guidelines-item">
              <h3>When to Use</h3>
              <ul>
                <li>For all text content in the UI</li>
                <li>To establish clear hierarchy and readability</li>
                <li>For headings, body text, and supporting labels</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Accessibility Features</h3>
              <ul>
                <li>Consistent font sizes and weights for readability</li>
                <li>Semantic HTML tags for headings and paragraphs</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Props / Classes</h3>
              <div className="design-system-props">
                <div className="prop-item">
                  <code>headline-1 ... headline-4</code>
                  <span>Headline classes for h1-h4</span>
                </div>
                <div className="prop-item">
                  <code>body-1-regular ... body-4-regular</code>
                  <span>Body text classes (regular weight)</span>
                </div>
                <div className="prop-item">
                  <code>body-1-medium ... body-4-medium</code>
                  <span>Body text classes (medium weight)</span>
                </div>
              </div>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Code Example</h3>
              <pre className="design-system-code">
{`<h1 className="headline-1">Headline 1</h1>
<p className="body-1-regular">Body 1</p>
<p className="body-2-medium">Body 2</p>
`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
