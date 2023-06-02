import { CloseCircleOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
const { Title, Text } = Typography;
export const Escritorio = () => {
  const USER_NAME = "Joseph";
  const DESKTOP_NUMBER = 1;
  const TICKET_NUMBER = 2;
  const handleExit = () => {
    console.log("Salir");
  };
  const handleNextTicket = () => {
    console.log("Salir");
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{USER_NAME}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{DESKTOP_NUMBER}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" danger onClick={handleExit}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el ticket número: </Text>
          <Text style={{ fontSize: 30 }} type="danger ">
            {TICKET_NUMBER}
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={handleNextTicket} shape="round" type="primary">
            <DoubleRightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
