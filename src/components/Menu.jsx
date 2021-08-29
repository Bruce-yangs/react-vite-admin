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
// @withRouter
class MenuList extends React.Component {
  // constructor(props) {
  //   console.log(props.match);   

  //   super(props);
  //   this.state={
  //     url: '' 
  //   }

  // }
  state={
        url: '' 
      }

   getPathname =()=> {
    console.log(this.props);  
    // console.log(this.props.match);   

    // const location = useLocation();
    // console.log(location.pathname);
    // console.log(this.props.location.pathname);  
    // this.setState({
    //   url: this.props.location.pathname
    // })
  }
  componentDidMount(){
    this.getPathname()
  }

  render() {
    return (
        <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]}>
            <Menu.Item key="/index" icon={<UserOutlined />}>
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
