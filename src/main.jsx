import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ConfigProvider } from 'antd';
import Router from './router';
// import { Router, Route, Link } from 'react-router'


import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/dist/locale/zh-cn';
import moment from 'moment';
import 'antd/dist/antd.css';
import './index.css'

moment.locale('zh-cn');

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
    {/* <Router routes={routes} > */}
      <Router />
      {/* <App /> */}
    {/* </Router> */}
    </React.StrictMode>
  </ConfigProvider>,
  document.getElementById("root")
);
