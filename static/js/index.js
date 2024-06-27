import { counterProduct } from "./count.js";
import { cartShopping } from "./cart.js";


$(document).ready(function ($) {

    /** shop.html counter product detail */
    counterProduct();

    /** product detail  */
    cartShopping();
})