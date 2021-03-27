import CTA from "./components/CTA"
import About from "./components/About"
import Mission from "./components/Mission"
import ContactSection from "./components/ContactSection"
import { Header } from "./components/Header"
import { Route } from "react-router-dom"
import Services from "./components/Services"
import BlogCardContainer from "./components/BlogCardContainer"
import BlogHome from "./components/BlogHome"
import ServiceLinks from "./components/ServiceLinks"
import Resources from "./components/Resources"
import Footer from "./components/Footer";

import ROUTES from "./constants/routes.json";

function App() {
  return (
    <div className="font-sans w-full">
      <Header />
      <Route exact path="/">
        <CTA />
        <div className="p-4">
          <Mission />
        </div>
        <ServiceLinks />
        <BlogCardContainer />
      </Route>
      <Route path={`${ROUTES.About}`}>
        <About />
      </Route>
      <Route path={`${ROUTES.Services.BaseRoute}`}>
        <Services />
      </Route>

      <Route path={`${ROUTES.Blog}`}>
        <BlogHome />
      </Route> 
      
      <Route path={`${ROUTES.Resource}`}>
        <Resources />
      </Route> 
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
