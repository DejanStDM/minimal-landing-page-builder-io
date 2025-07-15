import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, className = "", align = "center" }: SectionHeaderProps) {
  const alignClass = align === "left" ? "section-header--left" : "section-header--center";
  return (
    <div className={`section-header ${alignClass} ${className}`.trim()}>
      <h2 className="headline-2 section-header__title">{title}</h2>
      {subtitle && <p className="body-1-regular section-header__subtitle">{subtitle}</p>}
    </div>
  );
} 