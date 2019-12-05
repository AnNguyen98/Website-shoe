import React, { Component } from "react";
import { Grid, Button, ButtonGroup } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../containers/Cart.css";

class CartProduct extends Component {
  render() {
    return (
      <Grid
        className="infor-product-container"
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{
          borderRadius: 8
        }}
      >
        <Link to={{ pathname: "/details", state: { id: "12345" } }}>
          <img
            src={this.props.imageUrl}
            alt="Cart"
            className="image-product-cart"
          />
        </Link>
        <div className="infor-container">
          <Grid>
            <span
              style={{ width: 400, paddingTop: 10 }}
              class="title-product-cart"
            >
              {this.props.name}
            </span>
            <br />
            {/* <span class="title-product-cart">Chỉ còn 5 sản phẩm</span>
            <br /> */}
            <span class="title-product-cart">{this.props.category}</span>
            <br />
            <Button
              style={{ color: "blue", fontSize: 12 }}
              onClick={this.handleDelete.bind(this)}
            >
              Delete
            </Button>
          </Grid>
        </div>
        <div className="infor-container">
          <h4>{this.props.price} VND</h4>
        </div>
        <div className="infor-container">
          <ButtonGroup className="button-group">
            <Button onClick={this.handleSub.bind(this)}> - </Button>
            <span className="number-product">{this.props.count}</span>
            <Button onClick={this.handlePlus.bind(this)}> + </Button>
          </ButtonGroup>
        </div>
      </Grid>
    );
  }
  handlePlus() {
    this.props.handlePlusReceive();
  }
  handleSub() {
    this.props.handleSubRecieve();
  }
  handleDelete() {
    this.props.handleDeleteReceive();
  }
}

export default CartProduct;
