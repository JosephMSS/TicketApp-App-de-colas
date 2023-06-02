import { SaveOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export const Ingresar = () => {
  return (
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
  );
};
