import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { selectCart } from "../../features/cartSlice";
import ConfirmModal from "../../components/ConfirmModal/CofirmModal";
import "./Checkout.scss";

const Checkout = () => {
  const infoProduct = useSelector(selectCart);
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

  let sum = infoProduct.reduce((accumulator, product) => {
    return accumulator + product.price;
  }, 0);

  return (
    <Row justify="center" className="checkout">
      <Col span={10} className="checkout__card">
        <ConfirmModal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
        <Row>
          <Col span={23} className="checkout__title">Detalle de tu compra</Col>
        </Row>
        <Row>
          {infoProduct &&
            infoProduct.map((info) => (
              <>
                <Col span={14} className="checkout__text">
                  * {info.name}
                </Col>
                <Col className="checkout__text">${info.price}</Col>
              </>
            ))}
        </Row>
        {infoProduct.length < 1 && (
          <Row>
            <Col span={23} className="checkout__text">
              Aún no has agregado productos
            </Col>
          </Row>
        )}
        <Row>
          <Col className="checkout__total" span={22}>
            Total ${sum}
          </Col>
        </Row>
        <Row>
          <Col className="checkout__total" span={22}>
            <Button
              type="primary"
              shape="round"
              onClick={showModal}
              disabled={infoProduct.length < 1}
            >
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
