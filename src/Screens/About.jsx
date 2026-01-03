// // About.jsx
// import React from "react";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section
//       className="d-flex flex-column align-items-center px-3"
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #141E30, #243B55)",
//         color: "#ffffff",
//         padding: "4rem 1rem",
//       }}
//     >
//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           fontSize: "3rem",
//           fontWeight: 700,
//           background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           marginBottom: "2.5rem",
//           textAlign: "center",
//         }}
//       >
//         About Me
//       </motion.h1>

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.8 }}
//         style={{
//           maxWidth: "1050px",
//           fontSize: "1.15rem",
//           lineHeight: "1.9",
//           color: "#f1f1f1cc",
//         }}
//       >
//         {/* Introduction */}
//         <p>
//           I am a <strong style={{ color: "#00BFFF" }}>versatile Full-Stack Software Engineer</strong> 
//           with a strong background in both mobile and web application development. Over the years, 
//           I have refined my skills in building <strong>robust, scalable, and secure</strong> software 
//           solutions that meet high standards of performance, usability, and reliability. My development 
//           approach blends technical expertise, creativity, and strategic thinking, enabling me to create 
//           software that not only works flawlessly but also drives business growth and customer satisfaction.
//         </p>

//         <p>
//           I have strong command over <strong>Flutter, React, ASP.NET Core, SQL, and Firebase</strong>, 
//           allowing me to work confidently on both front-end and back-end development. This dual expertise 
//           enables me to manage projects end-to-end — from <strong>conceptualization and UI/UX design</strong> 
//           to development, testing, deployment, and maintenance. I specialize in <strong>cross-platform solutions</strong> 
//           that ensure consistency, scalability, and smooth performance across all devices.
//         </p>

//         {/* Work Experience */}
//         <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>Work Experience</h3>

//         <div style={{ marginTop: "1.2rem" }}>
//           <p>
//             <strong style={{ color: "#00FFB3" }}>Full-Stack Developer</strong> — LumenSoft Technologies
//             <br />
//             <span style={{ color: "#ffffffaa" }}>Technologies: ASP.NET Core, React, SQL</span>
//           </p>
//           <p>
//             At LumenSoft Technologies, I played a key role in developing scalable, secure, and business-oriented 
//             web applications. I was responsible for building robust backend systems using ASP.NET Core, 
//             developing RESTful APIs, and managing SQL databases with optimized queries and strong data integrity.
//           </p>
//           <p>
//             On the front end, I developed modern, responsive user interfaces using React, ensuring seamless 
//             experiences across devices. I collaborated closely with designers, backend teams, and stakeholders 
//             to deliver high-quality solutions aligned with business requirements and industry best practices.
//           </p>
//         </div>

//         <div style={{ marginTop: "2rem" }}>
//           <p>
//             <strong style={{ color: "#00FFB3" }}>Flutter Developer</strong> — iCreativeZ Technologies
//             <br />
//             <span style={{ color: "#ffffffaa" }}>Technologies: Flutter, Firebase</span>
//           </p>
//           <p>
//             At iCreativeZ Technologies, I focused on developing cross-platform mobile applications for Android 
//             and iOS. I built responsive and visually appealing interfaces, implemented clean architecture, 
//             and ensured smooth performance across devices.
//           </p>
//           <p>
//             My responsibilities included API integration, Firebase authentication, real-time database usage, 
//             cloud storage, performance optimization, and bug fixing. I collaborated closely with UI/UX designers 
//             and backend developers to deliver stable, customer-focused mobile applications.
//           </p>
//         </div>

//         {/* Key Expertise */}
//         <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>Key Expertise & Capabilities</h3>
//         <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
//           <li>Front-End Development: Flutter & React, responsive & intuitive UIs, reusable components</li>
//           <li>Back-End Development: ASP.NET Core, REST APIs, secure & scalable business logic</li>
//           <li>Database & Cloud Solutions: Firebase, SQL Server, optimized queries & performance tuning</li>
//           <li>Mobile & Web Applications: Cross-platform apps, dynamic & responsive web solutions</li>
//           <li>UI/UX Design: Clean, accessible, user-friendly interfaces</li>
//           <li>Code Quality & Architecture: Clean, maintainable, and modular scalable architectures</li>
//         </ul>

