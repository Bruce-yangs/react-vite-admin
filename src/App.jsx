import React from "react";
import { Layout, Calendar } from "antd";
import Menu from "./components/Menu";
import Header from "./components/Header";

const { Content } = Layout;
import "./index.css";

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  render() {
    return (
      <Layout>
        <Menu collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <Header toggle={this.toggle} />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {/* <Calendar onPanelChange={this.onPanelChange} /> */}
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
