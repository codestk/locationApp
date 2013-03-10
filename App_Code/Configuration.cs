using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
/// Summary description for Configuration
/// </summary>
public class Configuration
{
	public Configuration()
	{
		

	}

    public static string SiteUrl
    {

        get
        {

            return ConfigurationManager.AppSettings["SiteUrl"];

        }



    }

    public static string ListName
    {

        get
        {

            return ConfigurationManager.AppSettings["ListName"];

        }



    }



}
