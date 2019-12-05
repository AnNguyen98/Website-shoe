import React, { Component } from "react";
import {
  TextField,
  Container,
  Button,
  IconButton,
  Grid
} from "@material-ui/core";
import "../containers/LoginOrRegister.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

//
const url_register = "https://webttcn.herokuapp.com/v1/users";
class Register extends Component {
  state = {
    isShowPassword: false,
    isShowConfirmPassword: false,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  render() {
    return (
      <div className="container" style={{ minHeight: 550 }}>
        <h3>Tạo tài khoản</h3>

        <Container>
          <Grid container direction="row" className="first-last-name">
            <TextField
              className="textFieldStyle"
              label="Họ của bạn"
              margin="dense"
              variant="filled"
              value={this.state.firstName}
              style={{ width: 245, marginRight: 10 }}
              onChange={event =>
                this.setState({ firstName: event.target.value })
              }
            />
            <TextField
              className="textFieldStyle"
              label="Tên của bạn"
              margin="dense"
              variant="filled"
              value={this.state.lastName}
              style={{ width: 245 }}
              onChange={event =>
                this.setState({ lastName: event.target.value })
              }
            />
          </Grid>
          <TextField
            className="textFieldStyle"
            label="Số điện thoại"
            margin="dense"
            variant="filled"
            value={this.state.phone}
            onChange={event => this.setState({ phone: event.target.value })}
          />
          <br />
          <TextField
            className="textFieldStyle"
            label="Email"
            margin="dense"
            variant="filled"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <br />
          <TextField
            className="textFieldStyle"
            label="Mật khẩu"
            margin="dense"
            variant="filled"
            type={this.state.isShowPassword ? "email" : "password"}
            color="white"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => {
                    this.setState({
                      isShowPassword: !this.state.isShowPassword
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={this.state.isShowPassword ? faEye : faEyeSlash}
                  />
                </IconButton>
              )
            }}
          />
          <br />
          <TextField
            className="textFieldStyle"
            label="Xác nhận mật khẩu"
            margin="dense"
            variant="filled"
            type={this.state.isShowConfirmPassword ? "email" : "password"}
            color="white"
            value={this.state.confirmPassword}
            onChange={event =>
              this.setState({ confirmPassword: event.target.value })
            }
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => {
                    this.setState({
                      isShowConfirmPassword: !this.state.isShowConfirmPassword
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={this.state.isShowConfirmPassword ? faEye : faEyeSlash}
                  />
                </IconButton>
              )
            }}
          />
          <br />
          <Button
            className="buttonStyle"
            onClick={this.handleRegister.bind(this)}
            style={{
              textTransform: "none",
              width: 500,
              marginTop: 50,
              background: "green",
              color: "white"
            }}
          >
            Tạo tài khoản
          </Button>
        </Container>
      </div>
    );
  }

  handleRegister() {
    var isNotEmpty =
      this.state.email !== "" &&
      this.state.password !== "" &&
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.phone !== "";
    if (isNotEmpty) {
      var user = {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        role: "user"
      };
      axios
        .post(url_register, user)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          alert("Đăng kí thất bại!!");
        });
    } else {
      alert("Enter your emai or password");
    }
  }
}

export default Register;
