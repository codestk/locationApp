using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Stk.DB;
using System.Data;
using System.Data.SqlClient;

/// <summary>
/// Summary description for LocationsService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
// [System.Web.Script.Services.ScriptService]
public class LocationsService : System.Web.Services.WebService {

    public LocationsService () {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        return "Hello World";
    }



    [WebMethod]
    public LocateUs[] GetMyLocation()
    {
        DataAccessLayer db = new DataAccessLayer();
        DataSet ds;

     
        var Prset = new List<SqlParameter>();
        Prset.Add(new SqlParameter("@startRowIndex", 1));
        Prset.Add(new SqlParameter("@maximumRows", 5));
        ds = db.GetDataSet("[dbo].[GetAllLocations]", Prset, CommandType.StoredProcedure);
        var query = (from temp in ds.Tables[0].AsEnumerable()
                     where temp.Field<string>("EnglishCountry") != null
                     select new LocateUs
                     {
                         Country = temp.Field<string>("ThaiName")
 
                     
                     });
        return query.ToArray<LocateUs>(); 
    }
    
}
