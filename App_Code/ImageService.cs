using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Stk.DB;
using System.Data;
using System.Data.SqlClient;

/// <summary>
/// Summary description for ImageService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
 [System.Web.Script.Services.ScriptService]
public class ImageService : System.Web.Services.WebService {

    public ImageService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string Version() {
        return "22_01_2012";
    }



    [WebMethod]
    public AppImg[] GetAllImage(int startRowIndex ,int maximumRows ,string Keyword)
    {
        DataAccessLayer db = new DataAccessLayer();
        DataSet ds;

        string fliter;
        fliter = SerachParameters.GetKeyWord(Keyword);

        string SizeFilter;
        string ColorFilter;
        string CatFliter;
        string OrderBy = "";
        string SubCatFliter = "";
        SizeFilter  = SerachParameters.GetSizeFliter(Keyword);
        ColorFilter = SerachParameters.GetColorFliter(Keyword);
        CatFliter   =SerachParameters.GetCatFliter(Keyword);
        OrderBy = SerachParameters.GetOrder(Keyword);
        SubCatFliter = SerachParameters.GetSubCatFliter(Keyword);
        var Prset = new List<SqlParameter>();
        Prset.Add(new SqlParameter("@startRowIndex", startRowIndex));
        Prset.Add(new SqlParameter("@maximumRows", maximumRows));
        Prset.Add(new SqlParameter("@fliter", fliter));
        Prset.Add(new SqlParameter("@SizeFilter", SizeFilter));
        Prset.Add(new SqlParameter("@ColorFilter", ColorFilter));
        //1,2,3,45,
        Prset.Add(new SqlParameter("@CatSet",CatFliter));
        //@OrderBy
        Prset.Add(new SqlParameter("@OrderBy", OrderBy));
        Prset.Add(new SqlParameter("@SubCatSet", SubCatFliter));

        ds = db.GetDataSet("[dbo].[sp_GetImage]", Prset, CommandType.StoredProcedure);
        var query = (from temp in ds.Tables[0].AsEnumerable()
                     //where temp.Field<string>("EnglishCountry") != null
                     select new  AppImg
                     {
                         name = temp.Field<String>("name"),
                         type = temp.Field<String>("type"),
                         title = temp.Field<String>("title"),
                         dec = temp.Field<String>("dec"),
                         indexkey = temp.Field<String>("indexkey"),
                         cat = temp.Field<int>("cat"),
                         path = temp.Field<String>("path"),
                         subcat = temp.Field<int>("subcat"),
                         height = temp.Field<Int32>("height"),
                         width = temp.Field<Int32>("width"),
                         catname_eng = temp.Field<String>("catname_eng"),
                         catname_thai = temp.Field<String>("catname_thai"), 
 
                         MaxRows = temp.Field<Int32>("MaxRows"),
                         ViewCount = temp.Field<Int32>("ViewCount"),
                     });
        return query.ToArray<AppImg>();
    }


  
     [WebMethod(CacheDuration = 60)]
    public Categories[] GetCategories(int cat)
    {
        DataAccessLayer db = new DataAccessLayer();
        DataSet ds;

 
           var Prset = new List<SqlParameter>();
        Prset.Add(new SqlParameter("@cat", cat));

        ds = db.GetDataSet("Sp_GetCategories", Prset, CommandType.StoredProcedure);
        var query = (from temp in ds.Tables[0].AsEnumerable()
                     //where temp.Field<string>("EnglishCountry") != null
                     select new Categories
                     {
                         //cat = temp.Field<Int32>("cat"),
                         //catname_eng = temp.Field<String>("catname_eng"),
                         //catname_thai = temp.Field<String>("catname_thai"), 
                         cat = temp.Field<Int32>("cat"),
                         catname_eng = temp.Field<String>("catname_eng"),
                         catname_thai = temp.Field<String>("catname_thai"),
                         display = temp.Field<Boolean>("display"),
                         Head_Tilte = temp.Field<String>("Head_Tilte"),
                         meta_KeyWords = temp.Field<String>("meta_KeyWords"),
                         meta_Description = temp.Field<String>("meta_Description"), 
 
 
                     });
        return query.ToArray<Categories>();
    }


 

 
    [WebMethod(CacheDuration = 60)]
    public SubCategories[] GetSubCategories(int cat,int subcat)
    {
        DataAccessLayer db = new DataAccessLayer();
        DataSet ds;


        //ds = db.GetDataSet("SELECT [Categories].[cat] ,[subcat] ,[catname_eng] ,[catname_thai] ,[subname] FROM [Categories] inner join [SubCategories] on [Categories].cat=[SubCategories].cat;");
        var Prset = new List<SqlParameter>();
        Prset.Add(new SqlParameter("@cat", cat));
        Prset.Add(new SqlParameter("@subcat", subcat));

        ds = db.GetDataSet("Sp_GetSubCategories", Prset, CommandType.StoredProcedure);
        var query = (from temp in ds.Tables[0].AsEnumerable()
                     //where temp.Field<string>("EnglishCountry") != null
                     select new SubCategories
                     {
                         //cat = temp.Field<Int32>("cat"),
                         //catname_eng = temp.Field<String>("catname_eng"),
                         //catname_thai = temp.Field<String>("catname_thai"),
                         //subcat = temp.Field<Int32>("subcat"),
                         //subname = temp.Field<String>("subname"),
                         cat = temp.Field<Int32>("cat"),
                         catname_eng = temp.Field<String>("catname_eng"),
                         catname_thai = temp.Field<String>("catname_thai"),
                         subcat = temp.Field<Int32>("subcat"),
                         subname = temp.Field<String>("subname"),
                         Head_Tilte = temp.Field<String>("Head_Tilte"),
                         meta_KeyWords = temp.Field<String>("meta_KeyWords"),
                         meta_Description = temp.Field<String>("meta_Description"),
                         imgHead = temp.Field<String>("imgHead"),
                         youtube1 = temp.Field<String>("youtube1"),
                         youtube2 = temp.Field<String>("youtube2"),
                         youtube3 = temp.Field<String>("youtube3"), 
 

                     });
        return query.ToArray<SubCategories>();
    }

