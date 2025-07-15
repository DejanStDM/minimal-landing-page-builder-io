import clientsData from "../../data/clients.json";
import { SectionHeader } from "./SectionHeader";

export const Clients = () => {
  const { title, description, logos } = clientsData as {
    title: string;
    description: string;
    logos: string[];
  };
  return (
    <section className="clients section__spacing-top section__spacing-bottom">
      <div className="sec__container">
        <SectionHeader title={title} subtitle={description} className="clients__header" />
        <div className="clients__logos">
          {logos.map((logo, idx) => (
            <div className="clients__logo" key={idx}>
              <img src={logo} alt="Client logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
