import React, { Component } from "react";
import { Button, CardMedia } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../containers/Home.css";

class ImageHome extends Component {
  render() {
    return (
      <div style={{ margin: 5 }}>
        <CardMedia
          className="header-image"
          style={{ margin: 10, height: 700 }}
          image={this.props.src}
        >
          <div>
            <Link to="/men">
              <Button
                className="shop-now"
                style={{
                  color: "white",
                  backgroundColor: "grey",
                  marginTop: 350,
                  fontSize: 18,
                  fontWeight: "bold",
                  justifyContent: "center",
                  textTransform: "none",
                  textDecoration: "none"
                }}
              >
                Mua sắm ngay
              </Button>
            </Link>
          </div>
        </CardMedia>
      </div>
    );
  }
}

export default ImageHome;
