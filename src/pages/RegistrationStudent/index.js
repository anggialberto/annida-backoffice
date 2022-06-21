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
import { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import http from "../../utils/http";

const { Title } = Typography;

const RegistrationStudent = () => {
  const history = useHistory();
  const [queryParams, setQueryParams] = useState({
    page: 0,
    size: 3,
    sortBy: 'createdDate',
    prefix: 'DESC'
  })
  const [registrationStudents, setRegistrationStudents] = useState([]);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    const getRegistrationStudents = async () => {
      setFetching(true);
      const response = await http.get('/monitoring', {
        params: queryParams
      })
      setRegistrationStudents(response)
      console.log('response get student', response);
      setFetching(false)
    }
    getRegistrationStudents();
  }, [JSON.stringify(queryParams)])

  const columns = [
    {
      title: 'Ticket Number',
      dataIndex: 'ticketNumber',
      key: 'ticketNumber',
      render: (text) => <a onClick={() => history.push('/registration-student/' + text)}>{text}</a>,
    },
    {
      title: 'Full Name',
      dataIndex: ['studentRegistration', 'fullname'],
      key: ['studentRegistration', 'fullname'],
    },
    {
      title: 'Birth Date',
      dataIndex: ['studentRegistration', 'birthDate'],
      key: ['studentRegistration', 'birthDate'],
    },
    {
      title: 'Gender',
      dataIndex: ['studentRegistration', 'gender'],
      key: ['studentRegistration', 'gender'],
    },
    {
      title: 'Group',
      dataIndex: ['studentRegistration', 'group'],
      key: ['studentRegistration', 'group'],
    },
    {
      title: 'Address',
      dataIndex: ['studentRegistration', 'address'],
      key: ['studentRegistration', 'address'],
    },
    {
      title: 'Phone Number',
      dataIndex: ['studentRegistration', 'phoneNumber'],
      key: ['studentRegistration', 'phoneNumber'],
    },
    {
      title: 'Approval Document',
      key: 'approvalDoc',
      dataIndex: 'approvalDoc',
      render: (text, record, index) => (
        <Tag color={text ? 'success' : 'error'} key={index}>
          {text ? 'VERIFIED' : 'NOT VALID'}
        </Tag>
      )
    },
    {
      title: 'Approval Payment',
      key: 'approvalPayment',
      dataIndex: 'approvalPayment',
      render: (text, record, index) => (
        <Tag color={text ? 'success' : 'error'} key={index}>
          {text ? 'PAID' : 'NOT YET PAID'}
        </Tag>
      )
    },

  ];

  const handleTableChange = (pagination, filters, sorter) => {
    setQueryParams({
      ...queryParams,
      page: pagination.current - 1,
      size: pagination.pageSize,
    });
  }

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
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  loading={fetching}
                  dataSource={registrationStudents?.data}
                  onChange={handleTableChange}
                  pagination={{
                    defaultCurrent: queryParams.page + 1,
                    defaultPageSize: queryParams.size,
                    total: registrationStudents?.totalData
                  }}
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
