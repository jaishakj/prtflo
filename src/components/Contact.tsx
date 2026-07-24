export default function Contact() {
  const contacts = [
    {
      title: "EMAIL",
      href: "mailto:jaishak1219@gmail.com",
      text: "jaishak1219@gmail.com",
      color: "#EA4335",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#EA4335" />
          <path
            d="M34 16H14c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm0 4l-10 6-10-6v-2l10 6 10-6v2z"
            fill="white"
          />
        </>
      ),
    },
    {
      title: "PHONE",
      href: "tel:+919345589347",
      text: "+91 93455 89347",
      color: "#34A853",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#34A853" />
          <path
            d="M31 18h-3v-1c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v1h-3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V20c0-1.1-.9-2-2-2zm-7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
            fill="white"
          />
        </>
      ),
    },
    {
      title: "LINKEDIN",
      href: "https://www.linkedin.com/in/jaishakj",
      text: "linkedin.com/in/jaishakj",
      external: true,
      color: "#0A66C2",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#0A66C2" />
          <path
            d="M19 19h-4v13h4V19zM17 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM29 19h-4v6.5c0 1.38-1.12 2.5-2.5 2.5S20 26.88 20 25.5V19h-4v13h4v-1.8c1.19 1.04 2.75 1.8 4.5 1.8 3.59 0 6.5-2.91 6.5-6.5V19h-2z"
            fill="white"
          />
        </>
      ),
    },
    {
      title: "TWITTER",
      href: "https://x.com/jaishak_j",
      text: "x.com/jaishak_j",
      external: true,
      color: "#1DA1F2",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#1DA1F2" />
          <path
            d="M36 16.5c-.9.4-1.9.7-2.9.8 1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1-4.1-.2-7.7-2.2-10.1-5.2-.4.7-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z"
            fill="white"
          />
        </>
      ),
    },
    {
      title: "MASTODON",
      href: "https://mastodon.social/@jaishakj",
      text: "mastodon.social/@jaishakj",
      external: true,
      color: "#6364FF",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#6364FF" />
          <path
            d="M33 24c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 3.54 2.04 6.59 5 8.06v-5.7h-1.5V24h1.5v-1.98c0-1.48.88-2.3 2.23-2.3.65 0 1.32.12 1.32.12v1.45h-.74c-.73 0-.96.45-.96.92V24h1.63l-.26 2.36H22.34v5.7c2.96-1.47 5-4.52 5-8.06z"
            fill="white"
          />
          <circle cx="30" cy="18" r="3" fill="#FFD700" />
          <circle cx="18" cy="18" r="3" fill="#FFD700" />
          <circle cx="30" cy="30" r="3" fill="#FFD700" />
        </>
      ),
    },
    {
      title: "GITHUB",
      href: "https://github.com/jaishakj",
      text: "github.com/jaishakj",
      external: true,
      color: "#181717",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#181717" />
          <path d="M24 14c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49..." fill="white" />
        </>
      ),
    },
    {
      title: "DISCORD",
      href: "https://discord.com/users/923801110752399360",
      text: "923801110752399360",
      external: true,
      color: "#5865F2",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#5865F2" />
          <path d="M32.5 16.5c-1.5-.7-3.1-1.2-4.8-1.5..." fill="white" />
        </>
      ),
    },
    {
      title: "TELEGRAM",
      href: "https://t.me/Jaishakj",
      text: "@Jaishakj",
      external: true,
      color: "#26A5E4",
      icon: (
        <>
          <rect width="48" height="48" rx="12" fill="#26A5E4" />
          <path d="M24 15l-11 4v8c0 6.6 4.5 12.8 11 14..." fill="white" />
        </>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">LET&apos;S CONNECT</h2>
          <div className="title-underline" />
        </div>

        <div className="contact-grid">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="contact-card reveal press"
            >
              <div className="contact-icon" aria-hidden="true">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  {contact.icon}
                </svg>
              </div>

              <h4>{contact.title}</h4>

              <a
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
              >
                {contact.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
