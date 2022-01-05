import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductDetail.scss";

const ProductDetail = () => {
  return (
    <Row justify="center" className="productDetail">
      <Col span={10} className="productDetail__card">
        <div className="productDetail__title">Detalles del producto</div>
        <ProductCard />
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
