import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class InputRangeCustom extends Component {
  state = { price: { min: 0, max: 100 } };
  render() {
    return (
      <InputRange
        maxValue={1000}
        minValue={0}
        value={this.state.price}
        onChange={price => {
          this.setState({ price });
          this.handleOnChange(price);
        }}
      />
    );
  }

  handleOnChange(price) {
    this.props.onChangePrice(price);
  }
}

export default InputRangeCustom;
