 
/// <reference path="Main.js" />
/// <reference path="../Templates/ServiceMetro.html" />
/// <reference path="../Templates/MenuCat.html" />


$(document).ready(function () {

   //Set Menu Cat
    SetMenuCat();

    SetMenuFilterColors();
    SetSizeFilter();

    SetCategories();
    //for Set Div Hight
    $('#Divcat').masonry({
        itemSelector: '.Cat_20',
        columnWidth: 100,
        isAnimated: true
    });
 
    //For AutoComplete
    $("#txtInputsearch").autocomplete('AutoCompleteHandler.ashx');
 
    //For Menu
    //$(".logoHeadItem").lettering();

   
    $("#divState").setTemplateURL("/Templates/Goingup.html");
    $("#divState").processTemplate({ Main: "Y" });
   
 

});//$(document).ready(function () {