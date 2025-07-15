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
    <div className="design-system-page">
      <div className="design-system-container">
        {/* Page Header */}
        <header className="design-system-header">
          <h1 className="design-system-title">Buttons</h1>
          <p className="design-system-description">
            Interactive button components for actions, navigation, and forms. Includes standard, icon, and link buttons with multiple types, sizes, and states.
          </p>
        </header>

        {/* Standard Buttons Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Standard Buttons</h2>
          <p className="design-system-section-description">
            Primary, secondary, and tertiary buttons in all sizes, with and without icons.
          </p>
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
        <section className="design-system-section">
          <h2 className="design-system-section-title">Icon Buttons</h2>
          <p className="design-system-section-description">
            Icon-only buttons for compact actions. Supports all types, sizes, and loading/disabled states.
          </p>
          {/* Headers Row */}
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

          {/* State Headers */}
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
        <section className="design-system-section">
          <h2 className="design-system-section-title">Links</h2>
          <p className="design-system-section-description">
            Styled text links with button-like appearance and states.
          </p>
          {/* Headers Row */}
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

        {/* Usage Examples Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Usage Examples</h2>
          <div className="design-system-example">
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
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className="design-system-section">
          <h2 className="design-system-section-title">Usage Guidelines</h2>
          <div className="design-system-guidelines">
            <div className="design-system-guidelines-item">
              <h3>When to Use</h3>
              <ul>
                <li>For primary and secondary actions in forms and dialogs</li>
                <li>To trigger navigation or submit data</li>
                <li>For icon-only actions in toolbars or compact UIs</li>
                <li>To provide clear, accessible call-to-action elements</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Accessibility Features</h3>
              <ul>
                <li>Keyboard navigation and focus indicators</li>
                <li>ARIA attributes for icon buttons</li>
                <li>Proper disabled and loading states</li>
                <li>High contrast and reduced motion support</li>
              </ul>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Props</h3>
              <div className="design-system-props">
                <div className="prop-item">
                  <code>type: 'primary' | 'secondary' | 'tertiary'</code>
                  <span>Button visual style</span>
                </div>
                <div className="prop-item">
                  <code>size: 'normal' | 'medium' | 'small'</code>
                  <span>Button size</span>
                </div>
                <div className="prop-item">
                  <code>iconLeft, iconRight: React.ReactNode</code>
                  <span>Optional icons for left/right</span>
                </div>
                <div className="prop-item">
                  <code>loading: boolean</code>
                  <span>Show loading spinner</span>
                </div>
                <div className="prop-item">
                  <code>disabled: boolean</code>
                  <span>Disable the button</span>
                </div>
                <div className="prop-item">
                  <code>href: string</code>
                  <span>Render as link</span>
                </div>
                <div className="prop-item">
                  <code>onClick: () => void</code>
                  <span>Click handler</span>
                </div>
                <div className="prop-item">
                  <code>className: string</code>
                  <span>Custom CSS classes</span>
                </div>
              </div>
            </div>
            <div className="design-system-guidelines-item">
              <h3>Code Example</h3>
              <pre className="design-system-code">
{`import { Button, IconButton, Link } from "../../components/Button";

<Button type="primary" size="normal">Label</Button>
<Button type="secondary" size="small" iconLeft={<Icon />}>
  With Icon
</Button>
<IconButton type="primary" icon={<Icon />} aria-label="Search" />
<Link size="medium" href="#">Link</Link>
`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
