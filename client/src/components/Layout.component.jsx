import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout as AntLayout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Sider, Content } = AntLayout;
export const Layout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <AntLayout style={{ height: "100vh" }}>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/ingresar">Ingresar</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to="/cola">Cola</Link>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <Link to="/crear-ticket">Crear Ticket</Link>,
            },
          ]}
        />
      </Sider>
      <AntLayout>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
};
