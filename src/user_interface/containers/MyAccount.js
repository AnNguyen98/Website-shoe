import React, { Component } from "react";
import {
  Card,
  Grid,
  Input,
  Radio,
  Button,
  IconButton,
  CardMedia
} from "@material-ui/core";
import axios from "axios";

import "./MyAccount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const updateUrl = "https://webttcn.herokuapp.com/v1/users";
const getByIdUrl = "https://webttcn.herokuapp.com/v1/users/me";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarPath: "",
      idUser: localStorage.getItem("id_user", "none"),
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      sex: "Nam",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      avatarUrl: ""
    };
    this.setupInformation();
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ minHeight: 600 }}>
        <Card
          style={{
            padding: 20,
            marginTop: 20,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 10
          }}
        >
          <span style={{ fontSize: 17, fontWeight: "bold" }}>
            Thông tin tài khoản
          </span>
        </Card>
        <Card
          style={{
            marginLeft: 50,
            marginRight: 50,
            padding: 10,
            marginBottom: 20
          }}
        >
          {/* <input type="file" onChange={this.fileChangedHandler.bind(this)} /> */}

          <CardMedia
            image={require("../images/avatar.jpg")}
            className="avatar-style"
          >
            <IconButton
              onClick={this.handleUploadProfile}
              className="center-button-add-image"
              style={{ color: "white", marginTop: 70 }}
            >
              {/* <input type="file" style={{}}></input> */}
              <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
            </IconButton>
          </CardMedia>
          <Grid
            spacing={3}
            container
            direction="column"
            style={{ marginTop: 20 }}
          >
            <Grid item>
              <span className="label">ID:</span>
              <Input className="text-field" value={this.state.idUser} />
            </Grid>
            <Grid item>
              <span className="label-name"> Họ: </span>
              <Input
                className="text-field-name"
                value={this.state.firstName}
                onChange={event =>
                  this.setState({ firstName: event.target.value })
                }
              />
              <span className="label-name"> Tên: </span>
              <Input
                className="text-field-name"
                value={this.state.lastName}
                onChange={event =>
                  this.setState({ lastName: event.target.value })
                }
              />
            </Grid>
            <Grid item>
              <span className="label">Số điện thoại: </span>
              <Input
                className="text-field"
                value={this.state.phoneNumber}
                onChange={event =>
                  this.setState({ phoneNumber: event.target.value })
                }
              />
            </Grid>
            <Grid item>
              <span className="label">Email: </span>
              <Input className="text-field" value={this.state.email} />
            </Grid>
            <Grid item>
              <span className="label">Giới tính : </span>
              <Radio
                value="Nam"
                checked={this.state.sex === "Nam"}
                onChange={event =>
                  this.setState({
                    sex: event.target.value
                  })
                }
              />{" "}
              <span className="label" style={{ width: 65 }}>
                Nam
              </span>
              <Radio
                value="Nu"
                checked={this.state.sex === "Nu"}
                onChange={event =>
                  this.setState({
                    sex: event.target.value
                  })
                }
              />{" "}
              <span className="label" tyle={{ width: 65 }}>
                Nữ
              </span>
            </Grid>
            <Grid item>
              <span
                className="label"
                style={{ width: 450, fontWeight: "bold", fontSize: 17 }}
              >
                {" "}
                Thay đổi mật khẩu
              </span>
            </Grid>
            <Grid item>
              <span className="label">Mật khẩu cũ: </span>
              <Input
                className="text-field"
                value={this.state.oldPassword}
                onChange={event =>
                  this.setState({ oldPassword: event.target.value })
                }
                placeholder="Nhập mật khẩu cũ"
              />
            </Grid>
            <Grid item>
              <span className="label">Mật khẩu mới: </span>
              <Input
                type="password"
                className="text-field"
                value={this.state.newPassword}
                onChange={event =>
                  this.setState({ newPassword: event.target.value })
                }
                placeholder="Nhập mật khẩu mới"
              />
            </Grid>
            <Grid item>
              <span className="label">Nhập lại: </span>
              <Input
                type="password"
                className="text-field"
                value={this.state.confirmNewPassword}
                onChange={event =>
                  this.setState({ confirmNewPassword: event.target.value })
                }
                placeholder="Nhập lại mật khẩu mới"
              />
            </Grid>
            <Button
              style={{
                textTransform: "none",
                backgroundColor: "yellow",
                marginLeft: 500,
                marginRight: 500,
                marginTop: 10,
                marginBottom: 20
              }}
              onClick={this.handleUpdate.bind(this)}
            >
              Cập nhật
            </Button>
          </Grid>
        </Card>
      </div>
    );
  }

  handleUploadProfile() {}

  setupInformation() {
    const idUser = localStorage.getItem("id_user", "none");
    const tokenUser = localStorage.getItem("token_user", "none");
    console.log(tokenUser);

    if (idUser === "none" || tokenUser === "none") {
      return;
    }
    axios
      .get(getByIdUrl, {
        headers: { Authorization: "Bearer " + tokenUser }
      })
      .then(res => {
        this.setState({
          email: res.data.email,
          phoneNumber: res.data.phone,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          avatarUrl: res.data.avatar
        });
      });
  }
  handleUpdate() {
    const tokenUser = localStorage.getItem("token_user", "none");
    var isNotEmpty =
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
        avatar: this.state.avatarUrl,
        role: "user",
        _id: this.state.idUser
      };
      axios
        .put(`${updateUrl}/${this.state.idUser}`, user)
        .then(res => {
          console.log(res.data.firstName);
        })
        .catch(err => {
          alert("Cập nhật thông tin thất bại!!");
        });
    } else {
      alert("Enter your email or password");
    }
  }
}

export default MyAccount;
