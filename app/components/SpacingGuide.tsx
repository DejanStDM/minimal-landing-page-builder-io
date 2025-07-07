interface SpacingGuideProps {
  label: string;
  size: number;
  className?: string;
}

export function SpacingGuide({
  label,
  size,
  className = "",
}: SpacingGuideProps) {
  return (
    <div className={`spacing-guide ${className}`}>
      <div className="spacing-guide__label">{size}</div>
      <div
        className="spacing-guide__visual"
        style={{ width: `${size}px` }}
        aria-label={`${label}: ${size}px spacing`}
      />
    </div>
  );
}

interface LayoutGuideProps {
  containerWidth?: number;
}

export function LayoutGuide({ containerWidth = 1440 }: LayoutGuideProps) {
  return (
    <div className="layout-guide" style={{ maxWidth: `${containerWidth}px` }}>
      <div className="layout-guide__container">
        <SpacingGuide
          label="Container margin"
          size={144}
          className="spacing-guide--margin-left"
        />
        <SpacingGuide
          label="Gutter spacing"
          size={24}
          className="spacing-guide--gutter-left"
        />
        <div className="layout-guide__content">
          <span className="layout-guide__content-text">Content Area</span>
        </div>
        <SpacingGuide
          label="Gutter spacing"
          size={24}
          className="spacing-guide--gutter-right"
        />
        <SpacingGuide
          label="Container margin"
          size={144}
          className="spacing-guide--margin-right"
        />
      </div>
    </div>
  );
}
