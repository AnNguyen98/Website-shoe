import React, { Component } from "react";
import { Divider, Grid, Avatar, Button, Input } from "@material-ui/core";
import { faReply, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../containers/Details.css";

class Comment extends Component {
  state = {
    isLike: false,
    isReplyShow: false,
    textReplyValue: ""
  };
  render() {
    return (
      <div className="comment-con">
        <Grid container direction="row">
          <Avatar src={require("../images/avatar.jpg")} />
          <Grid>
            <span style={{ margin: 10, fontSize: 13, fontWeight: "bold" }}>
              ID: 23423
            </span>
            <br />
            <span style={{ margin: 10, fontSize: 13, fontWeight: "bold" }}>
              An Nguyễn
            </span>
          </Grid>
        </Grid>
        <span style={{ fontSize: 14, marginLeft: 40 }}>
          Tiền ship là bao nhiêu vậy?
        </span>
        <div style={{ marginLeft: 60, marginRight: 30, marginTop: 10 }}>
          <span style={{ fontSize: 14 }}>
            -> Chào bạn, sản phẩm này được miễn phí vận chuyển toàn quốc ạ. Nếu
            có nhu cầu sản phẩm bạn có thể tham khảo hướng dẫn đặt hàng tại
            https://hotro.tiki.vn/hc/vi/articles/203807174 hoặc liên hệ tổng đài
            đặt hàng 18006963 (miễn phí, 8-21h kể cả T7, CN) giúp Tiki nhé.
          </span>
        </div>
        <Input
          //TODO: Props func sang page chinh
          fullWidth
          fontSize={10}
          value={this.state.textReplyValue}
          onChange={event => {
            this.setState({ textReplyValue: event.target.value });
            console.log(this.state.textReplyValue);
          }}
          onSubmit={this.props.onSubmit(this.state.textReplyValue)}
          style={{
            marginLeft: 30,
            marginTop: 10,
            fontSize: 12.5,
            paddingLeft: 5
          }}
          className="reply-text-field"
          placeholder="Trả lời ..."
        />
        <Grid container direction="row" style={{ margin: 10 }}>
          <Grid item direction="row">
            <FontAwesomeIcon
              color={this.state.isLike ? "blue" : "gray"}
              style={{ marginTop: 8, fontSize: 15 }}
              icon={faThumbsUp}
            />
            <Button
              onClick={() => {
                this.setState({ isLike: !this.state.isLike });
              }}
              style={{
                width: 40,
                fontSize: 12,
                textTransform: "none",
                height: 30
              }}
            >
              Thích
            </Button>
          </Grid>
          <Grid item direction="row">
            <FontAwesomeIcon
              style={{ marginTop: 8, fontSize: 15 }}
              icon={faReply}
            />
            <Button
              style={{
                width: 40,
                fontSize: 12,
                textTransform: "none",
                height: 30
              }}
              onClick={this.props.onClick}
            >
              Trả lời
            </Button>
          </Grid>
        </Grid>
        <Divider style={{ marginLeft: 30, marginRight: 30 }} />
      </div>
    );
  }
}

export default Comment;

/*

<span style={{ fontSize: 14, marginLeft: 40 }}>
          -> Chào bạn, sản phẩm này được miễn phí vận chuyển toàn quốc ạ. Nếu có
          nhu cầu sản phẩm bạn có thể tham khảo hướng dẫn đặt hàng tại
          https://hotro.tiki.vn/hc/vi/articles/203807174 hoặc liên hệ tổng đài
          đặt hàng 18006963 (miễn phí, 8-21h kể cả T7, CN) giúp Tiki nhé.
        </span>

*/
