export default function Home() {
  return (
    <main>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1 className="headline-1">Welcome to Your Minimal Landing Page</h1>
        <p className="body-1-regular" style={{ marginTop: "1rem" }}>
          This page is ready for Builder.io integration!
        </p>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/typography"
            className="button button--primary button--normal"
            style={{ textDecoration: "none" }}
          >
            <span>View Typography System</span>
          </a>
          <a
            href="/design-system"
            className="button button--secondary button--normal"
            style={{ textDecoration: "none" }}
          >
            <span>View Design System</span>
          </a>
          <a
            href="/design-system/buttons"
            className="button button--tertiary button--normal"
            style={{ textDecoration: "none" }}
          >
            <span>View Buttons</span>
          </a>
        </div>
      </div>
    </main>
  );
}
