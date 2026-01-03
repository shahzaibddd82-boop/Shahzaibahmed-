// // Projects.jsx
// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { motion } from "framer-motion";
// import {
//   FaShoppingCart,
//   FaMobileAlt,
//   FaTools,
//   FaGlobe,
//   FaWallet,
// } from "react-icons/fa";

// const projects = [
//   {
//     icon: <FaShoppingCart size={40} />,
//     title: "E-Commerce Web Platform",
//     description:
//       "A scalable e-commerce platform built using React, ASP.NET Core, and SQL with secure authentication, product management, cart, checkout system, and responsive UI.",
//     tech: "React • ASP.NET Core • SQL Server",
//   },
//   {
//     icon: <FaMobileAlt size={40} />,
//     title: "Food Ordering Mobile App",
//     description:
//       "A cross-platform fast food ordering mobile app built using Flutter & Firebase featuring cart system, authentication, real-time database, and smooth UI performance.",
//     tech: "Flutter • Firebase • Dart",
//   },
//   {
//     icon: <FaWallet size={40} />,
//     title: "Expense Splitter App",
//     description:
//       "A smart expense tracking and bill splitting app supporting equal and custom split calculations with clean UI, state management, and real-time updates.",
//     tech: "Flutter • Bloc/Cubit",
//   },
//   {
//     icon: <FaTools size={40} />,
//     title: "Media & File Converter App",
//     description:
//       "Offline file converter app supporting image conversion, video to audio extraction, and document conversion with performance-optimized architecture.",
//     tech: "Flutter • FFmpeg • Image Package",
//   },
//   {
//     icon: <FaGlobe size={40} />,
//     title: "Personal Portfolio Website",
//     description:
//       "Fully responsive, animated portfolio website showcasing professional profile, services, projects, and contact with modern UI and smooth animations.",
//     tech: "React • Framer Motion • Bootstrap",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #141E30, #243B55)",
//         padding: "4rem 1rem",
//         color: "#fff",
//         overflow: "hidden",
//       }}
//     >
//       <Container>
//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-3"
//           style={{
//             fontWeight: "700",
//             background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           My Projects
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.7 }}
//           className="text-center mb-5"
//           style={{ fontSize: "1.1rem", maxWidth: "850px", margin: "0 auto", color: "#f0f0f0cc" }}
//         >
//           A collection of innovative, scalable, and high-performance applications
//           built with modern technologies, strong architecture, and clean UI/UX
//           design principles.
//         </motion.p>

//         {/* Project Cards */}
//         <Row className="g-4">
//           {projects.map((project, index) => (
//             <Col md={6} lg={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <Card
//                   className="h-100 text-center p-4 border-0 project-card"
//                   style={{
//                     background: "rgba(255,255,255,0.06)",
//                     backdropFilter: "blur(12px)",
//                     color: "#fff",
//                   }}
//                 >
//                   <div style={{ color: "#00BFFF", marginBottom: "1rem" }}>
//                     {project.icon}
//                   </div>

//                   <Card.Title
//                     style={{
//                       fontWeight: "600",
//                       background: "linear-gradient(90deg, #FF69B4, #FFD700)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     {project.title}
//                   </Card.Title>

//                   <Card.Text style={{ color: "#f0f0f0cc", marginTop: "0.8rem" }}>
//                     {project.description}
//                   </Card.Text>

//                   <p style={{ color: "#00FFB3", fontSize: "0.95rem", marginTop: "0.5rem" }}>
//                     {project.tech}
//                   </p>
//                 </Card>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>

//         {/* Hover Effect */}
//         <style>
//           {`
//           .project-card {
//             transition: all 0.3s ease;
//           }
//           .project-card:hover {
//             transform: translateY(-10px);
//             box-shadow: 0 15px 35px rgba(0,0,0,0.6);
//           }
//         `}
//         </style>
//       </Container>
//     </section>
//   );
// }




























import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// All Projects
const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Web Store",
    description: `
Salesperson Management:
A comprehensive interface to add, edit, and delete salesperson records using React, ASP.NET & SQL Server.

Product Management:
Manage products, pricing, discounts, and search functionality efficiently.

Point of Sale (POS):
Fast sales transactions with real-time recording and product lookup.
`,
    tech: "React • ASP.NET • SQL Server",
    images: ["/W.jpeg"],
  },
  {
    id: "converter",
    title: "App Converter",
    description: `
All-in-one media & file conversion platform: image, audio, video, document.

Features:
• Image Conversion (JPG, PNG, GIF)
• Audio Conversion (MP3, WAV, AAC)
• Video Conversion (MP4, AVI, MOV)
• Document Conversion (DOCX, PDF)
• Fast & reliable
`,
    tech: "Flutter • FFmpeg • Dart",
    images: ["/C1.jpg"],
  },
  {
    id: "drawingpad",
    title: "Drawing Pad App",
    description: `
A versatile and user-friendly drawing application for beginners and professionals.

Features:
• Multiple brushes, pens & pencils
• Shape drawing + animated guides
• Advanced color palette
• Smooth performance optimization
• Export & share drawings easily
`,
    tech: "Flutter • Canvas • Dart",
    images: ["/A2.PNG"],
  },
  {
    id: "expenses",
    title: "Expense Manager & Splitter",
    description: `
Add Expenses Screen:
Streamlined UI for adding expenses like food, transport, rent, and shopping.

Add Expense Popup:
Quick popup to add title + amount easily.

Expense Split Configuration:
Split total expenses among users with Equal or Custom split options with smooth UI experience.
`,
    tech: "Flutter • Bloc/Cubit • Dart",
    images: ["/E1.jpg"],
  },
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  const project = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background: "linear-gradient(135deg, #141E30, #243B55)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2.5rem",
          background: "linear-gradient(90deg,#00BFFF,#FFD700)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Projects
      </h1>

      {/* Project Grid */}
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            onClick={() => setSelectedProject(proj.id)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              background: "rgba(255,255,255,0.05)",
              transition: "all 0.3s ease",
            }}
          >
            {/* Project Image */}
            {proj.images && proj.images.length > 0 ? (
              <img
                src={proj.images[0]}
                alt={proj.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  background:
                    "linear-gradient(135deg, rgba(0,191,255,0.3), rgba(255,215,0,0.3))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.2rem",
                }}
              >
                No Preview
              </div>
            )}

            {/* Project Name & Tech */}
            <div style={{ padding: "10px 15px" }}>
              <h3
                style={{
                  color: "#00BFFF",
                  margin: "0 0 5px 0",
                  fontSize: "1.2rem",
                }}
              >
                {proj.title}
              </h3>
              <p style={{ color: "#ddd", fontSize: "0.9rem", margin: 0 }}>
                {proj.tech}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              zIndex: 9999,
              color: "#fff",
              overflowY: "auto",
              textAlign: "center",
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                fontSize: "1.5rem",
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ← Back
            </button>

            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                background: "linear-gradient(90deg,#00BFFF,#FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {project.title}
            </h2>

            <pre
              style={{
                maxWidth: "800px",
                whiteSpace: "pre-wrap",
                fontFamily: "inherit",
                color: "#ddd",
                marginBottom: "1rem",
              }}
            >
              {project.description}
            </pre>

            <p
              style={{
                color: "#FFD700",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {project.tech}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
