import { Layout, Row, Col } from "antd";
import { HeartFilled } from "@ant-design/icons";

function Footer() {
  const { Footer: AntFooter } = Layout;

  return (
    <AntFooter style={{ background: "#fafafa", width: '100%', textAlign:'center'}}>
      <Row className="just">
        <Col xs={24} md={12} lg={12}>
          <div className="copyright" style={{ textAlign:'left' }}>
            Copyright © 2022 <b style={{ color:"#6eca8f" }}>ANNIDA UL HASANAH</b>
          </div>
        </Col>
        <Col xs={24} md={12} lg={12}>
            
        </Col>
      </Row>
    </AntFooter>
  );
}

export default Footer;
