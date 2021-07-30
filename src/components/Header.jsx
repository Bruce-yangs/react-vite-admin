import React from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

class Headers extends React.Component {
  render() {
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: this.props.toggle,
      })}
    </Header>
    );
  }
}

export default Headers;
