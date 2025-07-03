import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  size?: "normal" | "medium" | "small";
  disabled?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  [key: string]: any;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  type?: "primary" | "secondary";
  size?: "normal" | "medium" | "small";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  "aria-label": string;
  [key: string]: any;
}

export interface LinkProps {
  children: React.ReactNode;
  size?: "normal" | "medium" | "small";
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

// Loading Icon Component
const LoadingIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 1.33325L8 3.33325"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12.6665L8 14.6665"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.667 8L12.667 8"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.3335 8L1.3335 8"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.714 3.28598L11.2998 4.7002"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.70035 11.2999L3.28613 12.7141"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.28598 3.28598L4.7002 4.7002"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3001 11.2999L12.7144 12.7141"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow Right Icon
const ArrowRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.2502 11.0002L13.7199 8.53051C14.0129 8.23761 14.0129 7.76272 13.7199 7.46982L11.2502 5.00009M13.5003 8.00017L2.5 8.00017"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

// Plus Icon
const PlusIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.33325L8 12.6666"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6667 8L3.33341 8"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Search Icon
const SearchIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="7.18919"
      cy="7.35984"
      rx="5.18919"
      ry="5.18919"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.7568 11.2246L14.0001 14.4679"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Button({
  children,
  type = "primary",
  size = "normal",
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass = "button";
  const typeClass = `button--${type}`;
  const sizeClass = `button--${size}`;
  const loadingClass = loading ? "button--loading" : "";

  const classes = [baseClass, typeClass, sizeClass, loadingClass, className]
    .filter(Boolean)
    .join(" ");

  const iconSize = size === "normal" ? 24 : size === "medium" ? 16 : 16;
  const loadingIconSize = size === "normal" ? 24 : 16;

  const content = (
    <>
      {iconLeft && !loading && <span className="button-icon">{iconLeft}</span>}
      {loading && (
        <span className="button-icon">
          <LoadingIcon size={loadingIconSize} />
        </span>
      )}
      <span>{children}</span>
      {iconRight && !loading && (
        <span className="button-icon">{iconRight}</span>
      )}
      {!iconLeft && !iconRight && loading && (
        <span className="button-icon">
          <LoadingIcon size={loadingIconSize} />
        </span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

export function IconButton({
  icon,
  type = "primary",
  size = "normal",
  disabled = false,
  loading = false,
  onClick,
  className = "",
  "aria-label": ariaLabel,
  ...props
}: IconButtonProps) {
  const baseClass = "icon-button";
  const typeClass = `icon-button--${type}`;
  const sizeClass = `icon-button--${size}`;
  const loadingClass = loading ? "icon-button--loading" : "";

  const classes = [baseClass, typeClass, sizeClass, loadingClass, className]
    .filter(Boolean)
    .join(" ");

  const iconSize = size === "normal" ? 24 : size === "medium" ? 24 : 16;

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {loading ? <LoadingIcon size={iconSize} /> : icon}
    </button>
  );
}

export function Link({
  children,
  size = "normal",
  disabled = false,
  href,
  onClick,
  className = "",
  ...props
}: LinkProps) {
  const baseClass = "link";
  const sizeClass = `link--${size}`;
  const disabledClass = disabled ? "link--disabled" : "";

  const classes = [baseClass, sizeClass, disabledClass, className]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <span
      className={classes}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {children}
    </span>
  );
}

// Export common icons for convenience
export { LoadingIcon, ArrowRightIcon, PlusIcon, SearchIcon };
