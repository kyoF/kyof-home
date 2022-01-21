import React from "react";
import "./Button.css";
import { withRouter } from "react-router-dom";

class Button extends React.Component {
  handleToPage = () => {
    this.props.history.push(this.props.content);
  };

  render() {
    return (
      <div
        className="Button"
        onClick={() => {
          this.handleToPage();
        }}
      >
        {this.props.name}
      </div>
    );
  }
}

export default withRouter(Button);
