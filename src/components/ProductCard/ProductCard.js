import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./ProductCard.scss";

const ProductCard = () => {
  const price = Math.floor(Math.random() * 100000);

  return (
    <Row>
      <Col span={window.location.pathname === "/" ? 6 : 24}>
        <div className="productCard__containerImg">
          <img className="productCard__img" src="/img_admin.jpg" alt="imagen" />
          {window.location.pathname === "/" && (
            <div className="productCard__detail">
              <Link to="detail">
                <Button
                  style={{ color: "#1890ff", fontSize: "18px" }}
                  type="text"
                >
                  Ver detalles
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="productCard__name">Nombre del producto</div>
        <div className="productCard__price">
          Precio: ${price}
          <span></span>
        </div>
        <div>
          <Button className="productCard__button" shape="round" type="primary">
            Agregar al carrito +
          </Button>
          <Button className="productCard__button" shape="round">
            Quitar del carrito -
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default ProductCard;
