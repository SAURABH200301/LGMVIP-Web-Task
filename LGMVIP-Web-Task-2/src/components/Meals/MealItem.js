import classes from "./css/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cartContext";
import { useContext } from "react";

const MealItem = (props) => {
  const cartctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;