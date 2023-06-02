import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { data } from "../mock";
import { useHideMenu } from "../hooks/useHideMenu";
const { Title, Text } = Typography;
export const Cola = () => {
  useHideMenu({ ocultar: true });
  return (
    <>
      <Title level={1}>Atendiendo al cliente</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                      <Tag color="volcano">{item.agente}</Tag>,
                      <Tag color="magenta">Escritorio: {item.escritorio}</Tag>,
                    ]}
                  >
                    <Title>No.{item.ticketNo}</Title>
                  </Card>
                </List.Item>
              );
            }}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => {
              return (
                <List.Item>
                  <List.Item.Meta
                    title={`Ticket No.${item.ticketNo}`}
                    description={
                      <>
                        <Text type="secondary">En el escritorio: </Text>
                        <Tag color="magenta">{item.ticketNo}</Tag>
                        <Text type="secondary">Agente: </Text>
                        <Tag color="volcano">{item.agente}</Tag>
                      </>
                    }
                  />
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
    </>
  );
};
