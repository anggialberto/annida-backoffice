import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Typography,
  Space,
  Tag,
  Modal,
  Button,
  message
} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useHistory} from "react-router-dom";
import http from "../../utils/http";

const { Title } = Typography;


const SchoolYear = () => {
  const history = useHistory();
  const [modalDelete, setModalDelete] = useState({
    visible: false,
    selectedId: '',
  });
  const [schoolYear, setSchoolYear] = useState([]);
  const [fetching, setFetching] = useState(false);

  const getSchoolYear = async () => {
    setFetching(true);
    const response = await http.get('/school-year', {})
    setSchoolYear(response)
    setFetching(false)
  }

  useEffect(() => {
    getSchoolYear();
  }, [JSON.stringify])

  const getSchoolYearById = async (id) => {
    const response = await axios.get(`http://localhost:8080/annida/religion/${id}`);
    return response;
  }

  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) => <p>{index+1}</p>,
    },
    {
      title: 'School Year',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      render: (text) => {
        return (
          <p>{new Intl.DateTimeFormat('id', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
          }).format(new Date(text))}</p>
        )
      } 
    },
    {
      title: 'Last Updated',
      dataIndex: 'updatedDate',
      key: 'updatedDate',
      render: (text) => {
        return (
          <p>{new Intl.DateTimeFormat('id', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
          }).format(new Date(text))}</p>
        )
      } 
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => {
        return (
          <div style={{ display: 'flex', gap: 10 }}>
            <Button type="primary" onClick={() => history.push('/school-year/edit/' + record.id)}>Update</Button>
            <Button type="danger" onClick={() => {setModalDelete({...modalDelete, visible: true, selectedId: record.id})}}>
              Delete
            </Button>
          </div>
        )
        

      }
    },
  ];
  
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
              title="School Year"
              extra={
                <>
                  <Button onClick={() => {history.push('/school-year/add')}} type="primary">Add School Year</Button>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  loading={fetching}
                  dataSource={schoolYear?.data}
                  pagination={true}
                  className="ant-border-space"
                />
              </div>
            </Card>

          
          </Col>
        </Row>
      </div>

      <Modal
        visible={modalDelete.visible}
        title="Delete School Year"
        onOk={null}
        onCancel={null}
        footer={null}
      >
        {<p style={{fontWeight: "bold"}}>Are you sure?</p>}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 20, paddingTop: 20}}>
          <Button type="primary"  onClick={async() => {
            const result = await http.delete('/school-year/' + modalDelete.selectedId, {})
            console.log('result', result)
            if(result.code >= 400) {
              message.error(result.message)
            } else {
              message.info('Success Delete School Year')
            }
            setModalDelete({visible: false, selectedId: ''})
            getSchoolYear();
          }}>Submit</Button>
          <Button type="ghost" onClick={() => {
            setModalDelete({visible: false, selectedId: ''})
          }}>Cancel</Button>
        </div>
      </Modal>
    </>
  );
}

export default SchoolYear;
