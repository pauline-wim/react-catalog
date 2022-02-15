import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Film from "./pages/Film";
// CSS
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/film/:id" component={Film} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
