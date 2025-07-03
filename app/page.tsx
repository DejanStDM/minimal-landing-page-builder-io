export default function Home() {
  return (
    <main>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1 className="headline-1">Welcome to Your Minimal Landing Page 11</h1>
        <p className="body-1-regular" style={{ marginTop: "1rem" }}>
          This page is ready for Builder.io integration!
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a
            href="/typography"
            className="body-2-medium"
            style={{
              color: "var(--Primary-M_Blue)",
              textDecoration: "none",
              padding: "12px 24px",
              border: "1px solid var(--Primary-M_Blue)",
              borderRadius: "4px",
              display: "inline-block",
              transition: "all 0.2s ease",
            }}
          >
            View Typography System
          </a>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <a
            href="/design-system"
            className="body-2-medium"
            style={{
              color: "var(--Primary-M_Blue)",
              textDecoration: "none",
              padding: "12px 24px",
              border: "1px solid var(--Primary-M_Blue)",
              borderRadius: "4px",
              display: "inline-block",
              transition: "all 0.2s ease",
            }}
          >
            View Design System
          </a>
        </div>
      </div>
    </main>
  );
}
