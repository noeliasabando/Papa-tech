import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const price = Math.floor(Math.random() * 100000);

  return (
    <Row justify="center" className="productDetail">
      <Col span={10} className="productDetail__card">
        <div className="productDetail__title">Detalles del producto</div>
        <div className="productDetail__containerImg">
          <img
            className="productDetail__img"
            src="/img_admin.jpg"
            alt="imagen"
          />
        </div>
        <div className="productDetail__price">
          Precio: ${price}
          <span></span>
        </div>
        <div>
          <Button className="productDetail__button" shape="round" type="primary">
            Agregar al carrito +
          </Button>
          <Button className="productDetail__button" shape="round">
            Quitar del carrito -
          </Button>
        </div>
        <Row justify="end">
          <Col span={6}>
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

export default ProductDetail;
