"use client";

import React from "react";
import { FAQ } from "../../components/FAQ";
import faqData from "../../../data/faq.json";

export default function FAQPage() {
  // Sample FAQ data for demonstration
  const sampleFAQs = [
    {
      id: "demo1",
      question: "Single Item Example",
      answer:
        "This is a simple FAQ item to demonstrate the basic functionality.",
    },
    {
      id: "demo2",
      question: "Multiple Items Example",
      answer:
        "When allowMultiple is enabled, users can open several FAQ items simultaneously for easier comparison and reading.",
    },
  ];

  return (
    <div className="design-system-page">
      <div className="design-system-container">
        <header className="design-system-header">
          <h1 className="design-system-title">FAQ Accordion</h1>
          <p className="design-system-description">
            An interactive accordion component for frequently asked questions.
            Features smooth animations, keyboard accessibility, and responsive
            design.
          </p>
        </header>

        <section className="design-system-section">
          <h2 className="design-system-section-title">Default FAQ Accordion</h2>
          <p className="design-system-section-description">
            Single-open mode (default) - only one FAQ item can be open at a
            time.
          </p>
          <div className="design-system-example">
            <FAQ items={sampleFAQs} />
          </div>
        </section>

        <section className="design-system-section">
          <h2 className="design-system-section-title">Multiple Open FAQ</h2>
          <p className="design-system-section-description">
            Multiple-open mode - users can open several FAQ items
            simultaneously.
          </p>
          <div className="design-system-example">
            <FAQ items={sampleFAQs} allowMultiple />
          </div>
        </section>

        <section className="design-system-section">
          <h2 className="design-system-section-title">Full FAQ Example</h2>
          <p className="design-system-section-description">
            Complete FAQ section with real content from the data file.
          </p>
          <div className="design-system-example">
            <FAQ items={faqData} />
          </div>
        </section>

        <section className="design-system-section">
          <h2 className="design-system-section-title">Empty State</h2>
          <p className="design-system-section-description">
            How the component handles empty data gracefully.
          </p>
          <div className="design-system-example">
            <FAQ items={[]} />
          </div>
        </section>

        <section className="design-system-section">
          <h2 className="design-system-section-title">Usage Guidelines</h2>
          <div className="design-system-guidelines">
            <div className="design-system-guidelines-item">
            <h3>When to Use</h3>
            <ul>
              <li>For frequently asked questions on support pages</li>
              <li>To present complex information in digestible chunks</li>
              <li>When users need to find specific information quickly</li>
              <li>
                To reduce page clutter while maintaining content accessibility
              </li>
            </ul>
               </div>
            <div className="design-system-guidelines-item">

            <h3>Accessibility Features</h3>
            <ul>
              <li>Keyboard navigation support (Tab, Enter, Space)</li>
              <li>ARIA attributes for screen readers</li>
              <li>Focus management and visual indicators</li>
              <li>
                Reduced motion support for users with vestibular disorders
              </li>
              <li>High contrast mode compatibility</li>
            </ul>
            </div>


            <div className="design-system-guidelines-item">
            <h3>Props</h3>
            <div className="design-system-props">
              <div className="prop-item">
                <code>items: FAQItem[]</code>
                <span>Array of FAQ items with id, question, and answer</span>
              </div>
              <div className="prop-item">
                <code>allowMultiple?: boolean</code>
                <span>
                  Allow multiple items to be open simultaneously (default:
                  false)
                </span>
              </div>
              <div className="prop-item">
                <code>className?: string</code>
                <span>Additional CSS classes for customization</span>
              </div>
            </div>

            </div>

            <div className="design-system-guidelines-item">
              
            <h3>Code Example</h3>
            <pre className="design-system-code">
              {`import { FAQ } from "./components/FAQ";
import faqData from "./data/faq.json";

export function FAQSection() {
  return (
    <FAQ 
      items={faqData}
      allowMultiple={false}
      className="custom-faq"
    />
  );
}`}
            </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
