export default function Typography() {
  return (
    <div
      style={{
        padding: "60px",
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundColor: "#fff",
      }}
    >
      <h1
        className="headline-2"
        style={{ textAlign: "center", marginBottom: "120px" }}
      >
        Typography
      </h1>

      {/* Headlines Section */}
      <div style={{ marginBottom: "100px" }}>
        <h2 className="section-header" style={{ marginBottom: "40px" }}>
          Headlines
        </h2>

        <div style={{ marginLeft: "448px" }}>
          <div className="category-header" style={{ marginBottom: "40px" }}>
            Header
          </div>

          {/* Headline 1 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "40px",
            }}
          >
            <h1 className="headline-1">Headline 1</h1>
            <span className="typography-descriptor">Semi Bold, 64/76</span>
          </div>

          {/* Headline 2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "40px",
            }}
          >
            <h2 className="headline-2">Headline 2</h2>
            <span className="typography-descriptor">Semi Bold, 36/44</span>
          </div>

          {/* Headline 3 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "40px",
            }}
          >
            <h3 className="headline-3">Headline 3</h3>
            <span className="typography-descriptor">Semi Bold, 28/36</span>
          </div>

          {/* Headline 4 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "40px",
            }}
          >
            <h4 className="headline-4">Headline 4</h4>
            <span className="typography-descriptor">Semi Bold, 20/28</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--Neutral-Grey-blue)",
          margin: "60px 0",
          width: "100%",
        }}
      />

      {/* Body Text Section */}
      <div>
        <h2 className="section-header" style={{ marginBottom: "40px" }}>
          Body
        </h2>

        <div style={{ display: "flex", gap: "341px", marginLeft: "448px" }}>
          {/* Regular Column */}
          <div>
            <div className="category-header" style={{ marginBottom: "40px" }}>
              Regular
            </div>

            {/* Body 1 Regular */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-1-regular">Body 1</p>
              <span className="typography-descriptor">Regular, 18/28</span>
            </div>

            {/* Body 2 Regular */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-2-regular">Body 2</p>
              <span className="typography-descriptor">Regular, 16/24</span>
            </div>

            {/* Body 3 Regular */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-3-regular">Body 3</p>
              <span className="typography-descriptor">Regular, 14/20</span>
            </div>

            {/* Body 4 Regular */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-4-regular">Body 4</p>
              <span className="typography-descriptor">Regular, 12/16</span>
            </div>
          </div>

          {/* Medium Column */}
          <div>
            <div className="category-header" style={{ marginBottom: "40px" }}>
              Medium
            </div>

            {/* Body 1 Medium */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-1-medium">Body 1</p>
              <span className="typography-descriptor">Regular, 18/28</span>
            </div>

            {/* Body 2 Medium */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-2-medium">Body 2</p>
              <span className="typography-descriptor">Regular, 16/24</span>
            </div>

            {/* Body 3 Medium */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-3-medium">Body 3</p>
              <span className="typography-descriptor">Regular, 14/20</span>
            </div>

            {/* Body 4 Medium */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginBottom: "40px",
              }}
            >
              <p className="body-4-medium">Body 4</p>
              <span className="typography-descriptor">Regular, 12/16</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
