import React from "react";
import footerData from "../../data/footer.json";

export function Footer({ className = "" }: { className?: string }) {
  const { callToAction, companyInfo, socialLinks, links } = footerData as {
    callToAction: {
      title: string;
      buttonText: string;
    };
    companyInfo: {
      logo: string;
      copyright: string;
      allRightsReserved: string;
    };
    socialLinks: Array<{
      name: string;
      icon: string;
      url: string;
    }>;
    links: {
      company: {
        title: string;
        items: string[];
      };
      support: {
        title: string;
        items: string[];
      };
      stayUpToDate: {
        title: string;
        placeholder: string;
      };
    };
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "instagram":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2.88C20.275 2.88 20.775 2.9 22.46 2.975C24.025 3.045 24.875 3.275 25.425 3.46C26.175 3.725 26.725 4.045 27.3 4.62C27.875 5.195 28.195 5.745 28.46 6.495C28.645 7.045 28.875 7.895 28.945 9.46C29.02 11.145 29.04 11.645 29.04 15.92C29.04 20.195 29.02 20.695 28.945 22.38C28.875 23.945 28.645 24.795 28.46 25.345C28.195 26.095 27.875 26.645 27.3 27.22C26.725 27.795 26.175 28.115 25.425 28.38C24.875 28.565 24.025 28.795 22.46 28.865C20.775 28.94 20.275 28.96 16 28.96C11.725 28.96 11.225 28.94 9.54 28.865C7.975 28.795 7.125 28.565 6.575 28.38C5.825 28.115 5.275 27.795 4.7 27.22C4.125 26.645 3.805 26.095 3.54 25.345C3.355 24.795 3.125 23.945 3.055 22.38C2.98 20.695 2.96 20.195 2.96 15.92C2.96 11.645 2.98 11.145 3.055 9.46C3.125 7.895 3.355 7.045 3.54 6.495C3.805 5.745 4.125 5.195 4.7 4.62C5.275 4.045 5.825 3.725 6.575 3.46C7.125 3.275 7.975 3.045 9.54 2.975C11.225 2.9 11.725 2.88 16 2.88ZM16 0C11.66 0 11.11 0.02 9.405 0.096C7.7 0.172 6.54 0.444 5.52 0.84C4.46 1.248 3.565 1.796 2.685 2.685C1.796 3.565 1.248 4.46 0.84 5.52C0.444 6.54 0.172 7.7 0.096 9.405C0.02 11.11 0 11.66 0 16C0 20.34 0.02 20.89 0.096 22.595C0.172 24.3 0.444 25.46 0.84 26.48C1.248 27.54 1.796 28.435 2.685 29.315C3.565 30.204 4.46 30.752 5.52 31.16C6.54 31.556 7.7 31.828 9.405 31.904C11.11 31.98 11.66 32 16 32C20.34 32 20.89 31.98 22.595 31.904C24.3 31.828 25.46 31.556 26.48 31.16C27.54 30.752 28.435 30.204 29.315 29.315C30.204 28.435 30.752 27.54 31.16 26.48C31.556 25.46 31.828 24.3 31.904 22.595C31.98 20.89 32 20.34 32 16C32 11.66 31.98 11.11 31.904 9.405C31.828 7.7 31.556 6.54 31.16 5.52C30.752 4.46 30.204 3.565 29.315 2.685C28.435 1.796 27.54 1.248 26.48 0.84C25.46 0.444 24.3 0.172 22.595 0.096C20.89 0.02 20.34 0 16 0Z"
              fill="white"
            />
            <path
              d="M16 7.78C11.465 7.78 7.78 11.465 7.78 16C7.78 20.535 11.465 24.22 16 24.22C20.535 24.22 24.22 20.535 24.22 16C24.22 11.465 20.535 7.78 16 7.78ZM16 21.333C13.04 21.333 10.667 18.96 10.667 16C10.667 13.04 13.04 10.667 16 10.667C18.96 10.667 21.333 13.04 21.333 16C21.333 18.96 18.96 21.333 16 21.333ZM26.42 7.458C26.42 8.518 25.578 9.36 24.518 9.36C23.458 9.36 22.616 8.518 22.616 7.458C22.616 6.398 23.458 5.556 24.518 5.556C25.578 5.556 26.42 6.398 26.42 7.458Z"
              fill="white"
            />
          </svg>
        );
      case "dribbble":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM26.1102 7.89016C28.1517 10.4164 29.3333 13.5733 29.3333 17C28.7179 16.8718 22.8205 15.641 16.8718 16.4615C16.7436 16.1794 16.641 15.8974 16.5128 15.6154C16.2564 14.9744 15.9744 14.3333 15.6923 13.7179C22.4615 10.7692 25.8462 8.48718 26.1102 7.89016ZM16 2.66667C19.641 2.66667 22.9231 3.94872 25.4486 6.11282C25.2308 6.66667 22.1026 8.84615 15.5897 11.5641C12.8205 6.35897 9.79487 2.15385 9.28205 1.53846C11.3846 2.25641 13.6154 2.66667 16 2.66667ZM7.35897 2.48718C7.84615 3.07692 10.7949 7.30769 13.641 12.4103C6.30769 14.4615 0.102564 14.4359 0.641026 14.4359C1.89744 9.71795 4.28205 5.66667 7.35897 2.48718ZM2.66667 16C2.66667 15.8718 2.66667 15.7436 2.66667 15.6154C3.17949 15.641 10.5128 15.7179 18.3077 13.3333C18.6154 13.8974 18.8974 14.4872 19.1795 15.0769C19.0256 15.1282 18.8718 15.1795 18.7179 15.2308C10.6923 17.8718 6.30769 24.9487 5.99487 25.4615C3.79487 22.9103 2.66667 19.5897 2.66667 16ZM16 29.3333C12.7692 29.3333 9.82051 28.2564 7.48718 26.4615C7.74359 25.9744 11.3077 20.1026 20.1026 16.9744C20.1282 16.9487 20.1538 16.9487 20.1795 16.9231C22.3077 22.6154 23.1795 27.4615 23.4359 28.9487C21.7179 29.0256 18.9231 29.3333 16 29.3333ZM25.641 27.6923C25.4615 26.5641 24.6667 22.0513 22.6923 16.4872C28.3333 15.5385 29.1282 17.8205 29.1795 18.2051C28.4615 22.3333 27.3846 25.2821 25.641 27.6923Z"
              fill="white"
            />
          </svg>
        );
      case "twitter":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32 6.076C30.832 6.6 29.568 6.948 28.232 7.12C29.6 6.308 30.656 5.016 31.152 3.456C29.888 4.212 28.48 4.748 26.976 5.024C25.792 3.744 24.08 2.96 22.192 2.96C18.608 2.96 15.712 5.856 15.712 9.44C15.712 9.952 15.776 10.448 15.888 10.924C10.384 10.668 5.512 8.108 2.248 4.16C1.688 5.164 1.368 6.308 1.368 7.532C1.368 9.856 2.548 11.896 4.328 13.088C3.232 13.056 2.208 12.764 1.312 12.276C1.312 12.3 1.312 12.328 1.312 12.356C1.312 15.516 3.552 18.124 6.512 18.724C5.968 18.872 5.392 18.952 4.8 18.952C4.384 18.952 3.976 18.912 3.584 18.836C4.408 21.396 6.8 23.272 9.648 23.324C7.424 25.068 4.656 26.108 1.632 26.108C1.104 26.108 0.584 26.076 0.072 26.016C2.952 27.852 6.456 28.92 10.224 28.92C22.176 28.92 28.736 19.056 28.736 10.204C28.736 9.924 28.728 9.648 28.716 9.376C30 8.456 31.152 7.332 32 6.076Z"
              fill="white"
            />
          </svg>
        );
      case "youtube":
        return (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.327 8.273C31.327 8.273 30.996 6.058 29.993 5.046C28.66 3.666 27.178 3.658 26.493 3.578C22.168 3.256 16.011 3.256 16.011 3.256H15.989C15.989 3.256 9.832 3.256 5.507 3.578C4.822 3.658 3.34 3.666 2.007 5.046C1.004 6.058 0.678 8.273 0.678 8.273C0.678 8.273 0.355 10.858 0.355 13.444V15.802C0.355 18.388 0.673 20.973 0.673 20.973C0.673 20.973 1.004 23.188 2.002 24.2C3.335 25.58 5.077 25.525 5.843 25.668C8.355 25.933 15.998 26.001 15.998 26.001C15.998 26.001 22.163 25.99 26.488 25.673C27.173 25.593 28.655 25.585 29.988 24.205C30.991 23.193 31.322 20.978 31.322 20.978C31.322 20.978 31.645 18.393 31.645 15.807V13.449C31.645 10.863 31.327 8.273 31.327 8.273ZM12.809 19.988V9.578L21.464 14.815L12.809 19.988Z"
              fill="white"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className={`footer ${className}`}>
      {/* Call to Action Section */}
      <div className="footer__cta">
        <div className="sec__container">
          <div className="footer__cta-content">
            <h2 className="footer__cta-title">{callToAction.title}</h2>
            <button className="footer__cta-button">
              <span>{callToAction.buttonText}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2502 11.0002L13.7199 8.53051C14.0129 8.23761 14.0129 7.76272 13.7199 7.46982L11.2502 5.00009M13.5003 8.00017L2.5 8.00017"
                  stroke="white"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="sec__container">
          <div className="footer__content">
            {/* Company Info */}
            <div className="footer__company">
              <div className="footer__logo">
                <svg
                  width="35"
                  height="24"
                  viewBox="0 0 35 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7863 13.134L13.3954 22.3669L8.00448 13.134H18.7863ZM20.2305 12.3088H6.55444L13.3954 24L20.2305 12.3088Z"
                    fill="white"
                  />
                  <path
                    d="M28.1591 1.65038L33.55 10.8833H22.7681L28.1591 1.65038ZM28.1591 0L21.3181 11.6912H35L28.1591 0Z"
                    fill="white"
                  />
                  <path
                    d="M0 0L5.7359 10.3409L12.0038 0.259661L0 0Z"
                    fill="#4CAF4F"
                  />
                  <path
                    d="M13.3955 0.905882L19.4121 11.189H7.36728L13.3955 0.905882Z"
                    fill="#4CAF4F"
                  />
                  <path
                    d="M20.9615 13.434L26.9839 24H14.6526L20.7744 13.434H20.9615Z"
                    fill="#4CAF4F"
                  />
                  <path
                    d="M22.2653 12.7935L28.1591 23.1978L34.1347 12.7935H22.2653Z"
                    fill="#4CAF4F"
                  />
                </svg>
                <span className="footer__logo-text">Nexcent</span>
              </div>
              <div className="footer__copyright">
                <p>{companyInfo.copyright}</p>
                <p>{companyInfo.allRightsReserved}</p>
              </div>
              <div className="footer__social">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="footer__social-link"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="footer__links">
              {/* Company Links */}
              <div className="footer__column">
                <h3 className="footer__column-title">{links.company.title}</h3>
                <ul className="footer__column-list">
                  {links.company.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="footer__link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div className="footer__column">
                <h3 className="footer__column-title">{links.support.title}</h3>
                <ul className="footer__column-list">
                  {links.support.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="footer__link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Email Subscription */}
              <div className="footer__column">
                <h3 className="footer__column-title">
                  {links.stayUpToDate.title}
                </h3>
                <div className="footer__email-input">
                  <input
                    type="email"
                    placeholder={links.stayUpToDate.placeholder}
                    className="footer__input"
                  />
                  <button className="footer__send-btn" aria-label="Send email">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L8.5 9.5M17 1L11.5 17L8.5 9.5M17 1L1 6.5L8.5 9.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