//         {/* Skills & Technologies */}
//         <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>Skills & Technologies</h3>
//         <p>
//           <strong>Programming & Frameworks:</strong> Flutter, React, ASP.NET Core, SQL<br />
//           <strong>Database & Cloud:</strong> Firebase, SQL Server<br />
//           <strong>Application Development:</strong> Mobile Apps, Web Apps, Customer Applications<br />
//           <strong>Design & UX:</strong> UI/UX Design, Responsive Design, Modern Interfaces<br />
//           <strong>Other Expertise:</strong> Clean Architecture, API Development & Integration, Cross-Platform Solutions, Secure & Optimized Code
//         </p>

//         {/* Approach */}
//         <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>My Approach</h3>
//         <p>
//           I believe technology should simplify lives and empower users. My approach is holistic, focusing equally 
//           on user needs, business goals, and technical excellence. I transform complex requirements into innovative, 
//           scalable, and practical solutions.
//         </p>
//         <p>
//           I thrive on challenging projects and continuously enhance my skills by learning and adopting new technologies. 
//           Whether developing a mobile app, web platform, or backend system, I am committed to delivering solutions that 
//           are intuitive, reliable, high-performing, and impactful.
//         </p>
//         <p>
//           I am driven by excellence, continuous improvement, and innovation, ensuring that every project I work on meets 
//           the highest standards of quality, performance, and user satisfaction.
//         </p>

