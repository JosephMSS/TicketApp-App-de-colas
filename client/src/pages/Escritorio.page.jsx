import { CloseCircleOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { useEffect, useState } from "react";
import { UserStorage } from "../utils";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
export const Escritorio = () => {
  useHideMenu({ ocultar: false });
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(UserStorage.find());

  useEffect(() => {
    if (!usuario.agente && !usuario.escritorio) {
      navigate("/ingresar", { replace: true });
    }
  }, [usuario]);

  const USER_NAME = usuario.agente;
  const DESKTOP_NUMBER = usuario.escritorio;
  const TICKET_NUMBER = 2;
  const handleExit = () => {
    UserStorage.delete();
    setUsuario(UserStorage.find());
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
