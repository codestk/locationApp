
var getQ = false;
$(document).ready(function () {

    //Set Header
    //$('title').text("Your new title tag here");
    //$('meta[name=Description]').attr('content', 'new Meta Description here');
    //$('meta[name=KeyWords]').attr('content', 'new Meta Description here');
 
    //set All Cate
    if (getQ == false)
    {
        
        var keypara = getQuerystring('q');
        var _keypara = keypara.split('_');
        var _cat = _keypara[0];
        var _subcat = _keypara[1];
        
        //returen main
        if (_cat == '')
        {
            window.location = "App1.html"
            return true;
        }


        //SetHeader(_cat, _subcat);
        SetRandomImages(_cat, _subcat, '#CatHead');

        SetHighlight(_cat, _subcat, '#CatHighlight');

        CatFilter = "CatFilter:"+ _cat;
        SubCatFilter = 'SubCatFilter:' + _subcat;

      
        getQ = true;



    }
  

    function searchDetails() {
        //keyword = '' + ';' + SizeFilter + ';' + ColorFilter + ';' + CatFilter';'+OrderBy;
        var query = Getquery();
        var msg = GetImage(1, itemsOnPage, query, 'N');

    

        var maxrows;
        if (msg.d.length == 0) {
            //ClearFromNoresult();

            return;
        }
        maxrows = msg.d[0].MaxRows;
        //var header = msg.d[0].catname_thai;
        //$("#CatHead").setTemplateURL("/Templates/RandomCatimage.html");
        //$("#CatHead").processTemplate({ data: msg.d, Main: "Y", Head: header });


        $("#DivResult").show();
        $("#DivResult").setTemplateURL("/Templates/ServiceMetro.html");
        $("#DivResult").processTemplate({ data: msg.d, Main: "Y" });


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

    }
    searchDetails();


    //$("#CatHead").setTemplateURL("/Templates/ServiceMetro.html");
    //$("#CatHead").processTemplate({ data: msg.d, Main: "Y" });
 


    $("#CatMenu li").click(function () {

        $("#CatMenu li").removeClass("catselected").stop().animate({ opacity: 0.3 });;

        $(this).addClass("catselected").stop().animate({ opacity: 1 });

         
        var idName = this.id;
        idname=idName.replace(/cat_/ig, '' )
        SubCatFilter = 'SubCatFilter:'+idname;
        searchDetails();
      
    });

    $("#CatSortBy_Filter span").click(function () {
       
        try 
        {
            var  tempn= this.id.split('_');
            OrderBy = 'OrderBy:' + tempn[1];
        }
        catch(err)
        {
            alert ("Error: " + err + ".");
        }



        $("#CatSortBy_Filter span").removeClass("selectedOrder").stop().animate({ opacity: 0.3 });;
  
        $(this).addClass("selectedOrder").stop().animate({ opacity: 1 });

        searchDetails();
    });



   // var aaa, bbb;
    $("#aCloseFilter").click(function () {
        HideMenuFilter = true;
        document.getElementById('player').src = '';
        $("#CatHighlight").slideUp();
        //$('#DivFilter').hide();
  
    });

    //Set Counter
    $("#divState").setTemplateURL("/Templates/Goingup.html");
    $("#divState").processTemplate({ Main: "Y" });
});//$(document).ready(function () {

function pagerOnclick(pageNumber) {
    var strarAt = 0;
    var query = Getquery();
    strarAt = ((pageNumber - 1) * itemsOnPage) + 1
    //var msg = GetImage(strarAt, itemsOnPage, keyword);
    var msg = GetImage(strarAt, itemsOnPage, query, 'N');
    $("#DivResult").setTemplateURL("/Templates/ServiceMetro.html");
    $("#DivResult").processTemplate({ data: msg.d, Main: "Y" });
}



function SetHeader(cat,subcat)
{
    var msg;
    if (subcat == 0) {
        msg = GetCategories(cat);
    }
    else {
        msg = GetSubCategories(cat, subcat);
    }
  
    SetTitle(msg);
    SetMeta(msg);
}
