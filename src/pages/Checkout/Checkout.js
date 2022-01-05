import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Button } from "antd";
import ConfirmModal from "../../components/ConfirmModal/CofirmModal";
import "./Checkout.scss";

const Checkout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Row justify="center" className="checkout">
      <Col span={10} className="checkout__card">
        <ConfirmModal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
        <Row>
          <Col span={14} className="checkout__text">
            Nombre
          </Col>
          <Col className="checkout__text">Precio</Col>
        </Row>
        <Row>
          <Col span={14}>Nombre</Col>
          <Col>Precio</Col>
        </Row>
        <Row>
          <Col span={14}>Nombre</Col>
          <Col>Precio</Col>
        </Row>
        <Row>
          <Col className="checkout__total" span={22}>
            Total $23456
          </Col>
        </Row>
        <Row>
          <Col className="checkout__total" span={22}>
            <Button type="primary" shape="round" onClick={showModal}>
              Finalizar compra
            </Button>
          </Col>
        </Row>
        <Row justify="end">
          <Col span={6} className="checkout__keepBuying">
            <Link to="/">
              <Button type="primary" shape="round">
                Seguir comprando
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Checkout;
