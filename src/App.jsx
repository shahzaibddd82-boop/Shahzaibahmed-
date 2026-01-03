// import { useState } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { motion, AnimatePresence } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./Custom/Footer";
// import Profile from "./Screens/Profile";
// import Services from "./Screens/Services";
// import Projects from "./Screens/Projects";

// const SCREENS = { Profile, Services, Projects };

// export default function App() {
//   const [activeScreen, setActiveScreen] = useState("Profile");
//   const ScreenComponent = SCREENS[activeScreen];

//   return (
//     <div className="app-wrapper">
//       {/* Navbar */}
//       <Navbar expand="lg" fixed="top" variant="dark" className="navbar-gradient py-3">
//         <Container>
//           <Navbar.Brand
//             className="fw-bold cursor-pointer"
//             onClick={() => setActiveScreen("Profile")}
//           >
//             <img src="/shahzaib.jpg" alt="SHAHZAIB AHEMD" className="logo" />
//           </Navbar.Brand>

//           <Navbar.Toggle />
//           <Navbar.Collapse>
//             <Nav className="ms-auto">
//               {Object.keys(SCREENS).map((page) => (
//                 <Nav.Link
//                   key={page}
//                   active={activeScreen === page}
//                   onClick={() => setActiveScreen(page)}
//                   className={`navbar-link ${activeScreen === page ? "active" : ""}`}
//                 >
//                   {page}
//                   {activeScreen === page && (
//                     <motion.span layoutId="nav-underline" className="nav-underline" />
//                   )}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Main Content */}
//       <main className="app-main">
//         <Container>
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeScreen}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.4 }}
//               className="card"
//             >
//               <ScreenComponent />
//             </motion.div>
//           </AnimatePresence>
//         </Container>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Screens
import Profile from "./Screens/Profile";
import Education from "./Screens/Education";
import Services from "./Screens/Services";
import Projects from "./Screens/Projects";
import About from "./Screens/About";

// Footer
import Footer from "./Custom/Footer";

// Map of screens
const SCREENS = {
  Profile,
  Education,
  Services,
  Projects,
  About,
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState("Profile");
  const ScreenComponent = SCREENS[activeScreen];

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <Navbar expand="lg" fixed="top" variant="dark" className="navbar-gradient py-3">
        <Container>
          <Navbar.Brand
            className="fw-bold d-flex align-items-center cursor-pointer"
            onClick={() => setActiveScreen("Profile")}
          >
            <img
              src="/shahzaib.jpg"
              alt="Shahzaib Ahmed"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
                border: "2px solid #fff",
              }}
            />
            <span style={{ color: "#fff", fontSize: "1.1rem", fontWeight: "600" }}>
              Shahzaib Ahmed
            </span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {Object.keys(SCREENS).map((screen) => (
                <Nav.Link
                  key={screen}
                  active={activeScreen === screen}
                  onClick={() => setActiveScreen(screen)}
                  className={`navbar-link ${activeScreen === screen ? "active" : ""}`}
                >
                  {screen}
                  {activeScreen === screen && (
                    <motion.span layoutId="nav-underline" className="nav-underline" />
                  )}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <main className="app-main" style={{ paddingTop: "90px" }}>
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="card"
            >
              <ScreenComponent />
            </motion.div>
          </AnimatePresence>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
