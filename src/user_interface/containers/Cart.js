import React, { Component } from "react";
import { Grid, Button, Divider, TextField, Card } from "@material-ui/core";
import CartProduct from "../components/CartProduct";

import axios from "axios";
import "./Cart.css";

const getShoeByID = "https://webttcn.herokuapp.com/v1/shoes";
const billsUrl = "https://webttcn.herokuapp.com/v1/bills";

class Cart extends Component {
  state = {
    priceAllProducts: 0,
    shoes: [],
    listOfShoes: [],
    amounts: [],
    shoePrices: {},
    address: ""
  };

  componentDidMount() {
    var idGets = JSON.parse(localStorage.getItem("ids"));
    if (idGets === "none") {
      //idGets = [];
    } else {
      idGets.map(id => {
        axios.get(`${getShoeByID}/${id}`).then(res => {
          if (res.data !== null) {
            this.setState({
              amounts: [...this.state.amounts, 1],
              shoes: [...this.state.shoes, res.data],
              priceAllProducts: this.state.priceAllProducts + res.data.price,
              listOfShoes: [...this.state.shoes, res.data]
            });
            console.log(this.state.listOfShoes);
          }
        });
      });
    }
  }

  render() {
    return (
      <div className="cart-container">
        <span className="cart-title">
          Giỏ hàng ({this.state.listOfShoes.length} Sản phẩm):
        </span>
        <div style={{ marginLeft: 30, marginRight: 30 }}>
          <Grid container spacing={2}>
            {this.state.listOfShoes.length === 0 ? (
              <Grid item xs={9}>
                <Card style={{ paddingTop: 100, paddingBottom: 100 }}>
                  Giỏ hàng rỗng
                </Card>
              </Grid>
            ) : (
              <Grid item xs={9}>
                {this.state.shoes.map((shoe, index) => (
                  <CartProduct
                    handleSubRecieve={() => {
                      this.handleSub(shoe._id, index);
                    }}
                    handlePlusReceive={() => {
                      this.handlePlus(shoe._id, index);
                    }}
                    handleDeleteReceive={() => {
                      this.handleDelete(shoe._id);
                    }}
                    count={this.state.amounts[index]}
                    name={shoe.name}
                    price={this.priceToString(shoe.price)}
                    category={shoe.category.name}
                    imageUrl={"https://webttcn.herokuapp.com/" + shoe.image}
                    //"https://webttcn.herokuapp.com/uploads/1575459684180-balenciaga2.jpg
                  />
                ))}
              </Grid>
            )}
            <Grid
              style={{
                backgroundColor: "white",
                marginTop: 8,
                height: 270,
                borderRadius: 8
              }}
              item
              xs={3}
            >
              <Grid>
                <div
                  style={{
                    marginBottom: 20,
                    marginTop: 20
                  }}
                >
                  <div style={{ height: 50 }}>
                    <span style={{ fontSize: 15, color: "black" }}>
                      Tạm tính:{" "}
                    </span>
                    <span style={{ fontSize: 18, color: "red" }}>
                      {this.priceToString(this.state.priceAllProducts)}đ
                    </span>
                  </div>
                  <Divider />
                  <div style={{ height: 50, marginTop: 30 }}>
                    <span style={{ fontSize: 15, color: "black" }}>
                      Thành tiền:{" "}
                    </span>
                    <span style={{ fontSize: 18, color: "red" }}>
                      {this.priceToString(this.state.priceAllProducts)}đ
                    </span>
                    <br />
                    <span style={{ fontSize: 13 }}>
                      (Đã bao gồm VAT nếu có)
                    </span>
                  </div>
                  <div className="">
                    <div style={{ marginTop: 20 }}>
                      <span style={{ paddingRight: 5, fontSize: 15 }}>
                        Địa chỉ nhận hàng:{" "}
                      </span>
                    </div>
                    <TextField
                      style={{
                        width: 250,
                        marginTop: 20,
                        paddingLeft: 10
                      }}
                      value={this.state.address}
                      onChange={event =>
                        this.setState({ address: event.target.value })
                      }
                      placeholder="Nhập địa chỉ..."
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    marginTop: 90
                  }}
                >
                  <Button
                    className="button-order-style"
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      fontWeight: "bold",
                      textTransform: "none",
                      fontSize: 17
                    }}
                    onClick={this.handleBills.bind(this)}
                  >
                    Thanh toán
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }

  handleBills() {
    const tokenUser = localStorage.getItem("token_user", "none");
    if (tokenUser === "none") {
      window.location.replace("/login-or-register");
    }
    var bill = {
      userId: localStorage.getItem("id_user"),
      address: this.state.address,
      money: this.state.priceAllProducts,
      listOfShoes: this.state.listOfShoes
    };
    axios
      .post(billsUrl, bill, {
        headers: { Authorization: "Bearer " + tokenUser }
      })
      .then(res => {
        console.log(res.data);
        alert("Thanh toán thành công!");
      })
      .catch(err => {
        alert("Thanh toán thất bại!");
      });
  }

  handlePlus(shoeID, index) {
    console.log(shoeID);
    var temp = this.state.amounts;
    if (temp[index] == 100) {
      return;
    }
    temp[index] = temp[index] + 1;
    axios.get(`${getShoeByID}/${shoeID}`).then(res => {
      if (res.data != null) {
        this.setState({
          priceAllProducts: this.state.priceAllProducts + res.data.price,
          amounts: temp
        });
      }
    });
  }

  handleSub(shoeID, index) {
    console.log(shoeID);
    var temp = this.state.amounts;
    if (temp[index] == 1) {
      return;
    }
    temp[index] = temp[index] - 1;
    axios.get(`${getShoeByID}/${shoeID}`).then(res => {
      if (res.data != null) {
        this.setState({
          priceAllProducts: this.state.priceAllProducts - res.data.price,
          amounts: temp
        });
      }
    });
  }

  priceToString(price) {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }

  handleDelete(shoeID) {
    var idGets = JSON.parse(localStorage.getItem("ids"));
    if (idGets === "null") {
      idGets = [];
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
      idGets.remove(shoeID);
      var idsJson = JSON.stringify(idGets);
      localStorage.setItem("ids", idsJson);
      var shoes = [];
      this.state.listOfShoes.map(shoe => {
        if (shoe._id !== shoeID) {
          shoes.push(shoe);
        }
      });
      this.setState({ listOfShoes: shoes });
      console.log(shoes);
    }
  }
}

export default Cart;
