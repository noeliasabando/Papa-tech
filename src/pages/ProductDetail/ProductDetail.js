import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "antd";
import { addToCart, removeFromCart, selectCart } from "../../features/cartSlice";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useLocation().state.info;
  const infoProduct = useSelector(selectCart);

  return (
    <Row justify="center" className="productDetail">
      <Col span={10} className="productDetail__card">
        <div className="productDetail__title">Detalles del producto</div>
        <Row>
          <Col
            span={window.location.pathname === "/" ? 6 : 24}
            key={product.tail}
          >
            <div className="productDetail__containerImg">
              <img
                className="productDetail__img"
                src={product.image}
                alt="imagen"
              />
            </div>
            <div className="productDetail__name">{product.name}</div>
            <div className="productDetail__text">
              Personaje: {product.character}
            </div>
            <div className="productDetail__text">
              Serie de juegos: {product.gameSeries}
            </div>
            <div className="productDetail__text">
              Serie de amiibos: {product.amiiboSeries}
            </div>
            <div className="productDetail__price">Precio: ${product.price}</div>
            <div>
              <Button
                className="productDetail__button"
                shape="round"
                type="primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Agregar al carrito +
              </Button>
              <Button
                className="productDetail__button"
                shape="round"
                onClick={() => dispatch(removeFromCart(product))}
                disabled={infoProduct.length < 1}
              >
                Quitar del carrito -
              </Button>
            </div>
          </Col>
        </Row>
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
