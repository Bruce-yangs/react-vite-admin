import React, { useState,useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import {
  Link
} from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const rootSubmenuKeys = ["1"];
// const rootSubmenuKeys = ["sub1", "sub2"];


const SiderMenu = (props) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [current, setCurrent] = useState('1');


  useEffect(() => { 
    console.log(2222);
    const curMenu = localStorage.getItem('curMenu');
    const currentKey = localStorage.getItem('current');
    if (curMenu) {
      setOpenKeys(curMenu);
    }
    setCurrent(currentKey)
  },[])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
   
    console.log(keys);
  };
  const handleClick = e => {
    console.log('click ', e);
    setCurrent(e.key)
    console.log(current);
    if (e.keyPath.length>=2) {
      localStorage.setItem('curMenu',e.keyPath[e.keyPath.length-1]);
    } else {
      localStorage.setItem('curMenu','');
    }
    localStorage.setItem('current',e.key);
    // this.setState({
    //   current: e.key,
    // });
  };

  

  return (
    
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      onClick={handleClick}
      onOpenChange={onOpenChange}
      selectedKeys={[current]}
    >
      {/* defaultSelectedKeys={["sub2"]} */}

      <Menu.Item key="1" icon={<PieChartOutlined />}>
        
        <Link to="/index">Option 1</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">Tom</Menu.Item>
        <Menu.Item key="4">Bill</Menu.Item>
        <Menu.Item key="5">Alex</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        <Menu.Item key="6">Team 1</Menu.Item>
        <Menu.Item key="8">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<FileOutlined />}>
        Files
      </Menu.Item>
    </Menu>
  );
};
class Home extends React.Component {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
 
  // componentWillMount() {
  //   console.log(1111);
  // }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          onCollapse={() => this.toggleCollapsed()}
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <SiderMenu />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggleCollapsed,
              }
            )}
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;
