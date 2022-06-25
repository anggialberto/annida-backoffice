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
    message,
  } from "antd";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import { Link, useHistory} from "react-router-dom";
  import http from "../../utils/http";
  const { Title } = Typography;
  
  const EditReligion = () => {
    const history = useHistory();
    const [religion, setReligionById] = useState()
    const { id } = useParams();

    const [form] = Form.useForm();

    useEffect(() => {
      const getReligionById = async () => {
        const response = await http.get('/religion/' + id);
        console.log('response', response.data);
        setReligionById(response.data);
        form.setFieldsValue({
          religion : response.data.name
        })
      }
      getReligionById(id);
    }, [])
  
    const updateReligion = async (data) => {
      const response = await http.post('/religion', data)
      console.log('response data', response);
    }

    const onFinish = (values) => {
      const body = {...religion,name:values.religion}
      updateReligion(body)
      message.info('Update Religion Successfully')
      console.log('onFinish', body);
      history.push('/religion')
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
                title="Edit Religion"
              >
                <Form onFinish={onFinish} onFinishFailed={onFailed} style={{paddingLeft: 24}} form={form}>
                  <Form.Item label={'Religion'} name={'religion'}>
                    <Input />
                  </Form.Item>
  
                  <Row justify="end" gutter={[10, 10]}>
                  <Form.Item>
                    <Button type="primary" style={{paddingLeft: 30, paddingRight: 30, marginRight: 10}} htmlType='submit'>Update</Button>
                  </Form.Item>
                  <Button type="ghost" style={{paddingLeft: 30, paddingRight: 30}} onClick={() => history.push('/religion')}>Back</Button>
                </Row>

                </Form>
                
              </Card>
  
            
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default EditReligion;
  