import React, { Component } from "react";
import { Card, GridListTileBar, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  // faHeart,
  faCheck
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "../containers/Men.css";
class Product extends Component {
  state = {
    liked: false,
    isInCart: false
  };
  componentDidMount() {
    var isInCart = this.props.isInCartCheck;
    console.log(isInCart);
    this.setState({ isInCart: isInCart });
  }
  render() {
    return (
      <Card style={{ marginTop: 20 }} className="border-product">
        {/* <Grid container>
          <IconButton
            onClick={() => this.setState({ liked: !this.state.liked })}
            style={{ color: "gray" }}
          >
            <FontAwesomeIcon
              color={this.state.liked ? "gray" : "blue"}
              icon={faHeart}
            />
          </IconButton>
          <p style={{ fontSize: 17 }}>{this.props.likeTitle}</p>
        </Grid> */}
        <Link to={{ pathname: "/details", state: { id: this.props.id } }}>
          <img src={this.props.image} alt="shoe" style={{ height: 270 }} />
        </Link>
        <GridListTileBar
          title={this.props.name}
          subtitle={this.props.price}
          actionIcon={
            <IconButton
              className="icon-size"
              isInCart={this.props.isInCart}
              onClick={() => {
                this.setState({ isInCart: !this.state.isInCart });
                this.handleCart(this.state.isInCart);
              }}
              style={{ color: "white" }}
            >
              <FontAwesomeIcon
                icon={this.state.isInCart ? faCheck : faCartPlus}
              />
            </IconButton>
          }
        />
      </Card>
    );
  }
  handleCart(isInCart) {
    this.props.handleToCart(isInCart);
  }
}

export default Product;
