import React from "react";
import {
  Link
} from "react-router-dom"

        
export default class Login extends React.Component {
  render() {
    return (
      <div>
        登录页
        <Link to="/index">去首页</Link>
      </div>
    );
  }
}
