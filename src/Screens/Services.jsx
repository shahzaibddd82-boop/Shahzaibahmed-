// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { FaLaptopCode, FaMobileAlt, FaPalette, FaServer, FaTools } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const servicesData = [
//   {
//     icon: <FaLaptopCode size={40} color="#007bff" />,
//     title: "Web Development",
//     description:
//       "I build high-performance, responsive, and scalable web applications using React, ASP.NET Core, and SQL. From clean architectures to robust server-side logic, every application delivers seamless experiences while supporting business goals.",
//   },
//   {
//     icon: <FaMobileAlt size={40} color="#28a745" />,
//     title: "Mobile App Development",
//     description:
//       "I create cross-platform mobile applications using Flutter and Firebase that run smoothly on Android and iOS. My focus is on user-centric design, optimal performance, and intuitive interfaces for engaging mobile experiences.",
//   },
//   {
//     icon: <FaPalette size={40} color="#ffc107" />,
//     title: "UI/UX Design",
//     description:
//       "I design modern, visually appealing, and highly intuitive interfaces that maximize usability and engagement. My designs ensure easy navigation, consistent layout, and accessibility for all users.",
//   },
//   {
//     icon: <FaServer size={40} color="#17a2b8" />,
//     title: "API Development & Integration",
//     description:
//       "I develop robust, secure, and scalable APIs that connect systems seamlessly. Efficient integration ensures smooth data flow, reliable backend communication, and enhanced functionality for web and mobile applications.",
//   },
//   {
//     icon: <FaTools size={40} color="#6f42c1" />,
//     title: "Custom Solutions & Optimization",
//     description:
//       "Beyond standard development, I provide tailored solutions including performance optimization, security enhancements, and feature customization to make every application future-ready and scalable.",
//   },
// ];

// export default function Services() {
//   return (
//     <Container className="py-5">
//       <h1 className="text-center mb-3" style={{ fontWeight: "700" }}>
//         My Services
//       </h1>
//       <p className="text-center mb-5 text-muted" style={{ fontSize: "1.1rem" }}>
//         Delivering innovative, scalable, and user-centered solutions across web and mobile platforms.  
//         Each service focuses on performance, usability, and measurable business impact.
//       </p>

//       <Row className="g-4">
//         {servicesData.map((service, index) => (
//           <Col md={6} lg={4} key={index}>
//             <Card className="h-100 text-center p-4 shadow-sm border-0 service-card">
//               <div className="mb-3">{service.icon}</div>
//               <Card.Title className="mb-3" style={{ fontWeight: "600" }}>
//                 {service.title}
//               </Card.Title>
//               <Card.Text>{service.description}</Card.Text>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <style>
//         {`
//           .service-card:hover {
//             transform: translateY(-10px);
//             transition: all 0.3s ease;
//             box-shadow: 0 10px 20px rgba(0,0,0,0.15);
//           }
//         `}
//       </style>
//     </Container>
//   );
// }




// Services.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPalette, 
  FaServer, 
  FaTools, 
  FaLifeRing 
} from "react-icons/fa";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const servicesData = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Web Development",
    description:
      "I build high-performance, responsive, and scalable web applications using React, ASP.NET Core, and SQL, ensuring powerful functionality with smooth user experience.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using Flutter & Firebase, designed with smooth UI, clean performance, and exceptional reliability.",
  },
  {
    icon: <FaPalette size={40} />,
    title: "UI/UX Design",
    description:
      "Modern, visually stunning interfaces focusing on usability, clarity, and user engagement to deliver meaningful digital experiences.",
  },
  {
    icon: <FaServer size={40} />,
    title: "API Development & Integration",
    description:
      "Secure, scalable REST APIs and seamless integrations ensuring smooth data flow and reliable communication between systems.",
  },
  {
    icon: <FaTools size={40} />,
    title: "Custom Solutions & Optimization",
    description:
      "Tailored solutions, performance tuning, security enhancements, and scalability improvements to future-proof your applications.",
  },
  {
    icon: <FaLifeRing size={40} />,
    title: "Maintenance & Support",
    description:
      "Dedicated ongoing support, monitoring, and enhancements to keep your systems secure, updated, and performing at their best.",
  },
];

export default function Services() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141E30, #243B55)",
        padding: "4rem 1rem",
      }}
    >
      <Container>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-3"
          style={{
            fontWeight: "700",
            background: "linear-gradient(90deg, #00BFFF, #FF69B4, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          My Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mb-5"
          style={{
            fontSize: "1.1rem",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#ffffffcc",
          }}
        >
          Delivering innovative, scalable, and user-centered solutions across web and mobile platforms.
          Every service focuses on performance, usability, and real business impact.
        </motion.p>

        {/* Service Cards */}
        <Row className="g-4">
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card
                  className="h-100 text-center p-4 shadow-lg border-0 service-card"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                    borderRadius: "18px",
                  }}
                >
                  <div
                    className="mb-3"
                    style={{ fontSize: "2.5rem", color: "#00BFFF" }}
                  >
                    {service.icon}
                  </div>

                  <Card.Title
                    className="mb-3"
                    style={{
                      fontWeight: "700",
                      fontSize: "1.25rem",
                      background: "linear-gradient(90deg, #FF69B4, #FFD700)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {service.title}
                  </Card.Title>

                  <Card.Text style={{ color: "#f0f0f0cc" }}>
                    {service.description}
                  </Card.Text>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Hover Effects */}
        <style>
          {`
            .service-card {
              transition: all 0.35s ease-in-out;
            }
            .service-card:hover {
              transform: translateY(-12px) scale(1.02);
              box-shadow: 0 15px 35px rgba(0,0,0,0.6);
            }
          `}
        </style>
      </Container>
    </section>
  );
}
