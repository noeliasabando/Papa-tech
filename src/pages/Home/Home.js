import React from "react";
import { Row, Col, Input } from "antd";
import "./Home.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  return (
    <Row className="home">
      <Col span={24}>
        <Row justify="center">
          <Col className="home__input">
            <Search
              size="large"
              placeholder="Buscar producto"
              allowClear
              onSearch={onSearch}
              style={{ width: 400 }}
            />
          </Col>
        </Row>
        <ProductCard />
      </Col>
    </Row>
  );
};

export default Home;
