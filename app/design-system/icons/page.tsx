import React from "react";

interface IconProps {
  children: React.ReactNode;
  name: string;
  size: "24" | "16";
}

const Icon: React.FC<IconProps> = ({ children, name, size }) => (
  <div className="icon-item">
    <div className="icon-preview">{children}</div>
    <div className="icon-name">{name}</div>
  </div>
);

interface IconSectionProps {
  title: string;
  size: "24" | "16";
  children: React.ReactNode;
}

const IconSection: React.FC<IconSectionProps> = ({ title, size, children }) => (
  <div className="icon-section">
    <div className="icon-section-header">
      <h2 className="section-title">{title}</h2>
      <span className="size-badge">{size}</span>
    </div>
    <div className="icon-grid">{children}</div>
    <hr className="section-divider" />
  </div>
);

export default function IconsPage() {
  return (
    <div className="design-system-page">
      <div className="design-system-container">
        {/* Page Header */}
        <header className="design-system-header">
          <h1 className="design-system-title">Icons</h1>
          <p className="design-system-description">
            The icon library provides a consistent set of SVG icons for navigation, actions, and status. Use these icons for clarity and visual appeal in your UI.
          </p>
        </header>

        {/* Icon Demos (preserve all existing sections and SVGs) */}
        {/* Arrows & Directions - 24px */}
        <IconSection title="Arrows & Directions" size="24">
          <Icon name="Down square" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 11L11.2929 13.2929C11.6834 13.6834 12.3166 13.6834 12.7071 13.2929L15 11M2 17L2 7C2 4.23858 4.23858 2 7 2L17 2C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Up square" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 13L12.7071 10.7071C12.3166 10.3166 11.6834 10.3166 11.2929 10.7071L9 13M22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17L2 7C2 4.23858 4.23858 2 7 2L17 2C19.7614 2 22 4.23858 22 7Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Right square" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 9L13.2929 11.2929C13.6834 11.6834 13.6834 12.3166 13.2929 12.7071L11 15M17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Left square" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 9L10.7071 11.2929C10.3166 11.6834 10.3166 12.3166 10.7071 12.7071L13 15M7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Down circle" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8 10.7L11.3172 13.4109C11.7128 13.8369 12.3872 13.8369 12.7828 13.4109L15.3 10.7M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Up circle" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8 13.3L11.3172 10.5891C11.7128 10.1631 12.3872 10.1631 12.7828 10.5891L15.3 13.3M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Right circle" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L15.2929 12.7071C15.6834 12.3166 15.6834 11.6834 15.2929 11.2929L13 9M15 12L8 12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Left circle" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 9L8.70711 11.2929C8.31658 11.6834 8.31658 12.3166 8.70711 12.7071L11 15M9 12H16M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Down" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16L11.2929 19.2929C11.6834 19.6834 12.3166 19.6834 12.7071 19.2929L16 16M12 19L12 5"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Up" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.00009L11.2929 4.7072C11.6834 4.31668 12.3166 4.31668 12.7071 4.7072L16 8.00009M12 5.0001L12 19.0001"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Right" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 16L19.2929 12.7071C19.6834 12.3166 19.6834 11.6834 19.2929 11.2929L16 8M19 12L5 12"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Left" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99985 8L4.70696 11.2929C4.31643 11.6834 4.31643 12.3166 4.70696 12.7071L7.99985 16M4.99985 12L18.9998 12"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Expand" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.61539 19.3846L5 19.3846C4.44772 19.3846 4 18.9369 4 18.3846L4 14.7692M4.76918 18.6155L10.1538 13.2309M19.3844 8.61514L19.3844 4.99976C19.3844 4.44747 18.9367 3.99976 18.3844 3.99976L14.769 3.99976M18.6152 4.76902L13.2305 10.1536"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Collapse" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84611 13.5382L9.4615 13.5382C10.0138 13.5382 10.4615 13.9859 10.4615 14.5382L10.4615 18.1535"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.69224 14.3073L4.30762 19.6919"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M13.5382 5.8466L13.5382 9.46199C13.5382 10.0143 13.9859 10.462 14.5382 10.462L18.1535 10.462"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14.3073 9.69272L19.6919 4.30811"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Swap" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8.00009L7.29289 5.7072C7.68342 5.31668 8.31658 5.31668 8.70711 5.7072L11 8.00009M8 6.00009L8 18.0001M14 17.0001L16.2929 19.293C16.6834 19.6835 17.3166 19.6835 17.7071 19.293L20 17.0001M17 19.0001V7.00009"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>
        </IconSection>

        {/* Arrows & Directions - 16px */}
        <IconSection title="Arrows & Directions" size="16">
          <Icon name="Down" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 11.2502L7.46973 13.7199C7.76264 14.0129 8.23752 14.0129 8.53042 13.7199L11.0002 11.2502M8.00008 13.5003V2.5"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Up" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4.74978L8.53027 2.28005C8.23737 1.98715 7.76248 1.98715 7.46958 2.28005L4.99984 4.74978M7.99992 2.49973L7.99992 13.5"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Right" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2502 11.0002L13.7199 8.53051C14.0129 8.23761 14.0129 7.76272 13.7199 7.46982L11.2502 5.00009M13.5003 8.00017L2.5 8.00017"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Left" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.74978 4.99976L2.28005 7.46949C1.98715 7.76239 1.98715 8.23728 2.28005 8.53018L4.74978 10.9999M2.49973 7.99983L13.5 7.99983"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Up Left" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75895 3.73551H4.26622C3.852 3.73551 3.5162 4.07131 3.5162 4.48553L3.5162 7.97827M4.04655 4.26586L11.8249 12.0442"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Up Right" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0443 7.97843V4.4857C12.0443 4.07148 11.7085 3.73568 11.2943 3.73568L7.80152 3.73568M11.5139 4.26603L3.73556 12.0444"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Down Left" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.51579 8.02132V11.5141C3.51579 11.9283 3.85158 12.2641 4.26581 12.2641L7.75854 12.2641M4.04613 11.7337L11.8245 3.95536"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Down Right" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.80159 12.2642H11.2943C11.7086 12.2642 12.0443 11.9284 12.0443 11.5142L12.0443 8.02149M11.514 11.7339L3.73563 3.95553"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Swap" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.82463L4.61795 3.20668C4.89352 2.93111 5.34031 2.93111 5.61587 3.20668L7.23383 4.82463M5.11691 3.41335L5.11691 11.881M9.35074 11.1754L10.9687 12.7933C11.2443 13.0689 11.691 13.0689 11.9666 12.7933L13.5846 11.1754M11.4677 12.5866V4.11899"
                stroke="#717171"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Expand" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.15005 13.5003H3.68251C3.30557 13.5003 3 13.1947 3 12.8178L3 10.3503M3.52497 12.9754L7.20003 9.30033M13.5 6.15005V3.68251C13.5 3.30557 13.1944 3 12.8175 3L10.35 3M12.975 3.52503L9.29993 7.20009"
                stroke="#717171"
                strokeLinecap="round"
              />
            </svg>
          </Icon>
        </IconSection>

        {/* User Interface - 24px */}
        <IconSection title="User Interface" size="24">
          <Icon name="Minus" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Plus" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Check" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Close" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Burger" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L4 6"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 12L4 12"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 18H4"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Search" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 16.958L21.5 21.958"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Document" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="2"
                width="16"
                height="20"
                rx="4"
                stroke="#717171"
                strokeWidth="1.5"
              />
              <path
                d="M8 7H16"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 12H16"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 17H12"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Icon>

          <Icon name="Filter" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V4.81751C22 5.57739 21.7116 6.30895 21.1932 6.86447L15.5379 12.9237C15.1922 13.294 15 13.7817 15 14.2883V18.382C15 18.7607 14.786 19.107 14.4472 19.2764L10.4472 21.2764C9.78231 21.6088 9 21.1253 9 20.382V14.2883C9 13.7817 8.80776 13.294 8.46211 12.9237L2.80683 6.86446C2.28836 6.30895 2 5.57739 2 4.81751V4Z"
                stroke="#717171"
                strokeWidth="1.5"
              />
            </svg>
          </Icon>

          <Icon name="Lock" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="9"
                width="16"
                height="12"
                rx="4"
                stroke="#717171"
                strokeWidth="1.5"
              />
              <path
                d="M12 16L12 14"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 9V7C16 4.79086 14.2091 3 12 3V3C9.79086 3 8 4.79086 8 7L8 9"
                stroke="#717171"
                strokeWidth="1.5"
              />
            </svg>
          </Icon>

          <Icon name="User" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="7" r="4" stroke="#717171" strokeWidth="1.5" />
              <path
                d="M5 16.9347C5 16.0743 5.54085 15.3068 6.35109 15.0175V15.0175C10.004 13.7128 13.996 13.7128 17.6489 15.0175V15.0175C18.4591 15.3068 19 16.0743 19 16.9347V18.2502C19 19.4376 17.9483 20.3498 16.7728 20.1818L15.8184 20.0455C13.2856 19.6837 10.7144 19.6837 8.18162 20.0455L7.22721 20.1818C6.0517 20.3498 5 19.4376 5 18.2502V16.9347Z"
                stroke="#717171"
                strokeWidth="1.5"
              />
            </svg>
          </Icon>

          <Icon name="Home" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 10.9384C2.5 9.71422 3.06058 8.55744 4.02142 7.79888L9.52142 3.45677C10.9747 2.30948 13.0253 2.30948 14.4786 3.45677L19.9786 7.79888C20.9394 8.55744 21.5 9.71422 21.5 10.9384V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H16C15.4477 21.5 15 21.0523 15 20.5V17.5C15 16.3954 14.1046 15.5 13 15.5H11C9.89543 15.5 9 16.3954 9 17.5V20.5C9 21.0523 8.55228 21.5 8 21.5H6.5C4.29086 21.5 2.5 19.7091 2.5 17.5L2.5 10.9384Z"
                stroke="#717171"
                strokeWidth="1.5"
              />
            </svg>
          </Icon>

          <Icon name="Eye" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.20057 12.7844C2.93314 12.2954 2.93314 11.7045 3.20058 11.2154C4.9 8.10803 8.20336 6 12 6C15.7966 6 19.1 8.10809 20.7994 11.2156C21.0669 11.7046 21.0669 12.2956 20.7994 12.7846C19.1 15.892 15.7966 18 12 18C8.20336 18 4.89997 15.8919 3.20057 12.7844Z"
                stroke="#717171"
                strokeWidth="1.5"
              />
              <circle cx="12" cy="12" r="3" stroke="#717171" strokeWidth="1.5" />
            </svg>
          </Icon>

          <Icon name="Settings" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="3" stroke="#717171" strokeWidth="1.5" />
              <path
                d="M12 1L12 0.25H12V1ZM15.5 3.9375L15.125 4.587L15.125 4.587L15.5 3.9375ZM15.5 20.0625L15.125 19.413L15.125 19.413L15.5 20.0625ZM12 23V23.75H12L12 23ZM8.5 20.0625L8.876 19.413L8.875 19.413L8.5 20.0625ZM8.5 3.9375L8.875 4.587L8.876 4.587L8.5 3.9375Z"
                stroke="#717171"
                strokeWidth="1.5"
              />
            </svg>
          </Icon>

          <Icon name="Loading" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L12 5"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L12 22"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 12L19 12"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12L2 12"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.0715 4.92897L16.9502 7.05029"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.05003 16.95L4.92871 19.0713"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.92848 4.92897L7.0498 7.05029"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.95 16.95L19.0713 19.0713"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Danger" size="24">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 17.9261C2 17.3187 2.15479 16.7214 2.44975 16.1904L8.63566 5.0558C9.18399 4.06881 10.1381 3.37239 11.2452 3.15096V3.15096C11.7435 3.05131 12.2565 3.05131 12.7548 3.15096V3.15096C13.8619 3.37239 14.816 4.06881 15.3643 5.05581L21.5502 16.1904C21.8452 16.7214 22 17.3187 22 17.9261V17.9261C22 19.8999 20.3999 21.5 18.4261 21.5H5.57391C3.60009 21.5 2 19.8999 2 17.9261V17.9261Z"
                stroke="#717171"
                strokeWidth="1.5"
              />
              <path
                d="M12 9L12 13"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16L12 16.5"
                stroke="#717171"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
        </IconSection>

        {/* User Interface - 16px */}
        <IconSection title="User Interface" size="16">
          <Icon name="Minus" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.3335 8H12.6668"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Plus" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3.33325V12.6666"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.3335 8H12.6668"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Check" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3332 4L5.99984 11.3333L2.6665 8"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Close" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L4 12"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 4L12 12"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Search" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="7.18919"
                cy="7.35984"
                rx="5.18919"
                ry="5.18919"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7568 11.2246L14.0001 14.4679"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Loading" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1.33325L8 3.33325"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12.6665L8 14.6665"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.667 8L12.667 8"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.3335 8L1.3335 8"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.714 3.28598L11.2998 4.7002"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.70035 11.2999L3.28613 12.7141"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.28598 3.28598L4.7002 4.7002"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.3001 11.2999L12.7144 12.7141"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>

          <Icon name="Danger" size="16">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10.8784C2 10.5151 2.0933 10.1579 2.27096 9.84098L5.977 3.23022C6.30887 2.63823 6.88339 2.22131 7.54911 2.08937V2.08937C7.84681 2.03036 8.15319 2.03036 8.45089 2.08937V2.08937C9.11661 2.22131 9.69113 2.63823 10.023 3.23021L13.729 9.84098C13.9067 10.1579 14 10.5151 14 10.8784V10.8784C14 12.0501 13.0501 13 11.8784 13H4.12156C2.94986 13 2 12.0501 2 10.8784V10.8784Z"
                stroke="#717171"
                strokeWidth="1.1"
              />
              <path
                d="M8 6.00008L8 8.66675"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10.6667L8 11"
                stroke="#717171"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
        </IconSection>
      </div>

      <div className="design-system-container">
      {/* Usage Guidelines Section */}
      <section className="design-system-section">
        <h2 className="design-system-section-title">Usage Guidelines</h2>
        <div className="design-system-guidelines">
          <div className="design-system-guidelines-item">
            <h3>When to Use</h3>
            <ul>
              <li>For navigation, actions, and status indicators</li>
              <li>To enhance clarity and reduce text clutter</li>
              <li>To provide visual cues for interactive elements</li>
            </ul>
          </div>
          <div className="design-system-guidelines-item">
            <h3>Accessibility Features</h3>
            <ul>
              <li>Use <code>aria-label</code> or <code>title</code> for screen readers</li>
              <li>Ensure sufficient contrast for all icons</li>
              <li>Icons should not be the only means of conveying information</li>
            </ul>
          </div>
          <div className="design-system-guidelines-item">
            <h3>Props / Classes</h3>
            <div className="design-system-props">
              <div className="prop-item">
                <code>name: string</code>
                <span>Icon name for reference</span>
              </div>
              <div className="prop-item">
                <code>size: '24' | '16'</code>
                <span>Icon size in px</span>
              </div>
              <div className="prop-item">
                <code>children: React.ReactNode</code>
                <span>SVG content</span>
              </div>
            </div>
          </div>
          <div className="design-system-guidelines-item">
            <h3>Code Example</h3>
            <pre className="design-system-code">
{`<Icon name="Arrow Right" size="24">
  <svg width="24" height="24" ... />
</Icon>
`}
            </pre>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
