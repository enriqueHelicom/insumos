export function cartShopping(){
    let btnAddCart = $("#btn_cart");

    btnAddCart.on("click", function(){
    
        let productId = $(this).attr("data-idProduct");
        let countProductValue = $(".count-product .value");

        let formData = new FormData();
        formData.append('id',productId);

        fetchData(formData, countProductValue.text());
        
        

    });


}

// Peticion asyn
function fetchData(data, count){
    fetch('http://192.168.10.48/insumos_termicos/static/db/connection.php',{
        method: "POST",
        body: data
    })
        .then(function(response){
            // Si ocurre un error en la solicitud
            if(response.status !== 200){
                console.log("Error al realizar la solicitud");
                return
            }

            // si la peticion es exitosa
            response.json().then(function(data){
                renderCard(data, count);
            });
        })
        .catch(function(err){
            console.log('fetch :-S', err);
        })
}


const renderCard = (data, count) =>{
    const product = {
        "id":data.id,
        "name":data.name,
        "cantidad": count
    };


    sendWhatsapp(product);
}

const sendWhatsapp = (product) =>{
    var url = "whatsapp://send?text="+encodeURIComponent("product")+"&phone="+encodeURIComponent("+525548722671")

    window.open(url);

}