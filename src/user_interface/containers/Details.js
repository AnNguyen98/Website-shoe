import React, { Component } from "react";
import {
  Divider,
  Grid,
  CardMedia,
  Button,
  Select,
  MenuItem
} from "@material-ui/core";
import Comment from "../components/Comment";
import "./Details.css";
import axios from "axios";

const getShoeByID = "https://webttcn.herokuapp.com/v1/shoes";

class DetailsProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: require("../images/detail-black.jpg"),
      shoeID: "",
      images: [
        require("../images/detail-black.jpg"),
        require("../images/detail-white.jpg"),
        require("../images/detail-white-2.jpg")
      ],
      shoe: null,
      color: "black",
      size: 40,
      categori: "A"
    };
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    axios.get(`${getShoeByID}/${id}`).then(res => {
      if (res.data != null) {
        this.setState({
          shoe: res.data,
          currentImage: "https://webttcn.herokuapp.com/" + res.data.image
        });
      }
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <Grid
          style={{ justifyContent: "space-between" }}
          container
          direction="row"
        >
          <div className="image-product-display">
            <span
              className="product-name"
              style={{ fontSize: 30, padding: 10 }}
            >
              {this.state.shoe === null ? "" : this.state.shoe.name}
            </span>
            <CardMedia
              className="image-product"
              image={this.state.currentImage}
            />
            <Grid container direction="row">
              {this.state.images.map(image => (
                <Button
                  onClick={() => {
                    this.setState({ currentImage: image });
                  }}
                >
                  <CardMedia className="image-button" image={image} />
                </Button>
              ))}
            </Grid>
          </div>
          <div className="form-action">
            <div className="price-container">
              <span className="price">
                Giá:{" "}
                {this.state.shoe === null
                  ? "0"
                  : this.priceToString(this.state.shoe.price) + " VNĐ"}
              </span>
            </div>

            <div className="select-container">
              <div className="select-margin">
                <span className="span-text">Loại:</span>
                <br />
                <Select
                  className="select"
                  style={{ width: 200 }}
                  value={this.state.categori}
                  onChange={this.handleChangeCategories.bind(this)}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </div>
              <div className="select-margin">
                <span className="span-text">Màu sắc:</span>
                <br />
                <Select
                  className="select"
                  style={{ width: 200 }}
                  value={this.state.color}
                  onChange={this.handleChangeColor.bind(this)}
                >
                  <MenuItem value={"black"}>Đen</MenuItem>
                  <MenuItem value={"white"}>Trắng</MenuItem>
                  <MenuItem value={"yellow"}>Vàng</MenuItem>
                </Select>
                <br />
              </div>
              <div className="select-margin">
                <span className="span-text">Kích cỡ:</span>
                <br />
                <Select
                  className="select"
                  style={{ width: 200 }}
                  value={this.state.size}
                  onChange={this.handleChangeSize.bind(this)}
                >
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={50}>50</MenuItem>
                  <MenuItem value={60}>60</MenuItem>
                </Select>
              </div>
              <br />
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#ae4343",
                  margin: 50,
                  height: 50,
                  width: 200,
                  marginTop: 20,
                  fontWeight: "bold",
                  textTransform: "none"
                }}
                className="button-add"
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </Grid>
        <Divider style={{ height: 1, color: "black" }} />
        <h2 className="title-information">Thông tin sản phẩm:</h2>
        <div className="information-product">
          <h2 className="product-name">
            {this.state.shoe === null ? "" : this.state.shoe.name}
          </h2>
          <p style={{ padding: 2 }}>
            {this.state.shoe === null ? "" : this.state.shoe.desc}
          </p>
        </div>
        <Divider />
        <div className="">
          <h2 className="title-information">Hỏi đáp :</h2>
          <Grid cols={1}>
            {[1].map(() => (
              <Comment
                onClick={commentText => {
                  // if (this.state.textReplyValue === "") {
                  //   console.log(this.state.textReplyValue);
                  // }
                  console.log(commentText);
                }}
                onSubmit={commentText => {
                  console.log(commentText);
                }}
              />
            ))}
          </Grid>
        </div>
      </div>
    );
  }

  priceToString(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  handleChangeCategories(event) {
    this.setState({ categori: event.target.value });
  }

  handleChangeColor(event) {
    this.setState({ color: event.target.value });
  }

  handleChangeSize(event) {
    this.setState({ size: event.target.value });
  }
}

export default DetailsProduct;
