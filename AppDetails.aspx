<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">
    // for Add Meta key and meta dec for bot engine
    void Page_Load(object sender, System.EventArgs e)
    {
        // do some stuff in addition to the original Page_Load method

        //Error Let's To main index
        try
        {

            string q = Request.QueryString["q"];

            string[] _keypara = q.Split('_');
            int cat = Convert.ToInt32(_keypara[0]);
            int subcat = Convert.ToInt32(_keypara[1]);
            ImageService img = new ImageService();
            Categories[] ct;
            if (subcat == 0)
            {
                //msg = GetCategories(cat); 
                ct =img.GetCategories(cat);
            }
            else
            {
                //msg = GetSubCategories(cat, subcat);
                ct = img.GetSubCategories(cat, subcat);
            }

            //Set Title
            if (ct[0].Head_Tilte != null)
                Page.Title = ct[0].Head_Tilte;
              
            else
                Page.Title = MetaTag.Title();

            //Temp Text On load for Bot
            TempTextForBot.Text = Page.Title;
            // Create two instances of an HtmlMeta control.
            HtmlMeta metaDec = new HtmlMeta();

            HtmlMeta metaKey = new HtmlMeta();
            HtmlHead head = (HtmlHead)Page.Header;

            // Define an HTML <meta> element - description - that is useful for search engines.
            metaDec.Name = "description";
            if (ct[0].meta_Description != null)
            {
                metaDec.Content = ct[0].meta_Description;
            }
            else
            {
                metaDec.Content = MetaTag.meta_Description();
            }
            head.Controls.Add(metaDec);

            // Define an HTML <meta> element - keywords - that is useful for search engines.
            metaKey.Name = "keywords";
            if (ct[0].meta_KeyWords != null)
            {
                metaKey.Content = ct[0].meta_KeyWords;
            }
            else
            {
                metaKey.Content = MetaTag.meta_KeyWords();
            }

            head.Controls.Add(metaKey);
            // Get a reference to the page header element.
        }
        catch(Exception ex)
        {
        Response.Redirect("App1.html");
        }
            
  
        }
  
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>รวมรูปภาพน่ารักๆ High-Definition Pictures : Mazzpicture</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="email" content="codestk@gmail.com" />
    <meta name="rating" content="general" />
    <meta name="distribution" content="Global" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 


    <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
    <link href="css/StyleSheet.css" rel="stylesheet" />
    <link href="css/RandomImage.css" rel="stylesheet" />
    <link href="scripts/simplePagination.css" rel="stylesheet" />
    <link href="Templates/ServiceMetro.css" rel="stylesheet" />
    <link href="scripts/jquery.fancybox.css" rel="stylesheet" />

    <script src="scripts/jquery-1.8.3.js"></script>
    <script src="scripts/jquery.fancybox.js"></script>
    <script src="scripts/common.js"></script>
    <script src="scripts/Momojojo-1.0.0.js"></script>
    <script src="scripts/Momojojo_Web-1.0.0.js"></script>
    <script src="scripts/jquery.simplePagination.js"></script>
    <script src="scripts/innit.js"></script>
    <script src="scripts/Services.js"></script>
    <script src="scripts/jquery-jtemplates.js"></script>
    <script src="scripts/EventDeatils.js"></script>
</head>
<body>
     <div id="bodyContainer">

        
        <div id="DivHeader"><a href="App1.html" class="LinkBackHead">Home</a></div>
            <div id="DivSubHeader">
            
            <div id="thirdpaty">
               
                <!--FaceBook-->
          <div id="fb-root"></div>
<script>(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
            <div class="fb-like" data-href="http://www.mazzpicture.com" data-send="false" data-layout="button_count" data-width="450" data-show-faces="true"></div>

                 <!--Google-->
               <!-- Place this tag where you want the +1 button to render. -->
<div class="g-plusone" data-size="medium"></div>

<!-- Place this tag after the last +1 button tag. -->
<script type="text/javascript">
    (function () {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
</script>
                <!--Google-->
            </div>
        </div>

        <div id="Divmain" class="MainDetail">
         <asp:Label ID="TempTextForBot" runat="server"  Font-Bold="true"></asp:Label>
            <div id="CatHead"></div>
          
                <div id="CatMenu">
             </div>
          <div id="divAdLeft"> </div>
             <div id="CatHighlight" >
             <a id="aCloseFilter" class="close_Hilight" href="#"></a> 

                                                                                                                                                                                                  </p>
             </div>
               <div id="divAdRight"> </div>  

            <div id="CatSortBy">

                <div id="CatSortBy_Filter">Sort by: <span id="Order_UpdateTime">Newest</span> | <span id="Order_ViewCount"> Popular</span>  |</div>
            </div>
             <div id="DivResult">
                
            </div>
            <div id="PagerDiv">
            </div>

          


                <div id="divState" >


            </div>

        </div>

         



    </div>
</body>
</html>
