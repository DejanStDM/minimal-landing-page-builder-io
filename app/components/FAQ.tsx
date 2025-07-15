"use client";

import React, { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export interface FAQAccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

// Chevron Down Icon for the accordion
const ChevronDownIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function FAQAccordionItem({ item, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <div className="faq-accordion__item">
      <button
        className="faq-accordion__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
      >
        <span className="faq-accordion__question">{item.question}</span>
        <span
          className={`faq-accordion__icon ${isOpen ? "faq-accordion__icon--open" : ""}`}
        >
          <ChevronDownIcon />
        </span>
      </button>
      <div
        id={`faq-content-${item.id}`}
        className={`faq-accordion__content ${isOpen ? "faq-accordion__content--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="faq-accordion__answer">{item.answer}</div>
      </div>
    </div>
  );
}

export function FAQ({
  items,
  allowMultiple = false,
  className = "",
}: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const handleToggle = (itemId: string) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev);

      if (newOpenItems.has(itemId)) {
        // Close the item
        newOpenItems.delete(itemId);
      } else {
        // Open the item
        if (!allowMultiple) {
          // If multiple items are not allowed, close all other items
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
      }

      return newOpenItems;
    });
  };

  const baseClass = "faq-accordion";
  const classes = [baseClass, className].filter(Boolean).join(" ");

  if (!items || items.length === 0) {
    return (
      <div className={classes}>
        <p className="faq-accordion__empty">
          No frequently asked questions available.
        </p>
      </div>
    );
  }

  return (
    <div className={classes}>
     
      {items.map((item) => (
        <FAQAccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
   
  );
}

export { ChevronDownIcon };
