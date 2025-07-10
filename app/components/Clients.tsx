import clientsData from "../../data/clients.json";

export const Clients = () => {
  const { title, description, logos } = clientsData as {
    title: string;
    description: string;
    logos: string[];
  };
  return (
    <section className="clients">
      <div className="sec__container">
        <div className="clients__content">
          <h2 className="headline-2 sec__title">{title}</h2>
          <p className="clients__description">{description}</p>
        </div>
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
