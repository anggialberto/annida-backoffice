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
  
  const EditSchoolYear = () => {
    const history = useHistory();
    const [schoolYear, setSchoolYearById] = useState()
    const { id } = useParams();

    const [form] = Form.useForm();

    useEffect(() => {
      const getSchoolYearById = async () => {
        const response = await http.get('/school-year/' + id);
        console.log('response', response.data);
        setSchoolYearById(response.data);
        form.setFieldsValue({
          content : response.data.content
        })
      }
      getSchoolYearById(id);
    }, [])
  
    const updateSchoolYear = async (data) => {
      const response = await http.post('/school-year', data)
      console.log('response data', response);
    }
  
    const onFinish = (values) => {
      const body = {...schoolYear,content:values.content}
      updateSchoolYear(body)
      message.info('Update School Year Successfully')
      console.log('onFinish', body);
      history.push('/school-year')
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
                title="Edit School Year"
              >
                <Form onFinish={onFinish} onFinishFailed={onFailed} style={{paddingLeft: 24}} form={form}>
                  <Form.Item label={'School Year'} name={'content'}>
                    <Input />
                  </Form.Item>
  
                  <Row justify="end" gutter={[10, 10]}>
                  <Form.Item>
                    <Button type="primary" style={{paddingLeft: 30, paddingRight: 30, marginRight: 10}} htmlType='submit'>Update</Button>
                  </Form.Item>
                  <Button type="ghost" style={{paddingLeft: 30, paddingRight: 30}} onClick={() => history.push('/school-year')}>Back</Button>
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
  