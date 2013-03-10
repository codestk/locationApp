/// <reference path="innit.js" />
 


//for loading page
//jQuery(window).load(function () {
//jQuery('#loading-image').hide();
//});



 
$(document).ready(function () {

 

    function search() {

        debugger
        Pure_Keyword=trim($("#txtInputsearch").val(),' ');
        Keyword = 'Keyword:' +  Pure_Keyword;
      
      
        //Save Key from user
        SaveKeyWord(Keyword);


        //Finde Check Box in Cat Menu
        var _cat = '';
        $('#divMenuCat input[type=checkbox]').each(function () {
          
            if (this.checked) {
                var _item;
                _item = $(this).val();
      
                    _cat += _item + ',';
            }
        });

       

        CatFilter = "CatFilter:" + trim(_cat, ',');
        //=============================================================

        //Set Top on search
        //$('#Divmain').css("margin-top", "6%");
        $("#Divmain").animate({

            "margin-top": "50px"
        
        }, 400, function () {


        });

        if (HideMenuFilter == false) {

            if ($("#DivFilter").css("display") == "none") {
                $('#DivFilter').css("display", "inline-block").slideDown();

            }
        }

        //keyword = key + ';' + SizeFilter + ';' + ColorFilter + ';' + CatFilter;
         
        //Set OrderBy Rank if has keyword    
        if (Keyword != "Keyword:") {
            OrderBy = 'OrderBy:Rank';
        }
        else
        {
         OrderBy = 'OrderBy:' + RandomSorts();
        }
        var query = Getquery();


        var msg = GetImage(1, itemsOnPage, query);
        var maxrows;
        if (msg.d.length == 0) {
            ClearFromNoresult();

            return;
        }
        maxrows = msg.d[0].MaxRows;

        $("#DivResult").show();

        //momojojo-fix
        $("#DivResult").setTemplateURL("/Templates/ServiceMetro.html");
        $("#DivResult").processTemplate({ data: msg.d, Main: "Y", word: trim($("#txtInputsearch").val(), ' ') });

        var o = { words: trim($("#txtInputsearch").val(), ' ') };
        highlight(".DivblockImage", o);

        //momojojo-fix 
        //Dec : html display is text
        //HtmlStringToHtml('htmlClass');


        $("#PagerDiv").show();
        $("#PagerDiv").pagination({
            items: maxrows,
            itemsOnPage: itemsOnPage,
            cssStyle: 'light-theme',
            prevText: 'ก่อนหน้า',
            nextText: 'ถัดไป',
            onPageClick: pagerOnclick
        });


        //Attrct Fancy box
        $(".showpic").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            openEffect: 'elastic',
            closeEffect: 'elastic',
            'type': 'image',
            helpers: {
                title: {
                    //Use for display title 'inside', 'outside','over'
                    
                    type: 'over'
                }
            }
        });


        //Bind Event Size Filter
        HideMenuCat();
    }




 
 

    


    /*Event*/
    $("#btnsearch").click(function (event) {

        $("#DivFilter_Size_detail .DivFilter_Size_item").unbind('click');
        $("#DivFilter_Size_detail .DivFilter_Size_item").click(function () {

            //$("#DivFilter_Size_detail a").css({ 'background-color': '#ffffff' });
            //$(this).css({ 'background-color': 'yellow', 'font-weight': 'bolder' });

            $("#DivFilter_Size_detail .DivFilter_Size_item").removeClass("ArrowSeleted").animate({
                marginLeft: "0.0in",
                //backgroundPosition: "(10px -250px)"
            }, 100);


            $(this).addClass("ArrowSeleted");
            $(this).animate({
                marginLeft: "-0.2in",
                //backgroundPosition: "(10px -250px)"
            }, 500);
            //alert($(this).context.title);

            SizeFilter = 'SizeFilter:' + $(this).context.textContent;
            //Repreaset Search
            //$("#DivFilter_Size_detail .DivFilter_Size_item").unbind('click');
            search();
        });


        $("#DivFilter_color_detail .DivFilter_color_item").unbind('click');

        $("#DivFilter_color_detail .DivFilter_color_item").click(function () {

            //$("#DivFilter_Size_detail a").css({ 'background-color': '#ffffff' });
            //$(this).css({ 'background-color': 'yellow', 'font-weight': 'bolder' });
           
            $("#DivFilter_color_detail .DivFilter_color_item").removeClass("ArrowSeletedUp");

            $(this).addClass("ArrowSeletedUp");
           

            //alert($(this).context.title);

            ColorFilter = 'ColorFilter:' + $(this).context.id;
            //Repreaset Search
            //$("#DivFilter_color_detail .DivFilter_color_item").unbind('click');

            search();
        });

        search();
         
    });// $("#btnsearch").click(function () {

  

    //==================================

 
    $("#imgDropDown").click(function () {

        /*Set Position Popup*/
        var pos1 = $("#imgDropDown").offset();
        var width1 = $("#imgDropDown").width();
        //For compute
        //var left1 = pos1.left + width1;
        //var top1 = pos1.top - 2;//200;
        var left1 = pos1.left-100;
        var top1 = pos1.top +24;//200;
        $("#divMenuCat").css({
            position: 'absolute',
            zIndex: 5000,
            left: left1,
            top: top1
            //}).show(MainEffect);
            }).slideDown(MainEffect);

        $("#checkAll").click(function () {
            var chekAll = $('#checkAll').is(':checked')



            $('#divMenuCat input[type=checkbox]').each(function () {
                $(this).attr('checked', chekAll);
            });
        });

        $('#divMenuCat input[type=checkbox]').click(function () {
          
            if (($('#checkAll')[0].id==$(this)[0].id) &&  ($('#checkAll').is(':checked')))
            {
                $('#spCheck').text('ทั้งหมด');
            }
            else
            {
                $('#checkAll').attr('checked', false);
                $('#spCheck').html('&nbsp;&nbsp;&nbsp;&nbsp;กรอง');
            }
        });

    });//$("#imgDropDown").click(function () {





    /*Filter*/
    // var aaa,bbb;
    var positonA;
    $("#aCloseFilter").click(function () {
        HideMenuFilter = true;
        //$('#DivFilter').hide();

        if (positonA == '-=400px') {
            positonA = '+=400px'
        }
        else {
            positonA = '-=400px'
        }
        $("#DivFilter").animate({
           
            "left": positonA
            
           
        }, 400, function() {
            HideMenuFilter = true;
            $("#DivFilter").hide();
        });

        innitFilter();
    });

    $("#DivFilter_color_Show").click(function () {
        
        if ($("#DivFilter_color_detail").css('display') == 'none')
        {
            $("#DivFilter_color_detail").slideDown(MainEffect);
            $("#DivFilter_color_Show").text('-');
        }
        else
        {
            $("#DivFilter_color_detail").slideUp(MainEffect);
            $("#DivFilter_color_Show").text('+');
        }
        //$("#DivFilter_color_detail").slideDown(MainEffect);
      
    });//$("#imgDropDown").click(function () {




   
    //Close Map when alter click
    $("body").click(function (event) {
        if (event == undefined)
            return;
        if (event.target.nodeName == "IMG") {
            return;
        }
        if ($(event.target).isOf('#divMenuCat')) {
            return;
        }
        HideMenuCat();
    }

    //==========End Bind Event
    
);




    function pagerOnclick(pageNumber) {
        var strarAt = 0;
        var keyword=$("#txtInputsearch").val();
        strarAt = ((pageNumber - 1) * itemsOnPage) + 1
        //var msg = GetImage(strarAt, itemsOnPage, keyword);
        var msg = GetImage(strarAt, itemsOnPage, Getquery());
        $("#DivResult").setTemplateURL("/Templates/ServiceMetro.html");
        $("#DivResult").processTemplate({ data: msg.d, Main: "Y" });
        //Dec : html display is text
        //HtmlStringToHtml('htmlClass');
    }


    function HideMenuCat()
    {
        //$("#divMenuCat").hide(MainEffect);
        $("#divMenuCat").slideUp(MainEffect);
      
    } 



    function ClearFromNoresult()
    {
        //$("#DivResult").hide();
        $("#DivResult").html('<div class=MsgNodata>'+msgNoData+'</div>');

        //ไม่ซ่อนกรณี filter แล้วหายหมด
        //$("#DivFilter").hide();
     
        $("#PagerDiv").hide();
        //Close Filter
        //$("#aCloseFilter").click();
        
    }

});//$(document).ready(function () {