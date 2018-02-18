"use strict";

//Funkcja document.ready() - wersja skrócona
$(function(){
    
   // $("#first").mouseenter(function(){
   //     $("#second").toggle(function(){   // toggle przełącza stan
   //         $(this).css({"background-color": "yellow", "text-decoration" : "underline"});
    //    });
 //   });
    
    
    $("#first").on({   //dzięki on mozna laczyc kilka różnych opcji
        "mouseover" : function() {
            $(this).css("background-color", "yellow");
        },  // przecinek bo łączymy
        "mouseleave" : function() {
            $(this).css("background-color", "green");
        },
        "dblclick" : function() {
            console.log("click click");
        }
        
    });
    
    
});