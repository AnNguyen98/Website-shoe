import React, { Component } from "react";
import { Button } from "@material-ui/core";

class HeaderButton extends Component {
  render() {
    return (
      <Button style={{ color: "white", textTransform: "none", fontSize: 15 }}>
        {this.props.label}
      </Button>
    );
  }
}

export default HeaderButton;
