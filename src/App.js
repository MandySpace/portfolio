import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import GlobalStyle from "./components/GlobalStyle";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MouseTrail from "./components/MouseTrail";
import { useState } from "react";

function App() {
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <GlobalStyle />
      <MouseTrail />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/contact">
            <ContactUs
              name={name}
              email={email}
              message={message}
              setName={setName}
              setEmail={setEmail}
              setMessage={setMessage}
            />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
