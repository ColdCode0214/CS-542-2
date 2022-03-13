//Register Page
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Menu, Dropdown, Space } from 'antd';



const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm the Password"
        name="Confirm the Password"
        rules={[
          {
            required: true,
            message: 'Please Confirm Your Password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Please choose your role"
        name="Please choose your role"
        rules={[
          {
            required: true,
            message: 'Please choose your role!',
          },
        ]}
      >
      <Space direction="vertical">
    <Space wrap>
        <Button>Supply Manager</Button>
        <Button>Delivery Manager</Button>
        <Button>Retailer Manager</Button>
    </Space>
  </Space>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

//ReactDOM.render(<Demo />, document.getElementById('container'),);
export default Demo;




