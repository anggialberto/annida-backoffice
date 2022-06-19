import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Typography,
    Space,
    Tag,
    Button,
    Form,
    Input,
  } from "antd";
  
  import { Link } from "react-router-dom";
  
  const { Title } = Typography;
  
  
  
  
  const EditSchoolYear = () => {
  
    const onFinish = (values) => {
      console.log('onFinish', values);
    }
  
    const onFailed = (values) => {
      console.log('onFailed', values);
    }
  
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox mb-24"
                style={{paddingRight: 20}}
                title="Add School Year"
              >
                <Form onFinish={onFinish} onFinishFailed={onFailed} style={{paddingLeft: 24}}>
                  <Form.Item label={'School Year'}>
                    <Input />
                  </Form.Item>
  
                  <Row justify="end" gutter={[10, 10]}>
                  <Form.Item>
                    <Button type="primary" style={{paddingLeft: 30, paddingRight: 30, marginRight: 10}}>UPDATE</Button>
                  </Form.Item>
                  <Button type="ghost" style={{paddingLeft: 30, paddingRight: 30}}>Back</Button>
                </Row>

                </Form>
                
              </Card>
  
            
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default EditSchoolYear;
  