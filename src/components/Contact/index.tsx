import { socialLinks } from "../../data/social";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">LET'S CONNECT</h2>
          <div className="title-underline" />
        </div>

        <div className="connect-circles">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener" : undefined}
                className="circle-link"
                data-label={link.label}
                aria-label={link.label}
              >
                <Icon size={26} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
