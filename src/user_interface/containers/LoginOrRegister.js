import React, { Component } from "react";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import Login from "../components/Login";
import Register from "../components/Register";
import "./LoginOrRegister.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default class LoginOrRegister extends Component {
  state = {
    value: "zero"
  };

  render() {
    return (
      <div className="container" style={{ height: window.screen.height - 130 }}>
        <Tabs
          style={{
            colorInterpolation: "white",
            color: "white",
            marginLeft: 200
          }}
          value={this.state.value}
          onChange={(event, newValue) => {
            this.setState({ value: newValue });
            console.log(newValue);
          }}
        >
          <Tab
            style={{ textTransform: "none", fontSize: 14 }}
            value="zero"
            label="Đăng nhập"
          ></Tab>
          <Tab
            style={{ textTransform: "none", fontSize: 14 }}
            value="one"
            label="Tạo tài khoản"
          ></Tab>
        </Tabs>
        <TabPanel value={this.state.value} index="zero">
          <Login />
        </TabPanel>
        <TabPanel value={this.state.value} index="one">
          <Register />
        </TabPanel>
      </div>
    );
  }
}
