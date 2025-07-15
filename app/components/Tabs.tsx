import React, { useState } from "react";

export interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  size?: "small" | "medium" | "large";
  position?: "horizontal" | "vertical";
  type?: "line" | "card" | "editable-card";
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export interface TabPaneProps {
  key: string;
  tab: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

// Tab Pane Component
export function TabPane({ children, className = "" }: TabPaneProps) {
  return <div className={`tabs__pane ${className}`}>{children}</div>;
}

// Main Tabs Component
export function Tabs({
  items = [],
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onChange,
  size = "medium",
  position = "horizontal",
  type = "line",
  centered = false,
  className = "",
  children,
}: TabsProps) {
  const [internalActiveKey, setInternalActiveKey] = useState(() => {
    return defaultActiveKey || items[0]?.key || "";
  });

  const activeKey =
    controlledActiveKey !== undefined ? controlledActiveKey : internalActiveKey;

  const handleTabClick = (key: string, disabled?: boolean) => {
    if (disabled) return;

    if (controlledActiveKey === undefined) {
      setInternalActiveKey(key);
    }
    onChange?.(key);
  };

  // If children are provided, convert them to items
  const tabItems = React.Children.toArray(children)
    .filter(
      (child): child is React.ReactElement<TabPaneProps> =>
        React.isValidElement(child) && child.type === TabPane,
    )
    .map((child) => ({
      key: child.props.key as string,
      label: child.props.tab,
      content: child.props.children,
      disabled: child.props.disabled,
    }));

  const finalItems = items.length > 0 ? items : tabItems;
  const activeItem = finalItems.find((item) => item.key === activeKey);

  const tabsClasses = [
    "tabs",
    `tabs--${position}`,
    `tabs--${type}`,
    `tabs--${size}`,
    centered ? "tabs--centered" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const tabListClasses = [
    "tabs__list",
    `tabs__list--${position}`,
    `tabs__list--${type}`,
    centered ? "tabs__list--centered" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={tabsClasses}>
      <div className={tabListClasses} role="tablist">
        {finalItems.map((item) => {
          const isActive = item.key === activeKey;
          const tabClasses = [
            "tabs__tab",
            isActive ? "tabs__tab--active" : "",
            item.disabled ? "tabs__tab--disabled" : "",
            `tabs__tab--${type}`,
            `tabs__tab--${size}`,
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={item.key}
              className={tabClasses}
              role="tab"
              aria-selected={isActive}
              aria-disabled={item.disabled}
              tabIndex={item.disabled ? -1 : 0}
              onClick={() => handleTabClick(item.key, item.disabled)}
            >
              {item.icon && <span className="tabs__tab-icon">{item.icon}</span>}
              <span className="tabs__tab-label">{item.label}</span>
              {item.badge && (
                <span className="tabs__tab-badge">{item.badge}</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="tabs__content">
        {activeItem && (
          <div
            className="tabs__panel"
            role="tabpanel"
            aria-labelledby={`tab-${activeKey}`}
          >
            {activeItem.content}
          </div>
        )}
      </div>
    </div>
  );
}

// Export components
Tabs.TabPane = TabPane;

// Common tab icons
export const TabIcons = {
  Home: ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M2 6l6-4.5L14 6v7a1 1 0 01-1 1H3a1 1 0 01-1-1V6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 13V9h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  User: ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M13 14v-1.5a3 3 0 00-3-3H6a3 3 0 00-3 3V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="5"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Settings: ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle
        cx="8"
        cy="8"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9 9.6a1 1 0 000-3.2l-1.1-.3a6.4 6.4 0 00-.8-1.9l.5-1a1 1 0 00-1.4-1.4l-1 .5a6.4 6.4 0 00-1.9-.8l-.3-1.1a1 1 0 00-1.9 0l-.3 1.1a6.4 6.4 0 00-1.9.8l-1-.5a1 1 0 00-1.4 1.4l.5 1a6.4 6.4 0 00-.8 1.9l-1.1.3a1 1 0 000 1.9l1.1.3a6.4 6.4 0 00.8 1.9l-.5 1a1 1 0 001.4 1.4l1-.5a6.4 6.4 0 001.9.8l.3 1.1a1 1 0 001.9 0l.3-1.1a6.4 6.4 0 001.9-.8l1 .5a1 1 0 001.4-1.4l-.5-1a6.4 6.4 0 00.8-1.9l1.1-.3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Bell: ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M12 5.3A4 4 0 004 5.3c0 5.3-2 6.7-2 6.7h12s-2-1.4-2-6.7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 14a2 2 0 01-3.4 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
