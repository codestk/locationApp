var title ="รวมรูปภาพ High-Definition Pictures : Mazzpicture";
var Description="รูปภาพมากมายประกอบการทำรายงาน";
var KeyWords="Wallpaper,ภาพพื้นหลัง,วอลเปเปอร์,การ์ตูน,รูปการ์ตูน,รูปดารา,ภาพการ์ตูน,รูปภาพ,รูป,ภาพ,ภาพสยอง,ผี,ภาพหลุดดารา,รูปน่ารัก,สาวสวย,นายแบบ,ภาพประกอบการทำรายงาน,นักเรียน,ภาพธรรมชาติ,วิว,รูปดอกไม้,รถแข่ง,สัตว์,รูปอาร์ตๆ,รูปเด็ก,อาหาร,ขำขำ,แปลก,vector";
var cssSet; 
 
var MainEffect = 4000;
var itemsOnPage = 12;
var MainEffect = '';




/// <reference path="Services.js" />
var webserviceUrl = "ImageService.asmx";
var showerror = true;




/*Fliter*/
var HideMenuFilter

var ColorFilter;
var SizeFilter;
var CatFilter;
var OrderBy;
var query;
var SubCatFilter;


//for fancybox hilight
var Pure_Keyword = '';
function innitFilter()
{
      HideMenuFilter = false;
      ColorFilter = 'ColorFilter:0';
      SizeFilter = 'SizeFilter:All x All';
      msgNoData =  'ไม่พบข้อมูลตามเงื่อนไขของท่านที่ระบุ   ท่านอาจใช้ menu ด้านล่างเพื่อช่วยในการค้นหา';
      CatFilter = "CatFilter:0";

      OrderBy = 'OrderBy:' + RandomSorts();
      //OrderBy = 'OrderBy:';
      Keyword = 'Keyword:';
      SubCatFilter = 'SubCatFilter:0'
      cssSet = getRandomInt(1, 2);//Has 2 CssSet in radom.css
}
innitFilter();





function Getquery()
{
    var query = Keyword + ';' + SizeFilter + ';' + ColorFilter + ';' + CatFilter + ';' + SubCatFilter + ';' + OrderBy;
    return query;
}
 

function RandomSorts()
{
    var _sortArray = new Array('ViewCount', 'title', 'titleDesc', 'cat', 'subcat', 'UpdateTime', 'UpdateTimeDesc', 'dec', 'decDesc', 'catname_eng', 'catname_engDesc', '');
    var maxLenght = _sortArray.length - 1;
     
    var _sort;
    var Radom = getRandomInt(0, maxLenght);//Has 2 CssSet in radom.css
    _sort = _sortArray[Radom]
    return _sort;
}
 
 
