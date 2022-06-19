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
} from "antd";

import { Link, useHistory} from "react-router-dom";

const { Title } = Typography;

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'School Year',
    dataIndex: 'schoolYear',
    key: 'schoolYear',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    id: '13454534',
    schoolYear: '2017-09-02',
  },
  {
    key: '2',
    id: '13455234',
    schoolYear: '2017-09-02',
  },
  {
    key: '3',
    id: '13455234',
    schoolYear: '2017-09-02',
  },
];


const SchoolYear = () => {
  const history = useHistory();
  
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              style={{paddingRight: 20}}
              title="Pendaftar"
              extra={
                <>
                  <Button onClick={() => {history.push('/school-year/add')}} type="primary">ADD SCHOO YEAR</Button>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={true}
                  className="ant-border-space"
                />
              </div>
            </Card>

          
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SchoolYear;
