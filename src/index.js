import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
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
