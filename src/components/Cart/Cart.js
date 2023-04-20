import React from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", quantity: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes["total-summary"]}>
        <h3>Total Amount</h3>
        <h3>$352.99</h3>
      </div>
      <div className={classes.buttons}>
        <button className={classes["close-btn"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes["order-btn"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
