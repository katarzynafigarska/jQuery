"use strict";

$(function() {
    var pobierzText = $("#second");
   // console.log(pobierzText.text());
    
    pobierzText.text("Zmieniony tekst");
  // console.log(pobierzText.text());   // zmieni nagłówek na zmieniony tekst
    
    //var body = $("body");
    //console.log(body.("<p>Nowy paragraf</p>"));  // wstawi w okno przegladarki dokladnie "<p>Nowy paragraf</p>", text nie odczytuje znaczników <>
    
   // $("#first").html("<p>Nowy paragraf</p>");  // doda do środka Nowy paragraf 
    
    var przykladAppend = $(".paragrafnext");
   // przykladAppend.append(" Append text");  //doda po paragraf czwarty dokładny tekst - Append text
    
    
    var przykladAfter = $(".paragrafnext");
   // przykladAfter.after("<span id='spanText'> After text</span>");
    
    var przykladPrepend = $(".paragrafnext");
   // przykladPrepend.prepend("Prepend next");   //doklada przed  czwarty paragraf tekst w tej samej linijce
    
    var przykladBefore = $(".paragrafnext");
  //  przykladBefore.before("Before next");  //dodaje przed czwarty paragraf tekst w linijce wyzej
    
    var emptyPrzyklad = $(".paragrafnext");
   // emptyPrzyklad.empty();  //oprozni ostatni paragraf, p tam bedzie ale pusty
    
    
    var removePrzyklad = $(".paragrafnext");
    removePrzyklad.remove();   //usunie ostatni paragraf
    
    var zmienKolor = $("#first");
    zmienKolor.css("color", "red");
    zmienKolor.css({"color" : "green", "font-size" : "4em"});  //zmieni kolor nagłówka na zielony i zwiekszy rozmiar, wąsy pozwalaja zmieniac wiele elementów w bloku
    
    var inputValue = $("#inputValue");
    inputValue.val("To jest tekst :)");
    console.log(inputValue.val());  //wpisze tekst w okienko
    
    var drugiNaglowek = $("#second");
    drugiNaglowek.addClass("blue");   //dodajemy z css klase blue
    //drugiNaglowek.removeClass("blue");
    
    drugiNaglowek.addClass("backgroundColor");
    
})