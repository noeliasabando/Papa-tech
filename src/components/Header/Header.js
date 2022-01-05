import React from "react";
import { Row, Col } from "antd";
import Cart from "../Dropdown/Cart";
import "./Header.scss";

const Header = () => {

  return (
    <Row className="header" justify="center">
      <Col className="header__title" span={22}>
        Proyecto Papa Tech
      </Col>
      <Col className="header__cart">
        <Cart />
      </Col>
    </Row>
  );
};

export default Header;
