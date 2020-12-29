import CTA from "./components/CTA"
import About from "./components/About"
import Mission from "./components/Mission"
import Footer from "./components/Footer"
import { Header } from "./components/Header"
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="bg-ghostwhite">
      <Header />
      <Route exact path="/">
        <CTA />
        <div className="px-2">
          <Mission />
        </div>
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