    //Add View
    [WebMethod]
    public void AddView(string name)
    {
       
        DataAccessLayer db = new DataAccessLayer();
   
        var Prset = new List<SqlParameter>();
        Prset.Add(new SqlParameter("@name", name));

        db.FbExecuteNonQuery("sp_Add_Views", Prset,CommandType.StoredProcedure);
      
    }




    
    [WebMethod(CacheDuration = 160,BufferResponse=true)]
    public ImgColor[] GetAllColors()
    {

        DataAccessLayer db = new DataAccessLayer();
        DataSet ds;


        ds = db.GetDataSet("SELECT * FROM [dbo].[Color] order by colorid");
        var query = (from temp in ds.Tables[0].AsEnumerable()
                     //where temp.Field<string>("EnglishCountry") != null
                     select new ImgColor
                     {
                         colorid = temp.Field<Int32>("colorid"),
                         colorname_thai = temp.Field<String>("colorname_thai"),
                         colorname_eng = temp.Field<String>("colorname_eng"),
                         colorHtml = temp.Field<String>("colorHtml")
                     });
        return query.ToArray<ImgColor>();
    }


     [WebMethod(CacheDuration = 160)]
    public AppImg[] Get_Size_Filter()
    {
        DataAccessLayer db = new DataAccessLayer();
        DataSet ds;


        ds = db.GetDataSet("Get_Size_Filter");
        var query = (from temp in ds.Tables[0].AsEnumerable()
                     //where temp.Field<string>("EnglishCountry") != null
                     select new AppImg
                     {
                        height =  temp.Field<int>("height"),
                        width = temp.Field<int>("width")
                     });
        return query.ToArray<AppImg>();
    }
    //Get_Size_Filter



     [WebMethod(CacheDuration = 60, BufferResponse = true)]
     public AppImg[] GetRandomImages(int cat, int subcat)
     {
         DataAccessLayer db = new DataAccessLayer();
         DataSet ds;


         var Prset = new List<SqlParameter>();
         Prset.Add(new SqlParameter("@cat", cat));
         Prset.Add(new SqlParameter("@subcat", subcat));
         ds = db.GetDataSet("SP_GetRandomImages", Prset, CommandType.StoredProcedure);
         var query = (from temp in ds.Tables[0].AsEnumerable()
                      select new AppImg
                     {
                         name = temp.Field<String>("name"),
                         type = temp.Field<String>("type"),
                         title = temp.Field<String>("title"),
                         dec = temp.Field<String>("dec"),
                         indexkey = temp.Field<String>("indexkey"),
                         cat = temp.Field<int>("cat"),
                         path = temp.Field<String>("path"),
                         subcat = temp.Field<int>("subcat"),
                         subname = temp.Field<string>("subname"),
                         height = temp.Field<Int32>("height"),
                         width = temp.Field<Int32>("width"),
                         catname_eng = temp.Field<String>("catname_eng"),
                         catname_thai = temp.Field<String>("catname_thai"), 
 
                         //MaxRows = temp.Field<Int32>("MaxRows"),
                         //ViewCount = temp.Field<Int32>("ViewCount"),
                     });
        return query.ToArray<AppImg>();
     }


     [WebMethod]
     public void  SaveKeyWord(string Keyword)
     {
         DataAccessLayer db = new DataAccessLayer();
          var Prset = new List<SqlParameter>();
         string _Keyword ;
         _Keyword=Keyword.Trim();
         Prset.Add(new SqlParameter("@KeyWord", _Keyword));

         db.FbExecuteNonQuery("sp_Save_KeyWord",Prset,CommandType.StoredProcedure);
 
     }



    [WebMethod]
    public string TestComan(string query)
    {

        return SerachParameters.GetKeyWord(query);
    }



}
