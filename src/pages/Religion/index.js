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
  message,
} from "antd";
import { useEffect, useState } from "react";

import { Link, useHistory} from "react-router-dom";
import http from "../../utils/http";

const { Title } = Typography;


const Religion = () => {
  const history = useHistory();
  const [modalDelete, setModalDelete] = useState({
    visible: false,
    selectedId: '',
  });
  const [religion, setReligion] = useState([]);
  const [fetching, setFetching] = useState(false);

  const getReligion = async () => {
    setFetching(true);
    const response = await http.get('/religion', {})
    setReligion(response)
    setFetching(false)
  }

  useEffect(() => {
    getReligion();
  }, [JSON.stringify])

  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
      render: (text, record, index) => <p>{index+1}</p>,
    },
    {
      title: 'Religion',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
    {
      title: 'Last Updated',
      dataIndex: 'updatedDate',
      key: 'updatedDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, index) => {
        return (
          <div style={{ display: 'flex', gap: 10 }}>
            <Button type="primary" onClick={() => history.push('/religion/edit/' + record.id)}>Update</Button>
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
              title="Religion"
              extra={
                <>
                  <Button onClick={() => {history.push('/religion/add')}} type="primary">Add Religion</Button>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  loading={fetching}
                  dataSource={religion?.data}
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
        title="Delete Religion"
        onOk={null}
        onCancel={null}
        footer={null}
      >
        {<p style={{fontWeight: "bold"}}>Are you sure?</p>}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 20, paddingTop: 20}}>
          <Button type="primary"  onClick={() => {
            http.delete('/religion/' + modalDelete.selectedId, {})
            setModalDelete({visible: false, selectedId: ''})
            message.info('Success Delete Religion')
            getReligion();
          }}>Submit</Button>
          <Button type="ghost" onClick={() => {
            setModalDelete({visible: false, reason: '', selectedId: ''})
          }}>Cancel</Button>
        </div>
      </Modal>

      
    </>

    
  );
}

export default Religion;
