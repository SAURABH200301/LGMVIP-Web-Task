import CartIcon from "../Cart/CartIcon";
import classes from "./css/HeaderCartButton.module.css";
import CartContext from "../../store/cartContext";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext);
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const numberofcartitems = cartctx.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  const { items } = cartctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlighted(true);
    setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>

      <span>Your cart</span>
      <span className={classes.badge}>{numberofcartitems}</span>
    </button>
  );
};

export default HeaderCartButton;