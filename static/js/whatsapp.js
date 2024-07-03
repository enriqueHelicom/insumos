export function TypeButton(param){
    if(param == "quotation"){
        console.log("cotizar");
    }else{
        console.log("normal");
    }
}

//send mobile
function sendWhatsapp(message){

    let numberPhone = "5548722671";
    let urlWhatsapp = "";

    if(isMobile()){
        urlWhatsapp = `https://wa.me/${numberPhone}?text=${message()}`;
    }else{
        urlWhatsapp = `https://web.whatsapp.com/send?phone=${numberPhone}&text=${message()}`;
    }

    $(".btn-whats a").prop('href',urlWhatsapp);


}

//validate mobiles
function isMobile(){
    return(
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
};


// messages
const messageGeneric = () =>{
    let text = 
    `¡Hola! Estoy interesado en un producto`;

   let sanitizer = text.replace(" ","%20");

   return sanitizer;
}



const messageQuotation = () =>{

}


