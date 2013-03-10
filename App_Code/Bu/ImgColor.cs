using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ImgColor
/// </summary>
public class ImgColor
{
	public ImgColor()
	{
		//
		// TODO: Add constructor logic here
		//
	}



    Int32 _colorid;
    public Int32 colorid { get { return _colorid; } set { _colorid = value; } }

    String _colorname_thai;
    public String colorname_thai { get { return _colorname_thai; } set { _colorname_thai = value; } }

    String _colorname_eng;
    public String colorname_eng { get { return _colorname_eng; } set { _colorname_eng = value; } }

    String _colorHtml;
    public String colorHtml { get { return _colorHtml; } set { _colorHtml = value; } } 
 
}