import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import image from "../../asssets/meals.jpg";
import classes from "./css/Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Logo</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={image} alt="lmao it didnt load yet?"/>
      </div>
    </Fragment>
  );
};

export default Header;