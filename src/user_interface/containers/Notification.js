import React, { Component } from "react";
import "./Notification.css";
import {
  Link,
  Grid,
  Button,
  Divider,
  Paper,
  Typography
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

class Notification extends Component {
  notifications = [
    "Giảm ngay 300k khi mua ĐH trên 1,500 triệu. Số lượng cực kỳ có hạn"
  ];
  render() {
    return (
      <div className="notification-container">
        <Paper style={{ padding: 20, marginTop: 20, marginBottom: 20 }}>
          <Typography variant="h5" component="p">
            Thông báo của tôi
          </Typography>
        </Paper>
        <Paper>
          {this.notifications.map(notification => (
            <div>
              <Grid
                justify="flex-start"
                container
                direction="row"
                alignItems="center"
              >
                <Button
                  textAlign="left"
                  style={{ textTransform: "none" }}
                  className="notifi-button-item"
                >
                  <div className="item">
                    <Link underline="none">
                      <FontAwesomeIcon
                        icon={faBell}
                        style={{ fontSize: 20, marginLeft: 20 }}
                      />
                      <span className="textNotifi">{notification}</span>
                    </Link>
                  </div>
                </Button>
              </Grid>
              <Divider />
            </div>
          ))}
        </Paper>
      </div>
    );
  }
}

export default Notification;
