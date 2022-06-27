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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link, useHistory } from "react-router-dom";
import http from "../../utils/http";

const { Title, Text } = Typography;


const RegistrationDetail = () => {
  const history = useHistory();
  const [registrationDetail, setRegistrationDetail] = useState()

  const { id } = useParams();

  useEffect(() => {
    const getRegistrationDetail = async () => {
      const response = await http.get('/admin/monitoring/detail/' + id);
      console.log('response', response.data);
      setRegistrationDetail(response.data);
    }
    getRegistrationDetail();
  }, [])

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
              style={{ paddingRight: 20 }}
              title="Detail Registration"
            >
              {/* <Form onFinish={onFinish} onFinishFailed={onFailed} style={{ paddingLeft: 24 }}>
                  <Form.Item label={'School Year'}>
                    <Input />
                  </Form.Item>
  
                  <Row justify="end" gutter={[10, 10]}>
                    <Form.Item>
                      <Button type="primary" style={{paddingLeft: 30, paddingRight: 30, marginRight: 10}}>SAVE</Button>
                    </Form.Item>
                    <Button onClick={() => history.push('/school-year')} type="ghost" style={{paddingLeft: 30, paddingRight: 30}}>Back</Button>
                  </Row>
                </Form> */}

              <Row>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Ticket Number</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.ticketNumber}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>NIK</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.idNumber}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Nama Lengkap</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.fullname}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Agama</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.religion?.name}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Nama Panggilan</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.nickname}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Golongan Darah</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.bloodType}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Tanggal Lahir</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.birthDate}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Tempat Lahir</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.birthPlace}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Anak Ke-</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.childStatus}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Jenis</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.gender}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Alamat</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.address}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Nomor Telepon</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.phoneNumber}</Text>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Group</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.group}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Mutation In</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.mutationIn}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Mutation Out</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.mutationOut}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Mutation Origin</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.mutationOrigin}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Mutation To</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.mutationTo}</Text>
                    </Col>


                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Akte Kelahiran</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>

                      <Text style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }} onClick={async () => {
                        const base64 = registrationDetail?.studentRegistration?.birthCertificate?.file
                        const fileName = registrationDetail?.studentRegistration?.birthCertificate?.name;
                        const href = `data:${{ type: registrationDetail?.studentRegistration?.birthCertificate?.type }};base64,${base64}`
                        const link = document.createElement('a');
                        link.href = href;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>{registrationDetail?.studentRegistration?.birthCertificate?.name}</Text>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Kartu Keluarga</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }} onClick={async () => {
                        const base64 = registrationDetail?.studentRegistration?.familyCard?.file
                        const fileName = registrationDetail?.studentRegistration?.familyCard?.name;
                        const href = `data:${{ type: registrationDetail?.studentRegistration?.familyCard?.type }};base64,${base64}`
                        const link = document.createElement('a');
                        link.href = href;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>{registrationDetail?.studentRegistration?.familyCard?.name}</Text>
                    </Col>


                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Approval Document</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Tag color={registrationDetail?.approvalDoc ? 'success' : 'error'}>
                        {registrationDetail?.approvalDoc ? 'VERIFIED' : 'NOT VALID'}
                      </Tag>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Bukti Pembayaran</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }} onClick={async () => {
                        const base64 = registrationDetail?.studentRegistration?.proofOfPayment?.file
                        const fileName = registrationDetail?.studentRegistration?.proofOfPayment?.name;
                        const href = `data:${{ type: registrationDetail?.studentRegistration?.proofOfPayment?.type }};base64,${base64}`
                        const link = document.createElement('a');
                        link.href = href;
                        link.download = fileName;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}>{registrationDetail?.studentRegistration?.proofOfPayment?.name}</Text>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Approval Payment</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Tag color={registrationDetail?.approvalPayment ? 'success' : 'error'}>
                        {registrationDetail?.approvalPayment ? 'PAID' : 'NOT YET PAID'}
                      </Tag>
                    </Col>

                  </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingTop: 30 }}>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Nama Ibu</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.motherName}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Alamat Ibu</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.motherAddress}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Pendidikan Ibu</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.motherEducation === 1 && 'SMA'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherEducation === 2 && 'S1'}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Pekerjaan Ibu</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 1 && 'Wirausaha'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 2 && 'Dokter'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 3 && 'Polisi'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 4 && 'Guru'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 5 && 'Tentara'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 6 && 'Pengacara'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 7 && 'Ibu Rumah Tangga'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.motherOccupation === 8 && 'Sekretaris'}</Text>
                    </Col>

                  </Row>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ paddingTop: 30 }}>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Nama Ayah</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.fatherName}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Alamat Ayah</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.fatherAddress}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Pendidikan Ayah</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.fatherEducation === 1 && 'SMA'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherEducation === 2 && 'S1'}</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text style={{ fontWeight: "bold" }}>Pekerjaan Ayah</Text>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ marginBottom: 20 }}>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 1 && 'Wirausaha'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 2 && 'Dokter'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 3 && 'Polisi'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 4 && 'Guru'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 5 && 'Tentara'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 6 && 'Pengacara'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 7 && 'Ibu Rumah Tangga'}</Text>
                      <Text>{registrationDetail?.studentRegistration?.fatherOccupation === 8 && 'Sekretaris'}</Text>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RegistrationDetail;
