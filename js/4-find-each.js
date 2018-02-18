"use strict";

$(function() {
  //  $("body").find("p.paragraf").css({"background-color": "red"});   //kolorujemy paragrafy na czerwono
    
//    var paragrafy = $(".paragraf");
//    console.log(paragrafy[1]);   nie dziala
//    paragrafy.css({"background-color": "red"});
//    
 
    var paragrafy = $(".paragraf");
    var pobranyPoEq = paragrafy.eq(1).css("color", "red");  //pobieramy z tablicy
    //console.log(pobranyPoEq);   //musi byc obiekt jQuery aby uruchomic funkcjie jQuery paragrafy[0] to nie jest obiekt jquery tylko html
    
//    paragrafy[0].style.backgroundColor = "red";  //tak robimy nie na obiekcie jQuery, jak jest           model DOM robimy jak na modelu DOM, pobieramy z tablicy czysty JS
    
//    console.log(paragrafy[0]);
//    console.log(paragrafy); //obiekt html
//    console.log(paragrafy.eq(0));  //obiekt jQuerty
    
    
})



$(".paragraf").each(function(index, element) {
    if(index != 0) {
        $(this).css("background-color", "green");
    }
    console.log("Element: " + element, index);
})