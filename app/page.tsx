import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { Community } from "./components/Community";
import { Achievements } from "./components/Achievements";
import { Unlock } from "./components/Unlock";
import { UnlockFooter } from "./components/UnlockFooter";
import { Customer } from "./components/Customer";
import { CommunityUpdates } from "./components/CommunityUpdates";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <UnlockFooter />
      <Customer />
      <CommunityUpdates />
      <Footer />
    </main>
  );
}
