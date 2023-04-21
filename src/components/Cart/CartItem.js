import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes["item-name"]}>
        <h3>Sushi</h3>
      </div>
      <div className={classes["item-desc"]}>
        <div className={classes["item-values"]}>
          <h4 className={classes.price}>$32.25</h4>
          <h4 className={classes.quantity}>x 5</h4>
        </div>
        <div className={classes["action-buttons"]}>
          <button className={classes["remove-btn"]}>-</button>
          <button className={classes["add-btn"]}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
