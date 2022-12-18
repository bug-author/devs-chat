import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer/Footer";
import Navigation from "./components/shared/Navigation/Navigation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <div className="main">
              <Home />
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
