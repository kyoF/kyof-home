import React from "react";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SubPage from "./SubPage";

class MainController extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path={"/"} component={App} />
            <Route path={"/MainPage"} component={MainPage} />
            <Route path={"/SubPage"} component={SubPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainController;
