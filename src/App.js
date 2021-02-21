import CTA from "./components/CTA"
import About from "./components/About"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import { Header } from "./components/Header"
import { Route } from "react-router-dom"
import Interventions from "./components/Interventions"
import BlogCardContainer from "./components/BlogCardContainer"
import BlogHome from "./components/BlogHome"
import ServiceLinks from "./components/ServiceLinks"

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
      <Route path="/interventions">
        <Interventions />
      </Route>

      <Route path="/blog">
        <BlogHome />
      </Route> 
      <Footer />
    </div>
  );
}

export default App;
