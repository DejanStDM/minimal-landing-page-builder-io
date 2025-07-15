"use client";

import React, { useState } from "react";
import { Tabs, TabIcons } from "../../components/Tabs";

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState("tab1");

  // Sample content for tabs
  const sampleContent = {
    profile: (
      <div
        style={{
          padding: "20px",
          background: "var(--Neutral-Silver)",
          borderRadius: "6px",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0", color: "var(--Text-Gray-900)" }}>
          User Profile
        </h3>
        <p style={{ margin: "0", color: "var(--Neutral-D_Grey)" }}>
          Manage your personal information, preferences, and account settings.
          Update your profile picture, contact details, and privacy settings.
        </p>
      </div>
    ),
    settings: (
      <div
        style={{
          padding: "20px",
          background: "var(--Neutral-Silver)",
          borderRadius: "6px",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0", color: "var(--Text-Gray-900)" }}>
          Application Settings
        </h3>
        <p style={{ margin: "0", color: "var(--Neutral-D_Grey)" }}>
          Configure your application preferences including notifications, theme
          settings, language preferences, and security options.
        </p>
      </div>
    ),
    notifications: (
      <div
        style={{
          padding: "20px",
          background: "var(--Neutral-Silver)",
          borderRadius: "6px",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0", color: "var(--Text-Gray-900)" }}>
          Notifications
        </h3>
        <p style={{ margin: "0", color: "var(--Neutral-D_Grey)" }}>
          Control how and when you receive notifications. Set preferences for
          email alerts, push notifications, and in-app messages.
        </p>
      </div>
    ),
    help: (
      <div
        style={{
          padding: "20px",
          background: "var(--Neutral-Silver)",
          borderRadius: "6px",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0", color: "var(--Text-Gray-900)" }}>
          Help & Support
        </h3>
        <p style={{ margin: "0", color: "var(--Neutral-D_Grey)" }}>
          Access documentation, tutorials, and contact support. Find answers to
          frequently asked questions and troubleshooting guides.
        </p>
      </div>
    ),
  };

  const basicTabs = [
    { key: "profile", label: "Profile", content: sampleContent.profile },
    { key: "settings", label: "Settings", content: sampleContent.settings },
    {
      key: "notifications",
      label: "Notifications",
      content: sampleContent.notifications,
      badge: "3",
    },
    { key: "help", label: "Help", content: sampleContent.help },
  ];

  const iconTabs = [
    {
      key: "profile",
      label: "Profile",
      content: sampleContent.profile,
      icon: <TabIcons.User />,
    },
    {
      key: "settings",
      label: "Settings",
      content: sampleContent.settings,
      icon: <TabIcons.Settings />,
    },
    {
      key: "notifications",
      label: "Notifications",
      content: sampleContent.notifications,
      icon: <TabIcons.Bell />,
      badge: "3",
    },
    {
      key: "help",
      label: "Help",
      content: sampleContent.help,
      icon: <TabIcons.Home />,
    },
  ];

  const disabledTabs = [
    { key: "active1", label: "Active Tab", content: sampleContent.profile },
    {
      key: "active2",
      label: "Another Active",
      content: sampleContent.settings,
    },
    {
      key: "disabled1",
      label: "Disabled Tab",
      content: sampleContent.notifications,
      disabled: true,
    },
    { key: "active3", label: "Last Active", content: sampleContent.help },
  ];

  return (
    <div className="design-system-page">
      <div className="design-system-page__header">
        <h1 className="design-system-page__title">Tabs</h1>
        <p className="design-system-page__description">
          Tab navigation components for organizing content into separate views.
          Supports horizontal and vertical layouts, different sizes, and various
          styles.
        </p>
      </div>

      <div className="design-system-page__content">
        {/* Basic Horizontal Tabs */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">
            Basic Horizontal Tabs
          </h2>
          <p className="design-system-section__description">
            Standard horizontal tab navigation with line-style indicators.
          </p>

          <div className="design-system-example">
            <Tabs items={basicTabs} defaultActiveKey="profile" size="medium" />
          </div>

          <div className="design-system-code">
            <pre>{`<Tabs
  items={[
    { key: "profile", label: "Profile", content: <ProfileContent /> },
    { key: "settings", label: "Settings", content: <SettingsContent /> },
    { key: "notifications", label: "Notifications", content: <NotificationsContent />, badge: "3" },
    { key: "help", label: "Help", content: <HelpContent /> },
  ]}
  defaultActiveKey="profile"
  size="medium"
/>`}</pre>
          </div>
        </section>

        {/* Card Style Tabs */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Card Style Tabs</h2>
          <p className="design-system-section__description">
            Card-style tabs with background and shadow effects.
          </p>

          <div className="design-system-example">
            <Tabs
              items={basicTabs}
              defaultActiveKey="settings"
              type="card"
              size="medium"
            />
          </div>

          <div className="design-system-code">
            <pre>{`<Tabs
  items={tabs}
  type="card"
  size="medium"
  defaultActiveKey="settings"
/>`}</pre>
          </div>
        </section>

        {/* Tabs with Icons */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Tabs with Icons</h2>
          <p className="design-system-section__description">
            Enhanced tabs with icons and badges for better visual communication.
          </p>

          <div className="design-system-example">
            <Tabs items={iconTabs} defaultActiveKey="profile" size="medium" />
          </div>

          <div className="design-system-code">
            <pre>{`<Tabs
  items={[
    { 
      key: "profile", 
      label: "Profile", 
      content: <Content />,
      icon: <TabIcons.User />
    },
    { 
      key: "notifications", 
      label: "Notifications", 
      content: <Content />,
      icon: <TabIcons.Bell />,
      badge: "3"
    },
  ]}
/>`}</pre>
          </div>
        </section>

        {/* Vertical Tabs */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Vertical Tabs</h2>
          <p className="design-system-section__description">
            Vertical tab layout for sidebar-style navigation. Automatically
            switches to horizontal on mobile.
          </p>

          <div className="design-system-example">
            <Tabs
              items={iconTabs}
              defaultActiveKey="settings"
              position="vertical"
              size="medium"
            />
          </div>

          <div className="design-system-code">
            <pre>{`<Tabs
  items={tabs}
  position="vertical"
  defaultActiveKey="settings"
  size="medium"
/>`}</pre>
          </div>
        </section>

        {/* Vertical Card Tabs */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Vertical Card Tabs</h2>
          <p className="design-system-section__description">
            Vertical tabs with card styling for a more prominent sidebar
            navigation.
          </p>

          <div className="design-system-example">
            <Tabs
              items={iconTabs}
              defaultActiveKey="notifications"
              position="vertical"
              type="card"
              size="medium"
            />
          </div>
        </section>

        {/* Centered Tabs */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Centered Tabs</h2>
          <p className="design-system-section__description">
            Horizontally centered tab navigation for balanced layouts.
          </p>

          <div className="design-system-example">
            <Tabs
              items={basicTabs}
              defaultActiveKey="settings"
              centered
              size="medium"
            />
          </div>

          <div className="design-system-code">
            <pre>{`<Tabs
  items={tabs}
  centered
  defaultActiveKey="settings"
/>`}</pre>
          </div>
        </section>

        {/* Size Variants */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Size Variants</h2>
          <p className="design-system-section__description">
            Different sizes for various use cases and design requirements.
          </p>

          <div className="design-system-subsection">
            <h3>Small Tabs</h3>
            <div className="design-system-example">
              <Tabs
                items={basicTabs.slice(0, 3)}
                defaultActiveKey="profile"
                size="small"
              />
            </div>
          </div>

          <div className="design-system-subsection">
            <h3>Medium Tabs (Default)</h3>
            <div className="design-system-example">
              <Tabs
                items={basicTabs.slice(0, 3)}
                defaultActiveKey="settings"
                size="medium"
              />
            </div>
          </div>

          <div className="design-system-subsection">
            <h3>Large Tabs</h3>
            <div className="design-system-example">
              <Tabs
                items={basicTabs.slice(0, 3)}
                defaultActiveKey="notifications"
                size="large"
              />
            </div>
          </div>

          <div className="design-system-code">
            <pre>{`// Size options
<Tabs size="small" items={tabs} />
<Tabs size="medium" items={tabs} />
<Tabs size="large" items={tabs} />`}</pre>
          </div>
        </section>

        {/* Disabled Tabs */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Disabled State</h2>
          <p className="design-system-section__description">
            Tabs can be disabled to prevent interaction while maintaining visual
            context.
          </p>

          <div className="design-system-example">
            <Tabs
              items={disabledTabs}
              defaultActiveKey="active1"
              size="medium"
            />
          </div>

          <div className="design-system-code">
            <pre>{`<Tabs
  items={[
    { key: "active", label: "Active Tab", content: <Content /> },
    { key: "disabled", label: "Disabled Tab", content: <Content />, disabled: true },
  ]}
/>`}</pre>
          </div>
        </section>

        {/* Controlled Tabs */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Controlled Tabs</h2>
          <p className="design-system-section__description">
            Tabs with controlled state for advanced use cases. Current tab:{" "}
            <strong>{activeTab}</strong>
          </p>

          <div className="design-system-example">
            <Tabs
              items={basicTabs}
              activeKey={activeTab}
              onChange={setActiveTab}
              size="medium"
            />
          </div>

          <div className="design-system-code">
            <pre>{`const [activeTab, setActiveTab] = useState("tab1");

<Tabs
  items={tabs}
  activeKey={activeTab}
  onChange={setActiveTab}
/>`}</pre>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="design-system-section">
          <h2 className="design-system-section__title">Usage Guidelines</h2>

          <div className="design-system-guidelines">
            <div className="design-system-guideline">
              <h3>When to Use</h3>
              <ul>
                <li>Organizing related content into separate views</li>
                <li>Navigation between different sections of content</li>
                <li>Switching between different data views or filters</li>
                <li>Settings pages with multiple categories</li>
              </ul>
            </div>

            <div className="design-system-guideline">
              <h3>Layout Choice</h3>
              <ul>
                <li>
                  <strong>Horizontal:</strong> Use for main navigation, few tabs
                  (2-6)
                </li>
                <li>
                  <strong>Vertical:</strong> Use for many tabs, sidebar
                  navigation, or when space is limited horizontally
                </li>
                <li>
                  <strong>Card style:</strong> Use for more prominent navigation
                  or when tabs need more visual weight
                </li>
              </ul>
            </div>

            <div className="design-system-guideline">
              <h3>Accessibility</h3>
              <ul>
                <li>Tabs support keyboard navigation (Tab, Arrow keys)</li>
                <li>ARIA attributes are automatically applied</li>
                <li>Focus indicators are clearly visible</li>
                <li>Disabled tabs are properly marked for screen readers</li>
              </ul>
            </div>

            <div className="design-system-guideline">
              <h3>Best Practices</h3>
              <ul>
                <li>Keep tab labels short and descriptive</li>
                <li>Use icons to enhance understanding, not replace text</li>
                <li>Limit the number of tabs to avoid overwhelming users</li>
                <li>Use badges sparingly for important notifications</li>
                <li>Consider responsive behavior on smaller screens</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
