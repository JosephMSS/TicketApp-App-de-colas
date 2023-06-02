import { CloudDownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useSocketContext } from "../context";
import { useState } from "react";
const { Text, Title } = Typography;
export const CrearTicket = () => {
  useHideMenu({ ocultar: true });
  const { socket } = useSocketContext();
  const emptyTicket = {
    id: undefined,
    number: undefined,
    escritorio: undefined,
    agente: undefined,
  };
  const [ticket, setTicket] = useState(emptyTicket);
  const handleCreateNewTicket = () => {
    console.log("handleCreateNewTicket");
    socket.emit("solicitar-ticket", null, (ticket) => {
      console.log(
        "🚀 ~ file: CrearTicket.page.jsx:15 ~ socket.emit ~ ticket:",
        ticket
      );
      setTicket(ticket);
    });
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
            {ticket.number}
          </Text>
        </Col>
      </Row>
    </>
  );
};
