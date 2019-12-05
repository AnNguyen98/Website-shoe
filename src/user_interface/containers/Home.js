import React, { Component } from "react";
import SliderShow from "../components/SliderShow";
import { GridList, Grid, Button } from "@material-ui/core";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ImageHome from "../components/ImageHome";

const dealImages = [
  require("../images/Featured1._CB449724364_.jpg"),
  require("../images/Featured2._CB449724364_.jpg"),
  require("../images/Featured3._CB449724364_.jpg")
];
const deals = [20, 35, 50];
const dealCosts = ["1000.000", "500.000", "300.000"];
const dealProductNames = [
  "Giày ống cho nữ",
  "Giày ống cho nam",
  "Giày ống cho trẻ em"
];

const bestSellerImages = [
  require("../images/61j8M5m1UNL._AC_SX255_.jpg"),
  require("../images/71AIkAK835L._AC_SX255_.jpg"),
  require("../images/61zeMSeK5dL._AC_SX255_.jpg"),
  require("../images/71aJwDDW75L._AC_SX255_.jpg"),
  require("../images/71ETFyYr0aL._AC_SX255_.jpg"),
  require("../images/71Ip5dNr6xL._AC_SX255_.jpg")
];
const bestSellerLikes = [20, 35, 50, 200, 135, 150];
const bestSellerCosts = [
  "50.000",
  "100.000",
  "300.000",
  "120.000",
  "200.000",
  "400.000"
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token_user: "none",
      id_user: "none"
    };
  }

  componentDidMount() {
    const id_user = localStorage.getItem("id_user", "none");
    this.setState({ id_user: id_user });
  }
  render() {
    return (
      <div className="home-container">
        <SliderShow />
        <img
          src={require("../images/Header_v2._CB1572630231_.jpg")}
          alt=""
          className="header-image"
        />
        <ImageHome
          src={require("../images/Koolaburra-Hero-1x._CB1573602894_.jpg")}
        />
        <ImageHome src={require("../images/Mens_Sneakers._CB452515353_.jpg")} />
        <div>
          <span className="header-deals">Giảm giá sốc</span>
          <Grid container direction="row" style={{ justifyContent: "center" }}>
            {[0, 1, 2].map((t, index) => (
              <Grid item key={index.toString()}>
                <img
                  src={dealImages[t]}
                  alt=""
                  style={{ margin: 10 }}
                  className="image-medium-large"
                />
                <div>
                  <span style={{ padding: 2 }} className="name-product-text">
                    {dealProductNames[t]}
                  </span>
                  <span className="sale-text">Giảm giá {deals[t]}%</span>
                  <div style={{ marginTop: 5 }}>
                    <span className="cost-text">{dealCosts[t]} vnd</span>
                  </div>
                  <Link to="/men">
                    <Button
                      style={{
                        width: 150,
                        height: 40,
                        textTransform: "none",
                        fontWeight: "bold"
                      }}
                    >
                      Mua ngay
                    </Button>
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <span className="header-deals">Bán chạy nhất</span>
          <Grid container direction="row" style={{ justifyContent: "center" }}>
            {[0, 1, 2, 3, 4, 5].map(t => (
              <div>
                <img
                  src={bestSellerImages[t]}
                  alt=""
                  style={{ margin: 10, maxWidth: 200, height: 130 }}
                />
                <div>
                  <FontAwesomeIcon icon={faHeart} />
                  <span style={{ padding: 10 }}>{bestSellerLikes[t]}</span>
                </div>

                <div>
                  <div style={{ marginTop: 5 }}>
                    <span>Nike</span>
                  </div>
                  <div style={{ marginTop: 5 }}>
                    <span className="cost-text">{bestSellerCosts[t]} vnd</span>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </div>
        <div>
          <span className="header-deals">Sự kiện</span>
          <GridList
            cols={4}
            spacing={10}
            cellHeight={350}
            style={{ justifyContent: "center" }}
          >
            {[
              require("../images/Featured3._CB449724364_.jpg"),
              require("../images/73319948_547423299148143_3734155489720463253_n.jpg"),
              require("../images/71945322_2382749298656007_64044100865617627_n.jpg"),
              require("../images/74346777_712343609271482_2936742795323383430_n.jpg"),
              require("../images/73414154_2142882822675386_4132707914323506631_n.jpg"),
              require("../images/72880454_461648111129055_3511891921178023097_n.jpg"),
              require("../images/71538839_434384393891445_5109070227535552552_n.jpg"),
              require("../images/75210475_1457858117712801_1937296649730636142_n.jpg")
            ].map(imageUrl => (
              // <LinkTo href="https://www.facebook.com/events/giaythethaoonlinevn/event-sale-off-gi%E1%BA%A3m-gi%C3%A1-ch%C3%A0o-m%E1%BB%ABng-ng%C3%A0y-20-10/1723827307848787/">

              // </LinkTo>
              <img
                src={imageUrl}
                alt=""
                style={{ maxWidth: 330, marginTop: 10 }}
              />
            ))}
          </GridList>
        </div>
        <Link to="/login-or-register">
          <img
            src={require("../images/Email_Signup._CB1540327030_.png")}
            alt=""
            className="header-image"
            style={{ marginTop: 20, marginBottom: 20 }}
          />
        </Link>
      </div>
    );
  }
}

export default Home;
