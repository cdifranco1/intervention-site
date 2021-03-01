import CTA from "./components/CTA"
import About from "./components/About"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import { Header } from "./components/Header"
import { Route } from "react-router-dom"
import Services from "./components/Services"
import BlogCardContainer from "./components/BlogCardContainer"
import BlogHome from "./components/BlogHome"
import ServiceLinks from "./components/ServiceLinks"
import Resources from "./components/Resources"

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Route exact path="/">
        <CTA />
        <div className="p-4">
          <Mission />
        </div>
        <ServiceLinks />
        <BlogCardContainer />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/services">
        <Services />
      </Route>

      <Route path="/blog">
        <BlogHome />
      </Route> 
      
      <Route path="/resources">
        <Resources />
      </Route> 
      <Footer />
    </div>
  );
}

export default App;
