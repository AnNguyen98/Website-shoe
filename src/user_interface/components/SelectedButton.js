import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class SelectedButton extends Component {
  render() {
    return (
      <div>
        {" "}
        <Button
          style={{
            marginTop: 10,
            borderColor: "black",
            border: "solid",
            borderWidth: 1,
            borderRadius: 20,
            fontSize: 13,
            textTransform: "none",
            marginRight: 10
          }}
          onClick={this.props.onClick}
        >
          {this.props.itemTitle}
          <FontAwesomeIcon
            style={{ marginLeft: 5, fontSize: 16 }}
            icon={faMinusCircle}
          />
        </Button>{" "}
      </div>
    );
  }
}