//         {/* Contact Me Button */}
//         <div style={{ marginTop: "3rem", textAlign: "center" }}>
//           <motion.a
//             href="#contact" // Replace with your contact section id or route
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             style={{
//               display: "inline-block",
//               padding: "0.8rem 2rem",
//               fontSize: "1.1rem",
//               fontWeight: 600,
//               color: "#fff",
//               background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
//               borderRadius: "30px",
//               textDecoration: "none",
//               cursor: "pointer",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
//               transition: "all 0.3s ease",
//             }}
//           >
//             Contact Me
//           </motion.a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// About.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <section
      className="d-flex flex-column align-items-center px-3"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141E30, #243B55)",
        color: "#ffffff",
        padding: "4rem 1rem",
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}
      >
        About Me
      </motion.h1>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          maxWidth: "1050px",
          fontSize: "1.15rem",
          lineHeight: "1.9",
          color: "#f1f1f1cc",
        }}
      >
        {/* Introduction */}
        <p>
          I am a <strong style={{ color: "#00BFFF" }}>versatile Full-Stack Software Engineer</strong> 
          with a strong background in both mobile and web application development. Over the years, 
          I have refined my skills in building <strong>robust, scalable, and secure</strong> software 
          solutions that meet high standards of performance, usability, and reliability. My development 
          approach blends technical expertise, creativity, and strategic thinking, enabling me to create 
          software that not only works flawlessly but also drives business growth and customer satisfaction.
        </p>

        <p>
          I have strong command over <strong>Flutter, React, ASP.NET Core, SQL, and Firebase</strong>, 
          allowing me to work confidently on both front-end and back-end development. This dual expertise 
          enables me to manage projects end-to-end — from <strong>conceptualization and UI/UX design</strong> 
          to development, testing, deployment, and maintenance. I specialize in <strong>cross-platform solutions</strong> 
          that ensure consistency, scalability, and smooth performance across all devices.
        </p>

        {/* Work Experience */}
        <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>Work Experience</h3>

        <div style={{ marginTop: "1.2rem" }}>
          <p>
            <strong style={{ color: "#00FFB3" }}>Full-Stack Developer</strong> — LumenSoft Technologies
            <br />
            <span style={{ color: "#ffffffaa" }}>Technologies: ASP.NET Core, React, SQL</span>
          </p>
          <p>
            At LumenSoft Technologies, I played a key role in developing scalable, secure, and business-oriented 
            web applications. I was responsible for building robust backend systems using ASP.NET Core, 
            developing RESTful APIs, and managing SQL databases with optimized queries and strong data integrity.
          </p>
          <p>
            On the front end, I developed modern, responsive user interfaces using React, ensuring seamless 
            experiences across devices. I collaborated closely with designers, backend teams, and stakeholders 
            to deliver high-quality solutions aligned with business requirements and industry best practices.
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <p>
            <strong style={{ color: "#00FFB3" }}>Flutter Developer</strong> — iCreativeZ Technologies
            <br />
            <span style={{ color: "#ffffffaa" }}>Technologies: Flutter, Firebase</span>
          </p>
          <p>
            At iCreativeZ Technologies, I focused on developing cross-platform mobile applications for Android 
            and iOS. I built responsive and visually appealing interfaces, implemented clean architecture, 
            and ensured smooth performance across devices.
          </p>
          <p>
            My responsibilities included API integration, Firebase authentication, real-time database usage, 
            cloud storage, performance optimization, and bug fixing. I collaborated closely with UI/UX designers 
            and backend developers to deliver stable, customer-focused mobile applications.
          </p>
        </div>

        {/* Key Expertise */}
        <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>Key Expertise & Capabilities</h3>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
          <li>Front-End Development: Flutter & React, responsive & intuitive UIs, reusable components</li>
          <li>Back-End Development: ASP.NET Core, REST APIs, secure & scalable business logic</li>
          <li>Database & Cloud Solutions: Firebase, SQL Server, optimized queries & performance tuning</li>
          <li>Mobile & Web Applications: Cross-platform apps, dynamic & responsive web solutions</li>
          <li>UI/UX Design: Clean, accessible, user-friendly interfaces</li>
          <li>Code Quality & Architecture: Clean, maintainable, and modular scalable architectures</li>
        </ul>

        {/* Skills & Technologies */}
        <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>Skills & Technologies</h3>
        <p>
          <strong>Programming & Frameworks:</strong> Flutter, React, ASP.NET Core, SQL<br />
          <strong>Database & Cloud:</strong> Firebase, SQL Server<br />
          <strong>Application Development:</strong> Mobile Apps, Web Apps, Customer Applications<br />
          <strong>Design & UX:</strong> UI/UX Design, Responsive Design, Modern Interfaces<br />
          <strong>Other Expertise:</strong> Clean Architecture, API Development & Integration, Cross-Platform Solutions, Secure & Optimized Code
        </p>

        {/* Approach */}
        <h3 style={{ color: "#FFD700", marginTop: "2.8rem" }}>My Approach</h3>
        <p>
          I believe technology should simplify lives and empower users. My approach is holistic, focusing equally 
          on user needs, business goals, and technical excellence. I transform complex requirements into innovative, 
          scalable, and practical solutions.
        </p>
        <p>
          I thrive on challenging projects and continuously enhance my skills by learning and adopting new technologies. 
          Whether developing a mobile app, web platform, or backend system, I am committed to delivering solutions that 
          are intuitive, reliable, high-performing, and impactful.
        </p>
        <p>
          I am driven by excellence, continuous improvement, and innovation, ensuring that every project I work on meets 
          the highest standards of quality, performance, and user satisfaction.
        </p>

        {/* Contact Me Button */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          {!showContactForm && (
            <motion.button
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.8rem 2rem",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#fff",
                background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
              }}
            >
              Contact Me
            </motion.button>
          )}

          {/* Contact Form */}
          {showContactForm && (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "400px",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
              <input
                type="number"
                placeholder="Your Phone Number"
                style={{
                  padding: "0.8rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  fontSize: "1rem",
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: "0.8rem",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#fff",
                  background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
                  borderRadius: "30px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
