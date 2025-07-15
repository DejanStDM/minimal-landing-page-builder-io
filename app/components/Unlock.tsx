import React from "react";
import unlockData from "../../data/unlock.json";
import { UnlockSection } from "./UnlockSection";

export function Unlock({ className = "" }: { className?: string }) {
  const { title, description, button, image, buttonHref } = unlockData as {
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