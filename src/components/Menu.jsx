import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Link, NavLink
} from "react-router-dom";

const { Sider } = Layout;

class MenuList extends React.Component {

  render() {
    return (
        <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="/index">用户列表</NavLink>
              {/* <Link to="/index">nav 1detail</Link> */}
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <NavLink to="/login">nav /login</NavLink>
              {/* <Link to="/login">nav /login</Link> */}
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
    );
  }
}

export default MenuList;
