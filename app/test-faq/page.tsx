"use client";

import React from "react";
import { FAQ } from "../components/FAQ";
import faqData from "../../data/faq.json";

export default function TestFAQPage() {
  const testFAQs = [
    {
      id: "test1",
      question: "Test Question 1",
      answer:
        "This is the first test answer to verify the accordion functionality works correctly.",
    },
    {
      id: "test2",
      question: "Test Question 2",
      answer:
        "This is the second test answer to check that multiple items can be toggled independently when allowMultiple is true.",
    },
    {
      id: "test3",
      question:
        "Test Question 3 with a longer question to test text wrapping and responsive behavior",
      answer:
        "This is a longer test answer with more content to verify that the accordion can handle varying amounts of text. It should expand and contract smoothly, maintaining good readability and accessibility features across all device sizes.",
    },
  ];

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>FAQ Component Test</h1>

      <section style={{ marginBottom: "40px" }}>
        <h2>Test FAQ (Single Open)</h2>
        <FAQ items={testFAQs} />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Test FAQ (Multiple Open)</h2>
        <FAQ items={testFAQs} allowMultiple />
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Real FAQ Data</h2>
        <FAQ items={faqData} />
      </section>

      <section>
        <h2>Empty State</h2>
        <FAQ items={[]} />
      </section>
    </div>
  );
}
