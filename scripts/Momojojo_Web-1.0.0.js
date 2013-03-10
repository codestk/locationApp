// <copyright file="Momojo.js" company="CodeStk">
// Copyright (c) 2007, 2008 All Right Reserved, http://CodeStk.com/
//
// This source is subject to the Microsoft Permissive License.
// Please see the License.txt file for more information.
// All other rights reserved.
//
// THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY 
// KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
// PARTICULAR PURPOSE.
//
// </copyright>
// <author>momojojo</author>
// <email>codestk@gmail.com</email>
// <date>19-07-2012</date>
// <summary>Add Function run Base on Jquery</summary>



 

/*========================================================Json==============================================*/


/* Create 24/01/2013
 * Json To Text Or Csv
 * objArray = JsonData.d
 */
function DownloadJSON2CSV(objArray) {

    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';

        for (var index in array[i]) {
            //
            //  if(index != "__type"){
            if ((index != "__type") && (index != "LOGTIME")) {
                line += array[i][index] + ',';
            }
        }

        // Here is an example where you would wrap the values in double quotes
        // for (var index in array[i]) {
        //    line += '"' + array[i][index] + '",';
        // }

        line.slice(0, line.Length - 1);

        str += trim(line, ',') + '\r\n';
    }


    //Fix ie
    if (navigator.appName != 'Microsoft Internet Explorer') {
        window.open('data:text/csv;charset=utf-8,' + escape(str));
    } else {
        var popup = window.open('', 'csv', '');
        popup.document.body.innerHTML = '<pre>' + str + '</pre>';
    }
    window.open("data:text/csv;charset=utf-8," + escape(str))
}





/*==============================Html===================================================================================================================================*/

/* Set HtmlString let display is Html Code
 * 14/02/2013
 * Use = HtmlStringToHtml(HtmlClass)
 */
function HtmlStringToHtml(css) {
    //$("." + css).html($("." + css).text());

    $("." + css).each(function () {
        $($(this)).html($(this).text());
    });
    //$(".example_2 .my_target_link a").each(function () {
    //    $($(this).parent()).html($(this).text());
    //});
}

/*Remove  All Html in Control
    * 14/02/2013
    Use =  removeAllHtml('Div')*/
function removeAllHtml(id) {
    $("#" + id).html($("#" + id).text());
};

/** 15/02/2013
 * highlight Wording by .class and can add option
 * var o = { words: trim($("#txtInputsearch").val(), ' ') };
 * highlight(".DivblockImage", o);
 **/
function highlight(css, options) {
    var o = {
        words: '',
        caseSensitive: false,
        wordsOnly: true,
        template: '$1<span class="highlight">$2</span>$3'
    }, pattern;
    $.extend(true, o, options || {});

    if (o.words.length == 0) {
        return;
    }
    pattern = new RegExp('(>[^<.]*)(' + o.words + ')([^<.]*)', o.caseSensitive ? "" : "ig");

    $(css).each(function () {
        var content = $(this).html();

        if (!content) return;
        $(this).html(content.replace(pattern, o.template));
    });
}

/** 25/02/2013
 * highlight Wording by add  class to txt
 * Texthighlight('cat rat map', 'map', 'higthlight');
 *  
 **/
function Texthighlight(txt, words, cssClass) {
     
    var out = '';
    var caseSensitive = false;
    var wordsOnly = true;
    var template = '$1<span class="' + cssClass + '">$2</span>$3';
    if (words.length == 0) {
        return txt;
    }
    //pattern = new RegExp('(.*)(' + words + ')(.*)', caseSensitive ? "" : "ig");
    pattern = new RegExp('([.*]*)(' + words + ')([.*]*)', caseSensitive ? "" : "ig");

    var content = txt;
    if (!content) return;
    out = content.replace(pattern, template);

    return out;
}



 

/*=================================From  Usage=======================================================================================================*/
 


jQuery.fn.extend({
    disableSelection: function () {
        return this.each(function () {
            this.onselectstart = function () {
                return false;
            };
            jQuery(this).find('input, textarea, button, select,a').attr('disabled', 'disabled');
        });
    }
});

jQuery.fn.extend({
    EnableSelection: function () {
        return this.each(function () {
            this.onselectstart = function () {
                return false;
            };
            jQuery(this).find('input, textarea, button, select,a').removeAttr("disabled");
        });
    }
});


/** input nummerric
*  Use
* <INPUT id="txtChar" onkeypress="return isNumberKey(event)" type="text" name="txtChar">
**/
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;

    return true;
}





/*AutoClose-------------------------------------------------------------------------------------------------------
* Help
* Close Map when alter click
* $("body").click(function (event) {
*     if (event.target.nodeName == "IMG") {
*         return;
*     }
*     if ($(event.target).isOf('#divMenuCat')) {
*         return;
*     }
*     HideMenuCat();
* }
* );
**/
$.fn.isOf = function (selector) {
    if ($(this).is(selector) || $(this).parents(selector).size() > 0) {
        return true;
    }
    return false;
}






 