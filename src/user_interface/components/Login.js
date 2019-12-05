import React, { Component } from "react";
import { TextField, Container, Button, IconButton } from "@material-ui/core";
import "../containers/LoginOrRegister.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const login_url = "https://webttcn.herokuapp.com/v1/auth";

class Login extends Component {
  state = {
    isShowPassword: false,
    email: "nguyenduy@gmail.com",
    password: "123456"
  };
  height = 0;
  constructor(props) {
    super(props);
    this.height = window.document.height;
  }
  render() {
    return (
      <div className="container" style={{ minHeight: 550 }}>
        <h3>Đăng nhập</h3>
        <Container>
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
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
            type={this.state.isShowPassword ? "email" : "password"}
            color="white"
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
          <Button
            className="buttonStyle"
            onClick={this.handleLogin.bind(this)}
            style={{
              textTransform: "none",
              width: 500,
              marginTop: 50,
              background: "green",
              color: "white"
            }}
          >
            Đăng nhập
          </Button>
        </Container>
      </div>
    );
  }

  handleLogin() {
    if (this.state.email !== "" && this.state.password !== "") {
      const user = {
        email: this.state.email,
        password: this.state.password,
        role: "user"
      };
      axios
        .post(login_url, user)
        .then(res => {
          const token_user = res.data.token;
          const id_user = res.data.user._id;
          const user_name =
            res.data.user.first_name + " " + res.data.user.last_name;
          window.location.replace("/home");
          localStorage.setItem("token_user", token_user);
          localStorage.setItem("id_user", id_user);
          localStorage.setItem("user_name", user_name);
        })
        .catch(err => {
          console.log(err);
          window.alert("Tài khoản mật khẩu không đúng!!");
        });
    } else {
      alert("Enter your emai or password");
    }
  }
}

export default Login;
