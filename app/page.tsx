import { Button, ArrowRightIcon } from "./components/Button";

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
          <Button
            type="primary"
            href="/typography"
            iconRight={<ArrowRightIcon />}
          >
            View Typography System
          </Button>
          <Button
            type="secondary"
            href="/design-system"
            iconRight={<ArrowRightIcon />}
          >
            View Design System
          </Button>
          <Button type="tertiary" href="/design-system/buttons">
            View Buttons
          </Button>
        </div>
      </div>
    </main>
  );
}
