import React, { Component } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, IconButton } from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <span
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "bold"
            }}
          >
            Liên hệ chúng tôi qua:
          </span>
          <br />
          <IconButton>
            <Link href="https://www.facebook.com/rogervnn/">
              <FontAwesomeIcon
                icon={faFacebookF}
                color={"blue"}
                style={{ width: 30, height: 30 }}
              />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="https://m.me/rogervnn?fbclid=IwAR0Ozfd8hPuSbteKHsg-V31eD52mjeL9QdVn8QjQTUo_t1j-JB0Ij-JCyMw">
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                style={{ width: 30, height: 30, color: "#4fc3f7" }}
              />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="https://www.facebook.com/rogervnn/">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ width: 30, height: 30, color: "#7e57c2" }}
              />
            </Link>
          </IconButton>
          <IconButton>
            <Link href="mailto:rogershoesvn@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ width: 30, height: 30, color: "#ef5350" }}
              />
            </Link>
          </IconButton>
        </div>
        <div>
          <span className="title-footer">
            <b>Địa chỉ gửi hàng đổi/trả/bảo hành:</b> Trung tâm xử lý đơn hàng
            TIKI - 367/F370 khu A75 Bạch Đằng, P.2, Q.Tân Bình, TP. Hồ Chí Minh
          </span>
          <br />
          <span className="small-title">
            (Tham khảo hướng dẫn đổi, trả, bảo hành hoặc liên hệ 1900-6035 để
            được hướng dẫn thêm)
          </span>
          <br />
          <span className="title-footer">
            <b>Địa chỉ văn phòng:</b> 52 Út Tịch, phường 4, quận Tân Bình, thành
            phố Hồ Chí Minh.
          </span>
          <br />
          <span className="small-title">
            Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua
            và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
          </span>
          <br />
          <span className="title-footer">
            © 2016 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn
          </span>
          <br />
          <span className="title-footer">
            Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và
            Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010
          </span>
          <br />
        </div>
      </div>
    );
  }
}

export default Footer;
