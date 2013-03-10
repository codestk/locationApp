<%@ WebHandler Language="C#" Class="AutoCompleteHandler" %>

using System;
using System.Web;
using Stk.DB;
using System.Data.SqlClient;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using System.Data;
public class AutoCompleteHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        //context.Response.Write("Hello World");
        string prefixText = context.Request.QueryString["q"];
         var Prset = new List<SqlParameter>();
         Prset.Add(new SqlParameter("@wording", prefixText));

          DataAccessLayer db = new DataAccessLayer();
          SqlDataReader output ;

          output = db.FbExecuteReader("sp_GetKeyAutoComplete", Prset, CommandType.StoredProcedure);
             StringBuilder sb = new StringBuilder();
             while (output.Read())
             {
                 sb.Append(output["keywords"].ToString ())
                     .Append(Environment.NewLine);
             }

             db.CloseFbData();
        context.Response.Write(sb.ToString());
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}