import React from "react";
// import logo from "./logo.svg";
// import "./SubPage.css";
import { withRouter } from "react-router";
import Button from "./Button";

class SubPage extends React.Component {
  render() {
    return (
      <div className="SubPage">
        <header className="SubPage-header">
          {/* <img src={logo} className="SubPage-logo" alt="logo" /> */}
          SubPage
          <Button name="return" content="/" />
        </header>
      </div>
    );
  }
}

export default withRouter(SubPage);
