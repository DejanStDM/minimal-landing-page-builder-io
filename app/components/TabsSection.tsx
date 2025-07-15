"use client";

import { Tabs } from "./Tabs";
import { SectionHeader } from "./SectionHeader";
import tabsData from "../../data/tabs.json";

const tabItems = tabsData.map((tab) => ({
  ...tab,
  content: <div>{tab.content}</div>,
}));

export function TabsSection() {
  return (
    <section className="tabs-section">
      <div className="sec__container">
        <SectionHeader title="Tabs Example" subtitle="Switch between different content panels using tabs." />
        <Tabs items={tabItems} />
      </div>
    </section>
  );
} 