import React, { useState } from "react";
import {
  Link
} from "react-router-dom";
import { Form, Input, Button, Checkbox,Modal } from 'antd';
import { useHistory } from "react-router-dom";
import "./login.css";
const Demo = () => {
  let history = useHistory();
  const onFinish = (values) => {
    console.log('Success:', values);
    history.push('/index')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ username: '123' ,password:'123',remember:true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};


export default class App extends React.Component {
  state = {
    loading: false,
    visible: true,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      this.props.history.push('/index')
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div className="login-container">
        <Modal
          visible={visible}
          title="Login"
          closable={false} mask={false} maskClosable={false} 
          footer={null}
        >
          <Demo />
        </Modal>
      </div>
    );
  }
}

