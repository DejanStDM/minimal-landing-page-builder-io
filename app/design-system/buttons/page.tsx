"use client";

import React, { useState } from "react";
import {
  Button,
  IconButton,
  Link,
  ArrowRightIcon,
  PlusIcon,
  SearchIcon,
} from "../../components/Button";

export default function ButtonsPage() {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleLoading = (buttonId: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      [buttonId]: !prev[buttonId],
    }));
  };

  return (
    <div
      style={{
        padding: "60px",
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundColor: "#fff",
      }}
    >
      {/* Page Title */}
      <div style={{ textAlign: "center", marginBottom: "120px" }}>
        <h1 className="headline-2" style={{ color: "var(--Neutral-Black)" }}>
          Buttons
        </h1>
      </div>

      {/* Standard Buttons Section */}
      <section style={{ marginBottom: "100px" }}>
        <h2 className="section-header" style={{ marginBottom: "40px" }}>
          Standard buttons
        </h2>

        {/* Headers Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(6, 1fr)",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div></div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Primary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Secondary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Tertiary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Primary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Secondary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Tertiary
          </div>
        </div>

        {/* State Headers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(6, 1fr)",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div></div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Default
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Default
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Default
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            With Icons
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            With Icons
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            With Icons
          </div>
        </div>

        {/* Normal Size */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(6, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <div className="category-header">Normal</div>
          <Button type="primary" size="normal">
            Label
          </Button>
          <Button type="secondary" size="normal">
            Label
          </Button>
          <Button type="tertiary" size="normal">
            Label
          </Button>
          <Button
            type="primary"
            size="normal"
            iconLeft={<PlusIcon size={24} />}
          >
            Label
          </Button>
          <Button
            type="secondary"
            size="normal"
            iconRight={<ArrowRightIcon size={24} />}
          >
            Label
          </Button>
          <Button
            type="tertiary"
            size="normal"
            iconLeft={<PlusIcon size={24} />}
          >
            Label
          </Button>
        </div>

        {/* Medium Size */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(6, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <div className="category-header">Medium</div>
          <Button type="primary" size="medium">
            Label
          </Button>
          <Button type="secondary" size="medium">
            Label
          </Button>
          <Button type="tertiary" size="medium">
            Label
          </Button>
          <Button type="primary" size="medium" iconLeft={<PlusIcon />}>
            Label
          </Button>
          <Button type="secondary" size="medium" iconRight={<ArrowRightIcon />}>
            Label
          </Button>
          <Button type="tertiary" size="medium" iconLeft={<PlusIcon />}>
            Label
          </Button>
        </div>

        {/* Small Size */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(6, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div className="category-header">Small</div>
          <Button type="primary" size="small">
            Label
          </Button>
          <Button type="secondary" size="small">
            Label
          </Button>
          <Button type="tertiary" size="small">
            Label
          </Button>
          <Button type="primary" size="small" iconLeft={<PlusIcon />}>
            Label
          </Button>
          <Button type="secondary" size="small" iconRight={<ArrowRightIcon />}>
            Label
          </Button>
          <Button type="tertiary" size="small" iconLeft={<PlusIcon />}>
            Label
          </Button>
        </div>

        {/* Interactive States Demo */}
        <div
          style={{
            marginTop: "40px",
            padding: "24px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <h3 className="headline-4" style={{ marginBottom: "24px" }}>
            Interactive States
          </h3>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "16px",
            }}
          >
            <Button type="primary">Default</Button>
            <Button type="primary" disabled>
              Disabled
            </Button>
            <Button
              type="primary"
              loading={loadingStates.loading1}
              onClick={() => toggleLoading("loading1")}
            >
              {loadingStates.loading1 ? "Loading..." : "Click for Loading"}
            </Button>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button type="secondary">Hover me</Button>
            <Button type="tertiary">Focus me</Button>
            <Button type="primary" iconRight={<ArrowRightIcon />}>
              With Icon
            </Button>
          </div>
        </div>
      </section>

      {/* Icon Buttons Section */}
      <section style={{ marginBottom: "100px" }}>
        <h2 className="section-header" style={{ marginBottom: "40px" }}>
          Icon buttons
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div></div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Primary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Secondary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Primary
          </div>
          <div className="category-header" style={{ textAlign: "center" }}>
            Secondary
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(4, 1fr)",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          <div></div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Default
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Default
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Loading
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Loading
          </div>
        </div>

        {/* Normal Size Icon Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(4, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <div className="category-header">Normal</div>
          <IconButton
            type="primary"
            size="normal"
            icon={<SearchIcon size={24} />}
            aria-label="Search"
          />
          <IconButton
            type="secondary"
            size="normal"
            icon={<SearchIcon size={24} />}
            aria-label="Search"
          />
          <IconButton
            type="primary"
            size="normal"
            icon={<SearchIcon size={24} />}
            loading={loadingStates.iconLoading1}
            onClick={() => toggleLoading("iconLoading1")}
            aria-label="Search with loading"
          />
          <IconButton
            type="secondary"
            size="normal"
            icon={<SearchIcon size={24} />}
            loading={loadingStates.iconLoading2}
            onClick={() => toggleLoading("iconLoading2")}
            aria-label="Search with loading"
          />
        </div>

        {/* Medium Size Icon Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(4, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <div className="category-header">Medium</div>
          <IconButton
            type="primary"
            size="medium"
            icon={<SearchIcon size={24} />}
            aria-label="Search"
          />
          <IconButton
            type="secondary"
            size="medium"
            icon={<SearchIcon size={24} />}
            aria-label="Search"
          />
          <IconButton
            type="primary"
            size="medium"
            icon={<SearchIcon size={24} />}
            loading
            aria-label="Search loading"
          />
          <IconButton
            type="secondary"
            size="medium"
            icon={<SearchIcon size={24} />}
            loading
            aria-label="Search loading"
          />
        </div>

        {/* Small Size Icon Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(4, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <div className="category-header">Small</div>
          <IconButton
            type="primary"
            size="small"
            icon={<SearchIcon />}
            aria-label="Search"
          />
          <IconButton
            type="secondary"
            size="small"
            icon={<SearchIcon />}
            aria-label="Search"
          />
          <IconButton
            type="primary"
            size="small"
            icon={<SearchIcon />}
            disabled
            aria-label="Search disabled"
          />
          <IconButton
            type="secondary"
            size="small"
            icon={<SearchIcon />}
            disabled
            aria-label="Search disabled"
          />
        </div>
      </section>

      {/* Links Section */}
      <section>
        <h2 className="section-header" style={{ marginBottom: "40px" }}>
          Links
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(5, 1fr)",
            gap: "24px",
            marginBottom: "24px",
          }}
        >
          <div></div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Default
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Hover
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Focus
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Active
          </div>
          <div
            className="typography-descriptor"
            style={{ textAlign: "center" }}
          >
            Disabled
          </div>
        </div>

        {/* Normal Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(5, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div className="category-header">Normal</div>
          <Link size="normal" href="#example">
            Label
          </Link>
          <Link size="normal" href="#example" className="hover-demo">
            Label
          </Link>
          <Link size="normal" href="#example">
            Label
          </Link>
          <Link size="normal" href="#example">
            Label
          </Link>
          <Link size="normal" disabled>
            Label
          </Link>
        </div>

        {/* Medium Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(5, 1fr)",
            gap: "24px",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <div className="category-header">Medium</div>
          <Link size="medium" href="#example">
            Label
          </Link>
          <Link size="medium" href="#example">
            Label
          </Link>
          <Link size="medium" href="#example">
            Label
          </Link>
          <Link size="medium" href="#example">
            Label
          </Link>
          <Link size="medium" disabled>
            Label
          </Link>
        </div>

        {/* Small Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "120px repeat(5, 1fr)",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div className="category-header">Small</div>
          <Link size="small" href="#example">
            Label
          </Link>
          <Link size="small" href="#example">
            Label
          </Link>
          <Link size="small" href="#example">
            Label
          </Link>
          <Link size="small" href="#example">
            Label
          </Link>
          <Link size="small" disabled>
            Label
          </Link>
        </div>
      </section>

      {/* Usage Examples */}
      <section
        style={{
          marginTop: "100px",
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h3 className="headline-4" style={{ marginBottom: "24px" }}>
          Usage Examples
        </h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Button type="primary" href="/design-system">
            View Design System
          </Button>
          <Button type="secondary" iconLeft={<PlusIcon />}>
            Add Item
          </Button>
          <Button type="tertiary" iconRight={<ArrowRightIcon />}>
            Learn More
          </Button>
          <IconButton
            type="primary"
            icon={<SearchIcon />}
            aria-label="Search"
            onClick={() => alert("Search clicked!")}
          />
        </div>
      </section>
    </div>
  );
}
