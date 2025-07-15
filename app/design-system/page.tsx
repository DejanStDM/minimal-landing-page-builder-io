import React from "react";
import { Button, ArrowRightIcon } from "../components/Button";

const pages = [
  { name: "Guide", path: "/design-system/guide" },
  { name: "Colors", path: "/design-system/colors" },
  { name: "Typography", path: "/design-system/typography" },
  { name: "Buttons", path: "/design-system/buttons" },
  { name: "Tabs", path: "/design-system/tabs" },
  { name: "Effects", path: "/design-system/effects" },
  { name: "Icons", path: "/design-system/icons" },
];

export default function DesignSistemHome() {
  return (
    <div
      style={{
        padding: "60px",
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          className="headline-2"
          style={{ color: "var(--Neutral-Black)", marginBottom: "16px" }}
        >
          Design System
        </h1>
        <p className="body-1-regular">
          Welcome to the design system. Explore the following sections:
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        {pages.map((page) => (
          <div
            key={page.name}
            style={{
              padding: "24px",
              border: "1px solid var(--Neutral-Grey_Blue)",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h3 className="headline-4" style={{ marginBottom: "12px" }}>
              {page.name}
            </h3>
            <p
              className="body-3-regular"
              style={{ marginBottom: "20px", color: "var(--Neutral-Grey)" }}
            >
              {page.name === "Guide" && "Design principles and guidelines"}
              {page.name === "Colors" && "Color palette and usage"}
              {page.name === "Typography" && "Text styles and hierarchy"}
              {page.name === "Buttons" && "Interactive button components"}
              {page.name === "Tabs" && "Tab navigation components"}
              {page.name === "Effects" && "Visual effects and animations"}
              {page.name === "Icons" && "Icon library and usage"}
            </p>
            <Button
              type="secondary"
              size="medium"
              href={page.path}
              iconRight={<ArrowRightIcon />}
            >
              View {page.name}
            </Button>
          </div>
        ))}
      </div>

      {/* Quick Demo Section */}
      <div
        style={{
          marginTop: "80px",
          padding: "32px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h3 className="headline-4" style={{ marginBottom: "16px" }}>
          Quick Demo
        </h3>
        <p
          className="body-2-regular"
          style={{ marginBottom: "24px", color: "var(--Neutral-Grey)" }}
        >
          Try out some components from our design system
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button type="primary">Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button type="tertiary">Tertiary Button</Button>
          <Button type="primary" size="small">
            Small Button
          </Button>
        </div>
      </div>
    </div>
  );
}
