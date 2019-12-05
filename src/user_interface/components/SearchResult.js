import React, { Component } from "react";
import { Card, GridList, GridListTile } from "@material-ui/core";
import Product from "../components/Product";
import axios from "axios";
import "../containers/Men.css";

const searchUrl = "https://webttcn.herokuapp.com/v1/shoes?q=";

class SearchResult extends Component {
  state = {
    sortSelect: "popular",
    liked: false,
    addToCart: false,
    searchText: "",
    shoes: []
  };

  componentDidMount() {
    const { searchText } = this.props.location.state;
    this.setState({ searchText: searchText });
    this.setState({ searchText: searchText });
    axios.get(searchUrl, searchText).then(res => {
      this.setState({ shoes: res.data });
      console.log(this.state.shoes);
    });
  }

  render() {
    return (
      <div style={{ minHeight: 550, marginLeft: 60, marginRight: 60 }}>
        <Card
          style={{
            padding: 20,
            marginTop: 30,
            fontSize: 20,
            fontWeight: "bold"
          }}
        >
          Kết quả tìm kiếm: "{this.state.searchText}"
        </Card>
        <GridList
          cellHeight={300}
          spacing={20}
          cols={4}
          style={{ marginBottom: 10 }}
        >
          {this.state.shoes.map(shoe => (
            <GridListTile>
              <Product
                id={shoe._id}
                likeTitle="100"
                image={
                  "https://webttcn.herokuapp.com/uploads/1574585783033-shoe_1.png"
                }
                name={shoe.name}
                price={shoe.price + " VNĐ"}
                handleToCart={isInCart => {
                  this.handleAddToCart(isInCart, shoe);
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
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
    if (!isInCart && idGets.indexOf(id) < 0) {
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
}

export default SearchResult;
