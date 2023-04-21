import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <CartItem />
      <div className={classes["total-summary"]}>
        <h3>Total Amount</h3>
        <h3>{totalAmount}</h3>
      </div>
      <div className={classes.buttons}>
        <button className={classes["close-btn"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes["order-btn"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
