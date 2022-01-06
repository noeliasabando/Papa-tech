import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {
  fetchProducts,
  selectProducts,
  selectFetchStatus,
  fetchProductsByName,
} from "../../features/productsSlice";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectFetchStatus);
  const { Search } = Input;

  const onSearch = (value) => dispatch(fetchProductsByName(value));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Row className="home">
      <Col span={24}>
        <Row justify="center">
          <Col className="home__input">
            <Search
              size="large"
              placeholder="Buscar producto"
              onSearch={onSearch}
              style={{ width: 400 }}
            />
          </Col>
        </Row>
        {status === "loading" && (
          <LoadingOutlined style={{ fontSize: "50px", margin: "80px auto" }} />
        )}
        <ProductCard products={products} />
      </Col>
    </Row>
  );
};

export default Home;
