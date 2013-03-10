<%@ WebHandler Language="C#" Class="ImageHandler" %>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Drawing.Imaging;
using Stk.DB;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Web.Caching;
public class ImageHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        //context.Response.ContentType = "text/plain";
        //context.Response.Write("Hello World");
        int cacheTime = 30;
        context.Response.Cache.SetCacheability(HttpCacheability.Public);
        context.Response.Cache.SetExpires(DateTime.Now.AddSeconds(cacheTime));
     
         
        string name = context.Request["name"].ToString();
        string size = context.Request["size"].ToString();
        
        string height="";
        string width="";
        if (context.Request["H"] != null)
        {
            height = context.Request["H"].ToString();
        }
        if (context.Request["W"] != null)
        {
          width = context.Request["W"].ToString();
         }
        int _height;
        int _width;
        height=height.Trim();
        width=width.Trim();
     
        
       //Set Defalut Dimension 227, 130
        if (height == "")
        {
            _height = 130;
        }
        else
        {
            _height = Convert.ToInt32(height);
        }
        if (width == "")
        {

            _width = 227;
        }
        else
        {
            _width = Convert.ToInt32(width);
        }
        //=============================================
        
        
        // Get information about the specified category
        string CacheName = name;
        
        DataAccessLayer db = new DataAccessLayer();
        DataSet ds;


     
        
     string myCacheKey = CacheName; // Unique Identifier
     AppImg _img = context.Cache[myCacheKey] as AppImg;
     if (_img == null)
    {
            var Prset = new List<SqlParameter>();
            Prset.Add(new SqlParameter("@name", name));
            ds = db.GetDataSet("sp_GetImage_Byte", Prset, CommandType.StoredProcedure);

            var query = (from temp in ds.Tables[0].AsEnumerable()
                         //where temp.Field<string>("EnglishCountry") != null
                         select new AppImg
                         {
                             img = temp.Field<byte[]>("img"),
                             name = temp.Field<String>("name"),
                             type = temp.Field<String>("type"),
                             title = temp.Field<String>("title"),
                             dec = temp.Field<String>("dec"),
                             indexkey = temp.Field<String>("indexkey"),
                             cat = temp.Field<int>("cat"),
                             path = temp.Field<String>("path"),
                             subcat = temp.Field<int>("subcat"),
                             height = temp.Field<Int32>("height"),
                             //catname_eng = temp.Field<String>("catname_eng"),
                             //catname_thai = temp.Field<String>("catname_thai"), 

                         });



              _img = query.ToArray<AppImg>().FirstOrDefault();

              // Item isn't cached; Grab business object from the database
          

              // Add object to Cache using the cache key
              // In this example we are caching for 30 minutes
              context.Cache.Insert(myCacheKey, _img,
                  null, DateTime.UtcNow.AddMinutes(cacheTime),
                  Cache.NoSlidingExpiration);
        }
     
         string _ContentType = "image/jpeg";
         string _filename = _img.name + "."+_img.type;
            
        //Thumnail
         if (size == "Thumbnail")
         {
             MemoryStream ms = new MemoryStream(_img.img);
             System.Drawing.Image image = System.Drawing.Image.FromStream(ms);
             System.Drawing.Image thumbnailImage = image.GetThumbnailImage(_width, _height, new System.Drawing.Image.GetThumbnailImageAbort(ThumbnailCallback), IntPtr.Zero);

             // make a memory stream to work with the image bytes
             MemoryStream imageStream = new MemoryStream();

             // put the image into the memory stream
             thumbnailImage.Save(imageStream, System.Drawing.Imaging.ImageFormat.Jpeg);
             // make byte array the same size as the image
             byte[] imageContent = new Byte[imageStream.Length];

             // rewind the memory stream
             imageStream.Position = 0;

             // load the byte array with the image
             imageStream.Read(imageContent, 0, (int)imageStream.Length);

             // return byte array to caller with image type
             context.Response.ContentType = _ContentType;
             context.Response.BinaryWrite(imageContent);
         }
         else
         {
             //Image image = GetImage(_img.img);
             //context.Response.ContentType = "image/jpeg";
             //image.Save(context.Response.OutputStream, ImageFormat.Jpeg);
             /*Full Size*/
             
             //Add Views
             ImageService img = new ImageService();
             img.AddView(name);
             //System.Threading.Thread.Sleep(3333);
             context.Response.Clear();
             context.Response.AppendHeader("content-disposition", "attachment;filename=" + _filename);
             context.Response.ContentType = _ContentType;
            
             context.Response.BinaryWrite(_img.img);
             context.Response.Flush();
             context.Response.End();
             
             
         }

      
    }


    private Image GetImage(byte[] storedImage)
    {
        var stream = new MemoryStream(storedImage);
        return Image.FromStream(stream);
    }
    
    
    public bool IsReusable {
        get {
            return false;
        }
    }


    /// <summary>
    /// Required, but not used
    /// </summary>
    /// <returns>true</returns>
    public bool ThumbnailCallback()
    {
        return true;
    }

}