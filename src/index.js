import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import App from "./App";
//import reportWebVitals from './reportWebVitals';
import Login from "./components/login/login";
import { Row, Col } from "antd";

ReactDOM.render(
  <>
    <Row>
      <Col span={8}></Col>
      <Col span={8}>
        <Login />
      </Col>
      <Col span={8}></Col>
    </Row>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();