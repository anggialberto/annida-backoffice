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
  Modal,
  Input,
} from "antd";
import { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import http from "../../utils/http";

const { Title } = Typography;

const RegistrationStudent = () => {
  const history = useHistory();
  const [modalReject, setModalReject] = useState({
    visible: false,
    reason: '',
    selectedId: '',
  });
  const [modalAprove, setModalApprove] = useState({visible: false, selectedId: ''});
  const [queryParams, setQueryParams] = useState({
    page: 0,
    size: 3,
    sortBy: 'createdDate',
    prefix: 'DESC'
  })
  const [registrationStudents, setRegistrationStudents] = useState([]);
  const [fetching, setFetching] = useState(false);

  const getRegistrationStudents = async () => {
    setFetching(true);
    const response = await http.get('/monitoring', {
      params: queryParams
    })
    setRegistrationStudents(response)
    setFetching(false)
  }

  useEffect(() => {
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
      key: 'approvalDocStatus',
      dataIndex: 'approvalDocStatus',
      render: (text, record, index) => {
        console.log('log approvalDoc', text);
        const status = () => {
          switch (text) {
            case 0:
              return {
                message: 'Waiting Approval Document',
                color: 'lime'
              }
            case 1:
              return {
                message: 'Waiting Approval Payment',
                color: 'lime'
              }
            case 2:
              return {
                message: 'Approved',
                color: 'success'
              }
            case 3:
              return {
                message: 'Reject',
                color: 'error'
              }
            case 4:
              return {
                message: 'Pending',
                color: 'orange'
              }
            case 5:
              return {
                message: 'Failed',
                color: 'error'
              }
            case 6:
              return {
                message: 'Invalid Data',
                color: 'yellow'
              }
            case 7:
              return {
                message: 'Document Data has been updated',
                color: 'blue'
              }
            case 8:
              return {
                message: 'Payment Data has been updated',
                color: 'blue'
              }
          }
        }

        return (
          <Tag color={status().color} key={index}>
            {status().message}
          </Tag>
        )
      }
      
    },
    {
      title: 'Approval Payment',
      key: 'approvalPaymentStatus',
      dataIndex: 'approvalPaymentStatus',
      render: (text, record, index) => {
        const status = () => {
          switch (text) {
            case 0:
              return {
                message: 'Waiting Approval Document',
                color: 'lime'
              }
            case 1:
              return {
                message: 'Waiting Approval Payment',
                color: 'lime'
              }
            case 2:
              return {
                message: 'Approved',
                color: 'success'
              }
            case 3:
              return {
                message: 'Reject',
                color: 'error'
              }
            case 4:
              return {
                message: 'Pending',
                color: 'orange'
              }
            case 5:
              return {
                message: 'Failed',
                color: 'error'
              }
            case 6:
              return {
                message: 'Invalid Data',
                color: 'yellow'
              }
            case 7:
              return {
                message: 'Document Data has been updated',
                color: 'blue'
              }
            case 8:
              return {
                message: 'Payment Data has been updated',
                color: 'blue'
              }
          }
        }

        return (
          <Tag color={status().color} key={index}>
            {status().message}
          </Tag>
        )
      }
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (text, record, index) => {
        const status = () => {
          switch (text) {
            case 0:
              return {
                message: 'Waiting Approval Document',
                color: 'lime'
              }
            case 1:
              return {
                message: 'Waiting Approval Payment',
                color: 'lime'
              }
            case 2:
              return {
                message: 'Approved',
                color: 'success'
              }
            case 3:
              return {
                message: 'Reject',
                color: 'error'
              }
            case 4:
              return {
                message: 'Pending',
                color: 'orange'
              }
            case 5:
              return {
                message: 'Failed',
                color: 'error'
              }
            case 6:
              return {
                message: 'Invalid Data',
                color: 'yellow'
              }
            case 7:
              return {
                message: 'Document Data has been updated',
                color: 'blue'
              }
            case 8:
              return {
                message: 'Payment Data has been updated',
                color: 'blue'
              }
          }
        }

        return (
          <Tag color={status().color} key={index}>
            {status().message}
          </Tag>
        )
      }
    },
  
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => {
        console.log('approvalDocStatus' + index, record.approvalDocStatus);
        console.log('approvalDocStatus' + index, record.approvalPaymentStatus);

        return (
          <div style={{ display: 'flex', gap: 10 }}>
            {([0, 1, 2, 7, 8].includes(record.approvalDocStatus) && [0, 1, 7, 8].includes(record.approvalPaymentStatus)) && <Button type="primary" onClick={() => {
              setModalApprove({...modalAprove, visible: true, selectedId: record.id})
            }}>Approve</Button>}
            {([0, 1, 2, 7, 8].includes(record.approvalDocStatus) && [0, 1, 7, 8].includes(record.approvalPaymentStatus)) && <Button type="primary" danger onClick={() => {
              setModalReject({...modalReject, visible: true, selectedId: record.id})
            }}>Reject</Button>}

          </div>
        )
      }
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
              style={{ paddingRight: 20 }}
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


      <Modal
        visible={modalReject.visible}
        title="Reject"
        onOk={null}
        onCancel={null}
        footer={null}
      >
        <p style={{fontWeight: "bold"}}>Reason</p>
        <Input.TextArea value={modalReject.reason} onChange={(e) => {
          console.log('Input.TextArea', e);
          setModalReject({...modalReject, reason: e.target.value})
        }} style={{ maxHeight: 200, minHeight: 200 }}></Input.TextArea>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 20, paddingTop: 20}}>
          <Button type="primary" disabled={!modalReject.reason.length} onClick={() => {
            http.post('/admin/monitoring/reject/', {
              id: modalReject.selectedId,
              reason: modalReject.reason
            })
            setModalReject({visible: false, reason: '', selectedId: ''})
            getRegistrationStudents();
          }}>Submit</Button>
          <Button type="ghost" onClick={() => {
            setModalReject({visible: false, reason: '', selectedId: ''})
          }}>Cancel</Button>
        </div>

      </Modal>


      <Modal
        visible={modalAprove.visible}
        title="Approve"
        onOk={null}
        onCancel={null}
        footer={null}
      >
        <p style={{fontWeight: "bold"}}>Apakah anda yakin melakukan approve?</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 20, paddingTop: 20}}>
          <Button type="primary" onClick={() => {
            http.post('/admin/monitoring/approve/' + modalAprove.selectedId)
            setModalApprove({visible: false, selectedId: ''})
            getRegistrationStudents();
          }}>Submit</Button>
          <Button type="ghost" onClick={() => {
            setModalApprove({visible: false, selectedId: ''})

          }}>Cancel</Button>
        </div>

      </Modal>


    </>
  );
}

export default RegistrationStudent;
