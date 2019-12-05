import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Input,
  CardMedia,
  IconButton,
  Grid,
  Menu,
  MenuItem,
  Fade,
  Button
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faUserAlt,
  faBell,
  faSearch,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
//https://webttcn.herokuapp.com/v1/user/logout
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      isOpen: false,
      anchorEl: null,
      idUser: localStorage.getItem("id_user", "none"),
      userName:
        localStorage.getItem("user_name", "Tài khoản") !== "null"
          ? localStorage.getItem("user_name", "null")
          : "Tài khoản"
    };
  }

  componentDidMount() {
    console.log(this.state.idUser);
    console.log(this.state.userName);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleClose() {
    this.setState({ isOpen: false, anchorEl: null });
  }

  ButtonBarStyle = {
    color: "white",
    disableUnderline: "true",
    textDecoration: "none"
  };

  MenuButtonStyle = {
    color: "black",
    disableUnderline: "true",
    textDecoration: "none"
  };

  render() {
    return (
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "#5199FF", height: 65 }}
      >
        <Toolbar
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Toolbar>
            <Link to="/home">
              <CardMedia
                style={{ width: 70, height: 30, borderRadius: 10 }}
                image={require("../images/bit-log.png")}
              />
            </Link>
            <Link to="/home" style={this.ButtonBarStyle}>
              <HeaderButton label="Trang chủ" />
            </Link>
            <Link to="/men" style={this.ButtonBarStyle}>
              <HeaderButton label="Giày nam" />
            </Link>
            <Link to="/women" style={this.ButtonBarStyle}>
              <HeaderButton label="Giày nữ" />
            </Link>
          </Toolbar>
          <Toolbar xs={12} md={6}>
            <Input
              value={this.state.searchText}
              onChange={event =>
                this.setState({ searchText: event.target.value })
              }
              placeholder="Tìm sản phẩm mong muốn ..."
              disableUnderline={true}
              style={{
                height: 40,
                width: 500,
                color: "gray",
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
                backgroundColor: "white",
                padding: "0 10px",
                fontSize: 14,
                boxShadow: props =>
                  props.color === "red"
                    ? "0 3px 5px 2px rgba(255, 105, 135, .3)"
                    : "0 3px 5px 2px rgba(33, 203, 243, .3)"
              }}
            />
            <Link
              to={{
                pathname: this.state.searchText !== "" ? "/search-result" : "/",
                state: { searchText: this.state.searchText }
              }}
            >
              <Button
                style={{
                  borderBottomLeftRadius: 0,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  height: 40,
                  width: 70,
                  color: "gray",
                  fontSize: 20,
                  backgroundColor: "#F2F8FD"
                }}
                onClick={() => {
                  // TODO: Chuyển searchText to Page result
                  console.log(this.state.searchText);
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Link>
          </Toolbar>
          <Grid>
            <Link to="/cart">
              <IconButton>
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faShoppingBag}
                />
              </IconButton>
            </Link>

            <Link to="/notification">
              <IconButton>
                <FontAwesomeIcon style={{ color: "white" }} icon={faBell} />
              </IconButton>
            </Link>
            <Button
              style={{ color: "white", textTransform: "none" }}
              aria-haspopup="true"
              onMouseOver={event => {
                this.setState({
                  isOpen: true,
                  anchorEl: event.currentTarget
                });
              }}
            >
              <FontAwesomeIcon
                style={{ color: "white", fontSize: 21, marginRight: 10 }}
                icon={faUserAlt}
              />
              <span>
                {this.state.userName == null
                  ? "Tài khoản"
                  : this.state.userName}
              </span>
            </Button>
            {this.state.idUser !== "none" ? (
              <Menu
                anchorEl={this.state.anchorEl}
                open={this.state.isOpen}
                onClose={this.handleClose.bind(this)}
                TransitionComponent={Fade}
                keepMounted
              >
                <MenuItem onClick={this.handleClose.bind(this)}>
                  <Link to="/my-account" style={this.MenuButtonStyle}>
                    <FontAwesomeIcon
                      style={{ marginRight: 5 }}
                      icon={faUserAlt}
                    />
                    <span style={{ fontSize: 14 }}> Tài khoản của tôi</span>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    this.handleClose();
                    localStorage.setItem("token_user", "none");
                    localStorage.setItem("id_user", "none");
                    localStorage.setItem("user_name", null);
                    this.setState({ userName: "Tài khoản", idUser: "none" });
                  }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: 5 }}
                    icon={faSignOutAlt}
                  />
                  <span style={{ fontSize: 14 }}> Đăng xuất</span>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                anchorEl={this.state.anchorEl}
                open={this.state.isOpen}
                onClose={this.handleClose.bind(this)}
                TransitionComponent={Fade}
                keepMounted
              >
                <MenuItem onClick={this.handleClose.bind(this)}>
                  <Link to="/login-or-register" style={this.MenuButtonStyle}>
                    <FontAwesomeIcon
                      style={{ marginRight: 5 }}
                      icon={faSignInAlt}
                    />
                    <span style={{ fontSize: 14 }}> Đăng nhập </span>
                  </Link>
                </MenuItem>
              </Menu>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
