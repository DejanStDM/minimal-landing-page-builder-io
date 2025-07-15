import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { Community } from "./components/Community";
import { Achievements } from "./components/Achievements";
import { Unlock } from "./components/Unlock";
import { UnlockFooter } from "./components/UnlockFooter";
import { Customer } from "./components/Customer";
import { CommunityUpdates } from "./components/CommunityUpdates";
import { Footer } from "./components/Footer";
import { TabsSection } from "./components/TabsSection";
import { FAQSection } from "./components/FAQSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Community />
      <TabsSection />
      <FAQSection />
      <Unlock />
      <Achievements />
      <UnlockFooter />
      <Customer />
      <CommunityUpdates />
      <Footer />
    </main>
  );
}
