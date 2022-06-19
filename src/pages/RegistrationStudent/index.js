import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Typography,
  Space,
  Tag,
} from "antd";

import { Link, useHistory } from "react-router-dom";

const { Title } = Typography;


const data = [
  {
    key: '1',
    idNumber: '13454534',
    fullname: 'John Brown',
    birthDate: '2017-09-02',
    gender: 'L',
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    idNumber: '13455234',
    fullname: 'Jim Green',
    birthDate: '2017-09-02',
    gender: 'P',
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    idNumber: '13455234',
    fullname: 'Joe Black',
    birthDate: '2017-09-02',
    age: 32,
    gender: 'P',
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const RegistrationStudent = () => {
  const history = useHistory();

  const columns = [
    {
      title: 'ID Number',
      dataIndex: 'idNumber',
      key: 'idNumber',
      render: (text) => <a onClick={() => history.push('/registration-student/38uhur')}>{text}</a>,
    },
    {
      title: 'Full Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Birth Date',
      dataIndex: 'birthDate',
      key: 'birtDate',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            if (tag === 'loser') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  
  ];

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
              // extra={
              //   <>
              //     <Radio.Group onChange={onChange} defaultValue="a">
              //       <Radio.Button value="a">All</Radio.Button>
              //       <Radio.Button value="b">ONLINE</Radio.Button>
              //     </Radio.Group>
              //   </>
              // }
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

export default RegistrationStudent;
