/// <reference path="../ImageService.asmx" />
/// <reference path="innit.js" />

 
function GetImage(startRowIndex,maximumRows,query,Servicekeyword) {
    var webservice = 'GetAllImage';
    //if (Servicekeyword == 'N')
    //{
    //    webservice = 'GetAllImageNoKeyWord';
    //}
     
    var _query = query;
    var data;
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + webservice,
        data: '{startRowIndex:' + startRowIndex + ',maximumRows:' + maximumRows + ',Keyword:"' + _query + '"}',
        async: false,
       
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR)
        {
            data = msg;
        }
        //, error: function (jqXHR, textStatus, errorThrown,msg)
          , error: function (msg)
        {
            if (showerror == true)
            {
                alert(msg.responseText);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    return data;
}




function SetMenuCat() {

    var data;
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + 'GetCategories',
        data: '{cat:0}',
        async: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {
            //data = msg;
            $("#divMenuCat").setTemplateURL("/Templates/MenuCat.html");
            $("#divMenuCat").processTemplate({ data: msg.d, Main: "Y" });

        
        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    return data;
}

 






function SetMenuFilterColors() {

    //var data;
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + 'GetAllColors',
        data: '{}',
        async: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {
            //data = msg;
            $("#DivFilter_color_detail").setTemplateURL("/Templates/ColorsFilters.html");
            $("#DivFilter_color_detail").processTemplate({ data: msg.d, Main: "Y" });
        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    //return data;
}

function SetSizeFilter() {

    //var data;
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + 'Get_Size_Filter',
        data: '{}',
        async: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {
            //data = msg;
            $("#DivFilter_Size").setTemplateURL("/Templates/SizeFilters.html");
            $("#DivFilter_Size").processTemplate({ data: msg.d, Main: "Y" });

        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    //return data;
}





//{cat:0,subcat:0} = Get All
function SetCategories() {

    //var data;
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + 'GetSubCategories',
        data: '{cat:0,subcat:0}',
        async: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {
            //data = msg;
            $("#Divcat").setTemplateURL("/Templates/Categories.html");
            $("#Divcat").processTemplate({ data: msg.d, Main: "Y" });



        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    //return data;
}



function SetSubCategories(cat) {

    //var data;
    $.ajax({
        type: 'POST',
        //url: webserviceUrl + '/' + 'GetSubCategoriesByCat',GetSubCategories
        url: webserviceUrl + '/' + 'GetSubCategories', 
        data: '{cat:' + cat + ',subcat:0}',
        async: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {
            //data = msg;
            $("#CatMenu").setTemplateURL("/Templates/SubCatFilter.html");
            $("#CatMenu").processTemplate({ data: msg.d, Main: "Y" });



        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    //return data;
}

 


function GetCategories(cat) {

    var data;
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + 'GetCategories',
        data: '{cat:' + cat +'}',
        async: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {
            data = msg;

        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    return data;
}



function GetSubCategories(cat,subcat) {

    var data;
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + 'GetSubCategories',
        data: '{cat:' + cat + ',subcat:' + subcat + '}',
        async: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {
            data = msg;
       
        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
    return data;
}




function SetRandomImages(cat, subcat,div)
{

   
    $.ajax({
        type: 'POST',
        url: webserviceUrl + '/' + 'GetRandomImages',
        data: '{cat:' + cat + ',subcat:' + subcat + '}',
        async: true,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (msg, textStatus, jqXHR) {

            if (msg.d.length == 0)
            {
                return;
            }
            var header = msg.d[0].catname_thai;
            var subname='';

            if (SubCatFilter != 'SubCatFilter:0')
            {
                subname = msg.d[0].subname;
            }
            //$("#CatHead").setTemplateURL("/Templates/RandomCatimage.html");
            //$("#CatHead").processTemplate({ data: msg.d, Main: "Y", Head: header });
            //Css มีสอง set  1,2 ในไฟล์   /css/RandomImage.css
       
            $(div).setTemplateURL("/Templates/RandomCatimage.html");

            //cssSet < Refer innit
            $(div).processTemplate({ data: msg.d, Main: "Y", Head: header, CssSet: cssSet, subname: subname });
        }
        , error: function (jqXHR, textStatus, errorThrown) {
            if (showerror == true) {
                alert(textStatus);
            }
        }
        , complete: function (jqXHR, textStatus) {

        }
    });         //.ajax
   
}

    //Set HighLigt in age detail 
    //test cat of car
    //random you tube
    function SetHighlight(cat, subcat, div)
    {
         
                var msg=GetSubCategories(cat,subcat)
                if (msg.d.length == 0)
                {
                    return;
                }
             

                if (subcat == 0) {
                    return;
                }
             
      
                //imgHead
                //youtube1 youtube2 youtube3
       
                var meta_Description = msg.d[0].meta_Description;//Set Detail  You Tube
              
                var youtube = '';
                var imgHead = msg.d[0].imgHead;//Set Detail  You Tube
                var youtube1 = msg.d[0].youtube1;//Set Detail  You Tube
                var youtube2 = msg.d[0].youtube2;//Set Detail  You Tube
                var youtube3 = msg.d[0].youtube3;//Set Detail  You Tube


            
                var arr = new Array();
              
                if ((youtube1 != null) || (youtube1 != undefined))
                { 
                    arr.push (youtube1);
                }

                if ((youtube2 != null) || (youtube2 != undefined))
                { 
                    arr.push (youtube2);
                }

                if ((youtube3 != null)||  (youtube3 != undefined))
                { 
                    arr.push (youtube3);
                }

                if (arr.length == 0)
                {
                    return;
                }
                var random;
                random = getRandomInt(0, arr.length);
                youtube = arr[random]

         
            
      
                $(div).show();
                $(div).setTemplateURL("/Templates/YouTube.html");

                //cssSet < Refer innit
                $(div).processTemplate({ data: msg.d, Main: "Y", youtube: youtube, meta_Description: meta_Description });

             
    }



//Save User Key word 
function SaveKeyWord(keyword) {
        //SaveKeyWord(string Keyword)
        $.ajax({
            type: 'POST',
            url: webserviceUrl + '/' + 'SaveKeyWord',
            data: '{Keyword:"' + keyword + '"}',
            async: true,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function (msg, textStatus, jqXHR) {

            }
            , error: function (jqXHR, textStatus, errorThrown) {
                if (showerror == true) {
                    alert(textStatus);
                }
            }
            , complete: function (jqXHR, textStatus) {

            }
        });         //.ajax
    }

 