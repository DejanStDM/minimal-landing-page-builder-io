"use client";

import { FAQ } from "./FAQ";
import faqData from "../../data/faq.json";
import { SectionHeader } from "./SectionHeader";

export function FAQSection() {
  return (
    <section className="faq-section section__spacing-top section__spacing-bottom">
      <div className="sec__container">
        <SectionHeader title="Frequently Asked Questions" subtitle="Find answers to common questions below." className="faq-section__header" />
        <FAQ items={faqData} />
      </div>
    </section>
  );
} 