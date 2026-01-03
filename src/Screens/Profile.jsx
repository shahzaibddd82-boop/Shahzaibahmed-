

// import React from "react";
// import { motion } from "framer-motion";

// const Profile = ({ setActiveScreen }) => {
//   return (
//     <section
//       id="profile"
//       className="d-flex flex-column align-items-center justify-content-center text-center px-3"
//       style={{
//         minHeight: "calc(100vh - 100px)", // adjusted for navbar
//         color: "white",
//         overflow: "hidden", // stop scroll glitch
//       }}
//     >
//       {/* Title */}
//       <motion.h1
//         className="fw-bold mb-3 display-4"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           background:
//             "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           textShadow: "0 0 20px rgba(255,255,255,0.2)",
//         }}
//       >
//          <span style={{ color: "#b83333ff" }}>INTRODUCTION</span>
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//   className="lead mb-4"
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.3, duration: 0.8 }}
//   style={{
//     maxWidth: "800px",
//     color: "rgba(211, 123, 123, 0.9)",
//     lineHeight: "1.8",
//     fontSize: "1.35rem",
//     fontWeight: 400,
//   }}
// >
//   I am a <strong>Dynamic Mobile & Full-Stack Software Engineer</strong> with extensive experience in designing, developing, and delivering high-quality applications across both mobile and web platforms. My core expertise spans <strong>Flutter</strong>, <strong>Firebase</strong>, <strong>ASP.NET Core</strong>, <strong>React</strong>, and <strong>SQL</strong>, enabling me to build scalable, secure, and efficient solutions that solve complex problems and enhance user experiences.
//   <br /><br />
//   I thrive in environments where innovation, technical precision, and user-centric design intersect. By combining front-end and back-end expertise, I create applications that are not only visually appealing but also highly functional, reliable, and optimized for performance. My work emphasizes clean architecture, maintainable code, and seamless API integration, ensuring every project is robust, scalable, and future-proof.
//   <br /><br />
//   Beyond coding, I am passionate about UI/UX design, cross-platform development, and delivering customer-focused applications. I focus on understanding the needs of users and businesses alike, translating those insights into applications that deliver tangible value.
// </motion.p>


//       {/* Expertise */}
//       <motion.div
//         className="mt-5"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//         style={{ textAlign: "left", maxWidth: "800px" }}
//       >
//         <h3
//           style={{
//             color: "#00BFFF",
//             fontSize: "2rem",
//             fontWeight: "700",
//             marginBottom: "1.2rem",
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           ⚙️ Our Expertise
//         </h3>

//         <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
//           {[
//             "Web Development (React, ASP.NET, SQL, Node.js)",
//             "Mobile App Development (Flutter, Android, iOS)",
//             "UI/UX Design & Branding",
//             "E-Commerce & Custom Business Solutions",
//             "Cloud Integration & Database Management",
//           ].map((item, index) => (
//             <motion.li
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
//               style={{
//                 fontSize: "1.3rem",
//                 color: "rgba(173, 41, 41, 0.9)",
//                 marginBottom: "0.4rem",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//               }}
//             >
//               <span style={{ color: "#00FFB3" }}>•</span> {item}
//             </motion.li>
//           ))}
//         </ul>
//       </motion.div>

//       {/* Button */}
//       <motion.button
//         className="fw-semibold px-5 py-2 rounded-pill border-0 mt-5"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         style={{
//           background:
//             "linear-gradient(90deg, #FFD700, #FF8C00, #FF69B4, #00C6FF)",
//           color: "#141E30",
//           boxShadow: "0 0 25px rgba(255,215,0,0.4)",
//           fontSize: "1.1rem",
//           transition: "transform 0.3s, box-shadow 0.3s",
//         }}
//         onMouseEnter={(e) => {
//           e.target.style.transform = "scale(1.05)";
//           e.target.style.boxShadow = "0 0 35px rgba(255,215,0,0.7)";
//         }}
//         onMouseLeave={(e) => {
//           e.target.style.transform = "scale(1)";
//           e.target.style.boxShadow = "0 0 25px rgba(255,215,0,0.4)";
//         }}
//         onClick={() => setActiveScreen("Contact")} // ✅ Navigate to Contact
//       >
//         Get Started
//       </motion.button>
//     </section>
//   );
// };

// export default Profile;


import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section
      id="profile"
      className="d-flex flex-column align-items-center justify-content-center text-center px-3"
      style={{
        minHeight: "100vh",
        color: "#fff",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // modern dark gradient
        padding: "3rem 1rem",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <motion.h1
        className="fw-bold mb-4 display-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "linear-gradient(90deg, #00FFE0, #00BFFF, #FF69B4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 15px rgba(0,255,255,0.3)",
        }}
      >
        INTRODUCTION
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="lead mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: "800px",
          color: "#f0f0f0cc",
          lineHeight: "1.8",
          fontSize: "1.35rem",
          fontWeight: 400,
        }}
      >
        I am a <strong style={{ color: "#00BFFF" }}>Dynamic Mobile & Full-Stack Software Engineer</strong> with extensive experience in designing, developing, and delivering high-quality applications across both mobile and web platforms. My core expertise spans <strong style={{ color: "#FF69B4" }}>Flutter</strong>, <strong style={{ color: "#FFB347" }}>Firebase</strong>, <strong style={{ color: "#00FFB3" }}>ASP.NET Core</strong>, <strong style={{ color: "#FFD700" }}>React</strong>, and <strong style={{ color: "#FF4500" }}>SQL</strong>, enabling me to build scalable, secure, and efficient solutions that solve complex problems and enhance user experiences.
        <br /><br />
        I thrive in environments where innovation, technical precision, and user-centric design intersect. By combining front-end and back-end expertise, I create applications that are not only visually appealing but also highly functional, reliable, and optimized for performance. My work emphasizes clean architecture, maintainable code, and seamless API integration, ensuring every project is robust, scalable, and future-proof.
        <br /><br />
        Beyond coding, I am passionate about UI/UX design, cross-platform development, and delivering customer-focused applications. I focus on understanding the needs of users and businesses alike, translating those insights into applications that deliver tangible value.
      </motion.p>

      {/* Expertise */}
      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ textAlign: "left", maxWidth: "800px" }}
      >
        <h3
          style={{
            color: "#00FFE0",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          ⚙️ Expertise
        </h3>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: "2" }}>
          {[
            "Web Development (React, ASP.NET, SQL, Node.js)",
            "Mobile App Development (Flutter, Android, iOS)",
            "UI/UX Design & Branding",
            "E-Commerce & Custom Business Solutions",
            "Cloud Integration & Database Management",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              style={{
                fontSize: "1.3rem",
                color: "#fff",
                marginBottom: "0.6rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ color: "#00BFFF", fontSize: "1.3rem" }}>•</span> {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Profile;
