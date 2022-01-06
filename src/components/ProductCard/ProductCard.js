import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, selectCart } from "../../features/cartSlice";
import "./ProductCard.scss";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  const infoProduct = useSelector(selectCart);

  return (
    <Row>
      {products &&
        products.map((product) => (
          <Col
            span={window.location.pathname === "/" ? 6 : 24}
            key={product.tail}
          >
            <div className="productCard__containerImg">
              <img
                className="productCard__img"
                src={product.image}
                alt="imagen"
              />
              {window.location.pathname === "/" && (
                <div className="productCard__detail">
                  <Link to="detail" state={{ info: product }}>
                    <Button
                      style={{
                        color: "white",
                        fontSize: "18px",
                        borderRadius: "10px",
                      }}
                      type="primary"
                    >
                      Ver detalles
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <div className="productCard__name">{product.name}</div>
            <div className="productCard__price">Precio: ${product.price}</div>
            <div>
              <Button
                className="productCard__button"
                shape="round"
                type="primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Agregar al carrito +
              </Button>
              <Button
                className="productCard__button"
                shape="round"
                onClick={() => dispatch(removeFromCart(product))}
                disabled={infoProduct.length < 1}
              >
                Quitar del carrito -
              </Button>
            </div>
          </Col>
        ))}
    </Row>
  );
};

export default ProductCard;
