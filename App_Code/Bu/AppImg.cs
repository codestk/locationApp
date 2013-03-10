using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for AppImg
/// </summary>
public class AppImg
{
	public AppImg()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    String _name;
    public String name { get { return _name; } set { _name = value; } }

    Byte[] _img;
    public Byte[] img { get { return _img; } set { _img = value; } }

    String _type;
    public String type { get { return _type; } set { _type = value; } }

    String _title;
    public String title { get { return _title; } set { _title = value; } }

    String _dec;
    public String dec { get { return _dec; } set { _dec = value; } }

    String _indexkey;
    public String indexkey { get { return _indexkey; } set { _indexkey = value; } }

    Int32 _cat;
    public Int32 cat { get { return _cat; } set { _cat = value; } }

    String _path;
    public String path { get { return _path; } set { _path = value; } }

    Int32 _subcat;
    public Int32 subcat { get { return _subcat; } set { _subcat = value; } }

    Int32 _height;
    public Int32 height { get { return _height; } set { _height = value; } }

    Int32 _width;
    public Int32 width { get { return _width; } set { _width = value; } } 
 

 

 //Option
    private string  _subname;

    public string  subname
    {
        get { return _subname; }
        set { _subname = value; }
    }
    
    Int32 _MaxRows;
    public Int32 MaxRows { get { return _MaxRows; } set { _MaxRows = value; } }


    String _catname_eng;
    public String catname_eng { get { return _catname_eng; } set { _catname_eng = value; } }

    String _catname_thai;
    public String catname_thai { get { return _catname_thai; } set { _catname_thai = value; } }

    private int _ViewCount;

    public int ViewCount
    {
        get { return _ViewCount; }
        set { _ViewCount = value; }
    }



    
}