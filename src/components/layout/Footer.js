import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa" }}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright">
          Annida Ul Hasanah © 2022 
          {/* by
          <a href="#" className="font-weight-bold" target="_blank">
            IMRONDEV
          </a>
          for a better web. */}
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
          <div className="footer-menu">
            <ul>
              <li className="nav-item">
                <a 
                  href="#"
                  className="nav-link text-muted"
                  target="_blank">
                  Annida Ul Hasanah
                </a>
              </li>
            
            </ul>
          </div>
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
