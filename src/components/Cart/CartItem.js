import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div className={classes["item-name"]}>
        <h3>{props.name}</h3>
      </div>
      <div className={classes["item-desc"]}>
        <div className={classes["item-values"]}>
          <h4 className={classes.price}>{price}</h4>
          <h4 className={classes.quantity}>x {props.quantity}</h4>
        </div>
        <div className={classes["action-buttons"]}>
          <button className={classes["remove-btn"]} onClick={props.onRemove}>
            -
          </button>
          <button className={classes["add-btn"]} onClick={props.onAdd}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
