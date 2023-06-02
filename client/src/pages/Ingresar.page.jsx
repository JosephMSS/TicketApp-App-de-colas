import { SaveOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
const { Title, Text } = Typography;
import { useNavigate } from "react-router-dom";
import { useHideMenu } from "../hooks/useHideMenu";
import { UserStorage } from "../utils";
import { useEffect, useState } from "react";
export const Ingresar = () => {
  useHideMenu({ ocultar: false });
  const navigate = useNavigate();
  const [usuario] = useState(UserStorage.find());
  const onFinish = ({ escritorio, agente }) => {
    UserStorage.create({ escritorio, agente });

    navigate("/escritorio");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    if (usuario.agente && usuario.escritorio) {
      navigate("/escritorio");
    }
  }, []);

  return (
    <>
      <Title>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del Agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Por favor ingrese el número de escritorio",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
