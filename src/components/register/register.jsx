import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Form, Input, Button, Space} from 'antd';
import { useState } from "react";
import Login from "../login/login";
import Supplyer from "../supplyer/supplyer";


const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [showSignup, setShowSignup] = useState(true)
  const handleSignup = ()=>{
    setShowSignup(false)
  }

  
  return (

    <>
      {/* <h1 style={{ "justify-content": "center" }}>Login Page</h1> */}
      {showSignup === true ? (
        <>
          <h1 style={{ "justify-content": "center" }}>Register Page</h1>
          <Form
     style={{m:100}}
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
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
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
        {/* <Button type="primary" htmlType="submit">
          Register
        </Button> */}
        <Button
          type="primary"
          htmlType="submit"
          style={{ "justify-content": "center"}}
          onClick={handleSignup}
        >
          Register
        </Button>
        <br/>
        <br/>

        <Button
          type="primary"
          htmlType="submit"
          style={{ "justify-content": "center"}}
          onClick={handleSignup}
        >
          supplyer
        </Button>

      </Form.Item>
    </Form>
        </>


        
    ):<Supplyer />}
      

      </>

  );
};

export default Register