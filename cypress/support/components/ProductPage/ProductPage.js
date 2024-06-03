import {
  getAddToCartButton as addToCart,
  getCheckout,
} from "./Selectors";


export const clickOnAddToCart = () => addToCart().click();

export const clickOnCheckout = () => getCheckout().click();
