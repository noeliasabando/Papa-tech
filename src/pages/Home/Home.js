import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import "./Home.scss";

const Home = () => {
  const price = Math.floor(Math.random() * 100000);
  return (
    <Row className="home">
      <Col span={6}>
        <div className="home__containerImg">
          <img className="home__img" src="/img_admin.jpg" alt="imagen" />
          <div className="home__detail">
            <Link to="detail">
              <Button style={{ color: '#1890ff', fontSize: '18px' }} type="text">Ver detalles</Button>
            </Link>
          </div>
        </div>
        <div className="home__price">
          ${price}
          <span></span>
        </div>
        <div>
          <Button className="home__button" shape="round" type="primary">
            Agregar al carrito +
          </Button>
          <Button className="home__button" shape="round">
            Quitar del carrito -
          </Button>
        </div>
      </Col>
      <Col span={6}>
        <div>
          <img className="home__img" src="/img_admin.jpg" alt="imagen" />
        </div>
        <div>${price}</div>
        <div>agregar o elimiar</div>
      </Col>
      <Col span={6}>
        <div>
          <img className="home__img" src="/img_admin.jpg" alt="imagen" />
        </div>
        <div>${price}</div>
        <div>agregar o elimiar</div>
      </Col>
      <Col span={6}>
        <div>
          <img className="home__img" src="/img_admin.jpg" alt="imagen" />
        </div>
        <div>${price}</div>
        <div>agregar o elimiar</div>
      </Col>
    </Row>
  );
};

export default Home;
