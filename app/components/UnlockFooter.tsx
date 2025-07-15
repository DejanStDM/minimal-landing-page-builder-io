import React from "react";
import unlockFooterData from "../../data/unlockFooter.json";
import { UnlockSection } from "./UnlockSection";

export function UnlockFooter({ className = "" }: { className?: string }) {
  const { title, description, button, image, buttonHref } = unlockFooterData as {
    title: string;
    description: string;
    button: string;
    image: string;
    buttonHref: string;
  };
  return (
    <UnlockSection
      title={title}
      description={description}
      button={button}
      image={image}
      buttonHref={buttonHref}
      className={className}
    />
  );
}
