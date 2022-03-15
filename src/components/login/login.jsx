import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import Register from "../register/register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useState } from "react";


const Login = () => {
  const [showSignup, setShowSignup] = useState(true)
  const handleSignup = ()=>{
    setShowSignup(false)
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 

  return (

    <>

      
      
      {showSignup === true ? (
        <>
          <h1 style={{ "justify-content": "center" }}>Login Page</h1>
      
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
              message: "Please input your username!",
            },
          ]}
        >

          <Input  />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password  />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Checkbox style={{ "justify-content": "center"}}>
            Remember me
          </Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ "justify-content": "center"}}
          >
            Login
          </Button>
          <br />
          <br />
          <div style={{ "justify-content": "center"}}>
            Don't have an account? Register one!
          </div>
          <br />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{ "justify-content": "center"}}
          onClick={handleSignup}
        >
          Register
        </Button>



      </Form>
      </>
      ):<Register />}
      

    </>
  );
};
export default Login;
//ReactDOM.render(<Demo />, document.getElementById('container'));