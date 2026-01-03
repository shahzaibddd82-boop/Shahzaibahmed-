// // import React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// // import { faRss, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// // const socialLinks = [
// //   { href: "https://www.facebook.com/share/1GLXXnBGMr/", icon: faFacebookF, label: "Facebook" },
// //   { href: "https://x.com/FutureCoreX0", icon: faTwitter, label: "Twitter" },
// //   { href: "https://www.linkedin.com/company/108158124/", icon: faLinkedinIn, label: "LinkedIn" },
// //   { href: "https://rss.com", icon: faRss, label: "RSS" },
// //   { href: "mailto:futurecorex0@gmail.com", icon: faEnvelope, label: "Email" },
// // ];

// // export default function Footer() {
// //   const year = new Date().getFullYear();

// //   return (
// //     <footer className="footer">
// //       <div className="footer-glow top" />
// //       <div className="footer-glow bottom" />

// //       <div className="footer-social">
// //         {socialLinks.map(({ href, icon, label }) => (
// //           <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-btn">
// //             <FontAwesomeIcon icon={icon} />
// //           </a>
// //         ))}
// //       </div>

// //       <div className="footer-divider" />
    
// //       <p className="footer-credit">
// //         Designed & Developed by <span className="footer-credit-accent">Shahzaib Ahmed</span>
// //       </p>
// //     </footer>
// //   );
// // }


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faRss, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const socialLinks = [
//   { href: "https://www.facebook.com/share/1CoFmDDRJy/", icon: faFacebookF, label: "Facebook" },
//   { href: "https://x.com/shahzaibddd82?t=s1cmQUGYR4zk1jCjo5bbQA&s=09", icon: faTwitter, label: "Twitter" },
//   { href: "https://www.linkedin.com/in/shahzaib-ahmed-9363a4179/", icon: faLinkedinIn, label: "LinkedIn" },
//   { href: "mailto:shahzaibddd82@gmail.com", icon: faEnvelope, label: "Email" },
// ];

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="footer-glow top" />
//       <div className="footer-glow bottom" />

//       <div className="footer-social">
//         {socialLinks.map(({ href, icon, label }) => (
//           <a
//             key={label}
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={label}
//             className="social-btn"
//             style={{ fontSize: "1.8rem" }} // Bigger icon size
//           >
//             <FontAwesomeIcon icon={icon} />
//           </a>
//         ))}
//       </div>

//       <div className="footer-divider" />

//       <p className="footer-credit">
//         Designed & Developed by <span className="footer-credit-accent">Shahzaib Ahmed</span> © {year}
//       </p>
//     </footer>
//   );
// }



import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  { href: "https://www.facebook.com/share/1CoFmDDRJy/", icon: faFacebookF, label: "Facebook" },
  { href: "https://x.com/shahzaibddd82?t=s1cmQUGYR4zk1jCjo5bbQA&s=09", icon: faTwitter, label: "Twitter" },
  { href: "https://www.linkedin.com/in/shahzaib-ahmed-9363a4179/", icon: faLinkedinIn, label: "LinkedIn" },
  { href: "mailto:shahzaibddd82@gmail.com", icon: faEnvelope, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        padding: "2rem 1rem",
        textAlign: "center",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glowing social icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1rem" }}>
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              fontSize: "2rem",
              color: "#fff",
              transition: "all 0.3s ease",
              textShadow: "0 0 8px rgba(255,255,255,0.4)",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#00ffff";
              e.target.style.textShadow = "0 0 15px #00ffff, 0 0 25px #00ffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#fff";
              e.target.style.textShadow = "0 0 8px rgba(255,255,255,0.4)";
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>

      <div style={{ height: "1px", width: "60px", background: "#fff3", margin: "0 auto 1rem auto", borderRadius: "2px" }} />

      <p style={{ fontSize: "0.95rem", color: "#fffcc0" }}>
        Designed & Developed by <span style={{ color: "#00ffff", fontWeight: "600" }}>Shahzaib Ahmed</span> © {year}
      </p>

      {/* Optional subtle glow background */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle at center, rgba(0,255,255,0.1), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </footer>
  );
}
