import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, Dropdown, Button } from "antd";
import { ShoppingCartOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { selectCart, selectItemsInCart } from "../../features/cartSlice";

const Cart = () => {
  const infoProduct = useSelector(selectCart);
  const itemsQty = useSelector(selectItemsInCart);

  const menu = (
    <Menu>
      <Menu.Item key="1">
        {infoProduct && infoProduct.map((info) => <p>*{info.name}</p>)}
      </Menu.Item>
      {infoProduct.length < 1 && (
        <Menu.Item key="2">
          <p>No has agregado productos</p>
        </Menu.Item>
      )}
      <Menu.Item key="3">
        {infoProduct.length > 1 ? (
          <Link to="checkout">
            <Button type="text" icon={<ArrowRightOutlined />}>
              Ir a comprar
            </Button>
          </Link>
        ) : (
          <Button type="text" icon={<ArrowRightOutlined />} disabled>
            Ir a comprar
          </Button>
        )}
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
        icon={<ShoppingCartOutlined style={{ marginRight: "10px" }} />}
      >
        {itemsQty}
      </Button>
    </Dropdown>
  );
};

export default Cart;
