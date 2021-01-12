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
      {/* test commit */}
      <div>
        {/* second test commit */}
        <div>

        </div>
      </div>
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

      {/* Need to add routing for blog main page here and then have nested routing within the blog page */}
      {/* <Route path="/blog"></Route>
      <Route path="/blog">
        <BlogHome />
      </Route> */}
      <Footer />
    </div>
  );
}

export default App;
