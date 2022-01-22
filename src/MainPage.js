import React from "react";
// import logo from "./public/logo512.png";
// import "./MainPage.css";
import { withRouter } from "react-router-dom";
import Button from "./Button";

class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <header className="MainPage-header">
          {/* <img src={logo} className="MainPage-logo" alt="logo" /> */}
          MainPage
          <Button name="return" content="/" />
        </header>
      </div>
    );
  }
}

export default withRouter(MainPage);
