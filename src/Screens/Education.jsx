// import React from "react";
// import { motion } from "framer-motion";

// const timeline = [
//   {
//     degree: "Bachelor of Science in Computer Science",
//     institute: "University Name",
//     city: "City, Country",
//     year: "2020 – 2024",
//   },
//   {
//     degree: "Intermediate (Pre-Engineering)",
//     institute: "College Name",
//     city: "City, Country",
//     year: "2018 – 2020",
//   },
// ];

// export default function Education() {
//   return (
//     <section
//       id="education"
//       className="d-flex flex-column align-items-center justify-content-center text-center px-3"
//       style={{
//         minHeight: "100vh",
//         color: "#fff",
//         background: "linear-gradient(135deg, #141E30, #243B55)",
//         padding: "4rem 1rem",
//         overflow: "hidden",
//       }}
//     >
//       {/* Title */}
//       <motion.h1
//         className="fw-bold mb-4 display-3"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           textShadow: "0 0 15px rgba(0,255,255,0.3)",
//         }}
//       >
//         Education
//       </motion.h1>

//       {/* Subtitle */}
//       <motion.p
//         className="lead mb-5"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         style={{
//           maxWidth: "850px",
//           color: "#ffffffcc",
//           lineHeight: "1.8",
//           fontSize: "1.2rem",
//         }}
//       >
//         A strong academic foundation that shaped my technical skills,
//         analytical thinking, and passion for modern software development.
//       </motion.p>

//       {/* Education Timeline */}
//       <div style={{ maxWidth: "850px", width: "100%" }}>
//         {timeline.map((edu, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.3, duration: 0.8 }}
//             style={{
//               background: "rgba(255,255,255,0.08)",
//               borderRadius: "18px",
//               padding: "22px",
//               border: "1px solid rgba(255,255,255,0.2)",
//               boxShadow: "0 0 25px rgba(0,0,0,0.5)",
//               marginBottom: "18px",
//             }}
//           >
//             <h3 style={{ color: "#00BFFF", marginBottom: "8px" }}>
//               {edu.degree}
//             </h3>

//             <p style={{ margin: 0, color: "#ddd", fontSize: "1.05rem" }}>
//               {edu.institute} — {edu.city}
//               <br />
//               <span style={{ color: "#aaa" }}>{edu.year}</span>
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }















import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="d-flex flex-column align-items-center justify-content-center text-center px-3"
      style={{
        minHeight: "100vh",
        color: "#fff",
        background: "linear-gradient(135deg, #141E30, #243B55)",
        padding: "4rem 1rem",
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
          background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 15px rgba(0,255,255,0.3)",
        }}
      >
        Education & Certifications
      </motion.h1>

      {/* Short Intro */}
      <motion.p
        className="lead mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: "850px",
          color: "#ffffffcc",
          lineHeight: "1.8",
          fontSize: "1.2rem",
        }}
      >
        A strong academic journey strengthened with certifications, practical
        learning, and hands-on projects in modern technologies.
      </motion.p>

      {/* Main Education */}
      <div style={{ maxWidth: "900px", width: "100%" }}>

        {/* Bachelor */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={cardStyle}
        >
          <h3 style={titleStyle}>Bachelor of Information Technology</h3>

          <p style={textStyle}>
            Shaheed Benazir Bhutto University, SBA  
            <br />
            <span style={subText}>2021 – 2024</span>
          </p>

          <p style={detailText}>
            <strong>GPA:</strong> 2.75 <br />
            
            <strong>Best Thesis Award</strong> 🎖️ <br />
            <strong>Final Year Project:</strong> AI MCQ’s Test App
          </p>
        </motion.div>

        {/* College */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={cardStyle}
        >
          <h3 style={titleStyle}>Intermediate </h3>

          <p style={textStyle}>
            Govt Technical Education Commercial College, SBA  
            <br />
            <strong>Computer Science</strong>  <br />
            <strong>Grade:</strong> A <br />
            <span style={subText}>2019 – 2020</span>
          </p>
        </motion.div>

        {/* Matric */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={cardStyle}
        >
          <h3 style={titleStyle}>Matriculation</h3>

          <p style={textStyle}>
            Shaheen Vocational Training Institute, SBA  
            <br />
            <strong>Computer Science</strong>  <br />
            <strong>Grade:</strong> B <br />
            <span style={subText}>2017 – 2018</span>
          </p>
        </motion.div>

        {/* Certifications Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            marginTop: "40px",
            color: "#FFD700",
            fontWeight: 700,
            fontSize: "2rem",
          }}
        >
          🎓 Certifications
        </motion.h2>

        {/* Certificates List */}
        {[

        { title: "Diploma in Computer Business Management (DCBM)", place: "ZABTech, Shaheed Benazirabad ", year: "2020 – 2021" },
        { title: "Diploma in Information Technology (DIT)", place: "ZABTech, Shaheed Benazirabad ", year: "2019 – 2020" },
        { title: "Computer in Information Technology (CIT)", place: "ZABTech, Shaheed Benazirabad ", year: "2018 – 2018" },
        
        
        ].map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
            style={cardStyle}
          >
            <h4 style={{ color: "#00FFE0", marginBottom: "5px" }}>
              {cert.title}
            </h4>
            <p style={textStyle}>
              {cert.place}
              <br />
              <span style={subText}>{cert.year}</span>
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

/* ---------- STYLES ---------- */
const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "18px",
  padding: "22px",
  border: "1px solid rgba(255,255,255,0.2)",
  boxShadow: "0 0 25px rgba(0,0,0,0.5)",
  marginBottom: "18px",
};

const titleStyle = {
  color: "#00BFFF",
  marginBottom: "8px",
};

const textStyle = {
  margin: 0,
  color: "#ddd",
  fontSize: "1.1rem",
};

const subText = {
  color: "#aaa",
};

const detailText = {
  marginTop: "10px",
  color: "#fff",
  fontSize: "1.05rem",
};
