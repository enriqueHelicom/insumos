import { counterProduct } from "./count.js";
import { cartShopping } from "./cart.js";
import { TypeButton } from "./TypeButton.js";


$(document).ready(function ($) {

    /** shop.html counter product detail */
    counterProduct();

    /** product detail  */
    cartShopping();

    /** whatsapp validate */
    let btn_whats = document.querySelector("#btn-wh");
    
    btn_whats.on("click", function(){
        alert("test");
        let dataAttribute = $(this).attr("data-type");
        console.log(dataAttribute);

        TypeButton(dataAttribute);
    });



    
   
})