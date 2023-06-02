import { CloudDownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
const { Text, Title } = Typography;
export const CrearTicket = () => {
  const NEW_TICKET_NUMBER = 2;
  const handleCreateNewTicket = () => {
    console.log("handleCreateNewTicket");
  };
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title>Presione el botón para un nuevo ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<CloudDownloadOutlined />}
            size="large"
            onClick={handleCreateNewTicket}
          ></Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Su número:</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            {NEW_TICKET_NUMBER}
          </Text>
        </Col>
      </Row>
    </>
  );
};
