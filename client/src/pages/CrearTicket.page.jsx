import { CloudDownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useSocketContext } from "../context";
import { useState } from "react";
import { Ticket } from "../models";
const { Text, Title } = Typography;
export const CrearTicket = () => {
  useHideMenu({ ocultar: true });
  const { socket } = useSocketContext();
  const emptyTicket = new Ticket();
  const [ticket, setTicket] = useState(emptyTicket);
  const handleCreateNewTicket = () => {
    socket.emit("solicitar-ticket", null, (ticket) => {
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
      {ticket.number && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Su número:</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};
