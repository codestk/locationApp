using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Stk.DB;
using System.Data.SqlClient;
using System.Data;
using System.Text;
 
 
public class SerachParameters
{
	public SerachParameters()
	{
		//
		// TODO: Add constructor logic here
		//
	}


//    public static string queryToCommand(string query)
//{
//    string oupput="";
//    string _query = query.Trim();
   

 
 
//    oupput = SplitWithOr(_query);
//    return oupput;
//}

    public static string  GetKeyWord(string query)
    {
        string output = "";
        output = GetValue(query, "Keyword");

        //fix Bugs "Mazzda      "
        output = output.Trim();
       //output = AddSynonym(output);
        output = SplitWithOr(output);

      

        return output;
    }

 

    //No complete
    private static  string  AddSynonym(string @wording)
    {
        string output = "";
        DataSet ds;
        DataAccessLayer db = new DataAccessLayer();
        var Prset = new List<SqlParameter>();
        Prset.Add(new SqlParameter("@wording", @wording));
        ds = db.GetDataSet("[sp_GetSynonym]", Prset, CommandType.StoredProcedure);
         
       foreach (   DataRow  dr  in ds.Tables[0].Rows )
        {
        output += dr["eentry"].ToString().Replace(';',' ').Replace('-',' ')  + " ";
        }
       output = output.Substring(0, 200);
        return output;
    }



    //*Size Filetr
    public static string GetSizeFliter(string query)
    {   //"ดอกไม้;Size:All"
        string output = "All x All";
        string retruenfunction = ""; 
   

        retruenfunction = GetValue(query, "SizeFilter");

        if (retruenfunction != "")
            output = retruenfunction;
        
        return output;
     }


    public static string GetColorFliter(string query)
    {   //"ดอกไม้;Size:All"
        string output = "0";
        string retruenfunction = ""; 
  
        retruenfunction = GetValue(query, "ColorFilter");

        if (retruenfunction != "")
        output = retruenfunction;
        output = output.Replace("sp", "");
        return output;
    }



    public static string GetCatFliter(string query)
    {   //"ดอกไม้;Size:All"
        string output = "0";
        string retruenfunction;
     
        retruenfunction = GetValue(query, "CatFilter");

        if (retruenfunction != "")
            output = retruenfunction;

        return output;
    }

    public static string GetSubCatFliter(string query)
    {   //"ดอกไม้;Size:All"
        string output = "0";
        string retruenfunction;
 
        retruenfunction = GetValue(query, "SubCatFilter");

        if (retruenfunction != "")
            output = retruenfunction;

        return output;
    }


    public static string GetOrder(string query)
    {   //"ดอกไม้
        //"ดอกไม้;Size:All"
        string output = "";
    
        output = GetValue(query, "OrderBy");
        return output;
    }

     //'"*nut*" OR "*screw*" OR "*washer*"'
   static string SplitWithOr(string query)
   { 
   string output="";
   string[] temparry = query.Split(';')[0].Split(' ');

   int loop = 0;
   loop = temparry.Count()-1;

   for (int x = 0; x <= loop; x++)
   {
       if (x == loop)
       {
           output += temparry[x].Trim();
       }
       else
       {
           if (temparry[x].Trim() == "")
           {
               continue;
           }
           output += temparry[x].Trim() + " OR ";
          
       }
     
   }
     
   
  

   return output;
   }


     static string GetValue(string query, string parameter)
   {
       string output = "";
       string _query = query.Trim();
       string[] temparry = _query.Split(';');
       foreach (string key in temparry)
       {
           string[] _key = key.Split(':');
           if (_key[0] == parameter)
           {
              
               output = _key[1];
          
           }
       }
       return output;
   }
}