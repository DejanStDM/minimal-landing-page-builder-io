import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { Community } from "./components/Community";
import { Achievements } from "./components/Achievements";
import { Unlock } from "./components/Unlock";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Community />
      <Achievements />
      <Unlock />
    </main>
  );
}
