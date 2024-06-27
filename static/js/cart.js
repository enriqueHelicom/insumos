export function cartShopping(){
    let btnAddCart = $("#btn_cart");

    btnAddCart.on("click", function(){
    
        let productId = $(this).attr("data-idProduct");
        console.log(productId);


        $.ajax({
            type: "get",
            url: "http://127.0.0.1:5500/db.json",
            dataType: "json",
            success: function (response) {
                  
            }
        });

        btnAddCart.attr("disabled",true);
        

    });
}