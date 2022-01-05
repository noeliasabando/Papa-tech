import React from "react";
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from "antd";
import { ShoppingCartOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Cart = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="https://www.antgroup.com">Info de cosas agregadas</a>
      </Menu.Item>
      <Menu.Item>
        <Link to="checkout">
          <Button type="text" icon={<ArrowRightOutlined />}>
            Ir a comprar
          </Button>
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button
        block
        type="primary"
        size="large"
        shape="round"
        icon={<ShoppingCartOutlined />}
      >
        22
      </Button>
    </Dropdown>
  );
};

export default Cart;
