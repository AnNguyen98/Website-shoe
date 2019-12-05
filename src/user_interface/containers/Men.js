import React, { Component } from "react";
import {
  Grid,
  Card,
  GridList,
  Select,
  MenuItem,
  Button,
  GridListTile
} from "@material-ui/core";
import "./Men.css";
import Product from "../components/Product";
import SelectedButton from "../components/SelectedButton";
import axios from "axios";
import FillterSelect from "../components/FillterSelect";

const menShoesUrl = "https://webttcn.herokuapp.com/v1/shoes?kind=men";

class Men extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      sortSelect: "popular",
      liked: false,
      addToCart: false,
      shoes: [],
      fillter: {
        price: {
          min: 0,
          max: 100
        },
        category: {
          name: "",
          _id: ""
        }
      }
    };
  }

  componentDidMount() {
    axios.get(menShoesUrl).then(res => {
      this.setState({ shoes: res.data });
      console.log(this.state.shoes);
    });
  }

  render() {
    return (
      <div className="men-container">
        <Grid container className="center">
          <FillterSelect
            title="Giày nam"
            onFillterChange={fillter => {
              this.setState({
                fillter: fillter
              });
              console.log(this.state.fillter);
            }}
          />
          <Grid item xs={9} style={{ marginLeft: 10 }}>
            <Card style={{ padding: 20 }}>
              <Grid container style={{ width: 300, fontSize: 18 }}>
                Lựa chọn của bạn:
                <Grid container direction="row">
                  <SelectedButton
                    itemTitle={this.state.fillter.category.name}
                  />
                  <SelectedButton
                    itemTitle={
                      "Price (" +
                      this.state.fillter.price.min +
                      " -> " +
                      this.state.fillter.price.max +
                      ")"
                    }
                  />
                </Grid>
              </Grid>
              <Grid container className="header-sort">
                <Grid item>
                  Sắp xếp theo:{" "}
                  <Select
                    value={this.state.sortSelect}
                    style={{ marginLeft: 10, width: 160, fontSize: 15 }}
                    onChange={this.handleOnChangeSelectSort.bind(this)}
                  >
                    <MenuItem value="newest">Mới nhất</MenuItem>
                    <MenuItem value="popular">Phổ biến</MenuItem>
                    <MenuItem value="high-to-low">Giá từ cao đến thấp</MenuItem>
                    <MenuItem value="low-to-high">Giá từ thấp đến cao</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Card>
            <GridList cellHeight={300} spacing={20} cols={3}>
              {this.state.shoes.map(shoe => (
                <GridListTile>
                  <Product
                    id={shoe._id}
                    likeTitle="100"
                    image={"https://webttcn.herokuapp.com/" + shoe.image}
                    name={shoe.name}
                    price={this.priceToString(shoe.price) + " VNĐ"}
                    handleToCart={isInCart => {
                      this.handleAddToCart(isInCart, shoe);
                    }}
                  />
                </GridListTile>
              ))}
            </GridList>
            <div style={{ padding: 10, marginTop: 10 }}>
              <Button
                style={{ textTransform: "none", fontSize: 16, color: "blue" }}
                onClick={this.handleShowMore()}
              >
                Xem thêm ...
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  priceToString(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  handleCheckIsInCart(id) {
    var idGets = JSON.parse(localStorage.getItem("ids"));
    console.log(idGets.indexOf(id) >= 0);
    return idGets.indexOf(id) >= 0;
  }

  handleAddToCart(isInCart, shoe) {
    console.log(shoe._id);
    var id = shoe._id;
    var idGets = JSON.parse(localStorage.getItem("ids"));
    if (idGets == null) {
      idGets = [];
    }
    if (!isInCart && (idGets.indexOf(id) == null || idGets.indexOf(id) < 0)) {
      idGets.push(id);
    } else {
      Array.prototype.remove = function() {
        var what,
          a = arguments,
          L = a.length,
          ax;
        while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
          }
        }
        return this;
      };
      idGets.remove(shoe._id);
    }
    var idsJson = JSON.stringify(idGets);
    localStorage.setItem("ids", idsJson);
    idGets = JSON.parse(localStorage.getItem("ids"));
    console.log(idGets);
  }

  handleShowMore() {}

  handleOnChangeSelectSort(event) {
    this.setState({ sortSelect: event.target.value });
  }
}

export default Men;
