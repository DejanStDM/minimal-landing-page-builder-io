import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7 } from "./ClientLogos";

export const Clients = () => {
  return (
    <section className="clients">
      <div className="clients__container">
        <div className="clients__content">
          <h2 className="clients__title">Our Clients</h2>
          <p className="clients__description">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="clients__logos">
          <div className="clients__logo">
            <Logo1 />
          </div>
          <div className="clients__logo">
            <Logo2 />
          </div>
          <div className="clients__logo">
            <Logo3 />
          </div>
          <div className="clients__logo">
            <Logo4 />
          </div>
          <div className="clients__logo">
            <Logo5 />
          </div>
          <div className="clients__logo">
            <Logo6 />
          </div>
          <div className="clients__logo">
            <Logo7 />
          </div>
        </div>
      </div>
    </section>
  );
};
