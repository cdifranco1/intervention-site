import CTA from "./components/CTA"
import About from "./components/About"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import { Header } from "./components/Header"
import { Route } from "react-router-dom"
import Interventions from "./components/Interventions"
import BlogCardContainer from "./components/BlogCardContainer"

function App() {
  return (
    <div className="bg-ghostwhite">
      <Header />
      <Route exact path="/">
        <CTA />
        <div className="p-4">
          <Mission />
        </div>
        <BlogCardContainer />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/interventions">
        <Interventions />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
