import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Services";
import Why from "./Card-2";
import Client from "./client";
import CEO from "./ceo";
import Ourteam from "./OurTeam";
import Blog from "./blog";
import Footer from "./footer";
import Rocket from "./rocket";
import ContactPage from "./ContactPage";
import AboutPage from "./About";
import ProductPage from "./ProductPage";
import ClientPage from "./ClientPage";
import PortfolioPage from "./PortfolioPage";
import Dashboard from "./dashboard";
import StartProject from "./StartProject";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Rocket />
                <Services id="services" />
                <Why id="about" />
                <CEO id="CEO" />
                <Client id="Clients" />
                <Ourteam id="team" />
                <Blog id="Blog" />
              </>
            }
          />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Product" element={<ProductPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/StartProject" element={<StartProject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
