import React, { FC } from "react";
import "./App.css";
import RichTextEditor from "./components/RichTextEditor";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import MainPage from "./MainPage.js";
// import SubPage from "./SubPage.js";
import PageA from "./PageA";
import PageB from "./PageB";

const App: FC = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
      </head>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/PageA" component={PageA}>
              <PageA />
            </Route>
            <Route exact path="/PageB" component={PageB}>
              <PageB />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
