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
using System.Text.RegularExpressions;

/// <summary>
/// Summary description for LocateUs
/// </summary>
public class LocateUs
{
    public LocateUs()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public string  ServiceType { get; set; }
    private double _Range = 0.0;
    public double Range
    {
        get
        {
            return _Range;
        }
        set
        {
            _Range = value;
        }
    }

    private string _BranchNo = string.Empty;
    public string BranchNo
    {
        get
        {
            return _BranchNo;
        }
        set
        {
            _BranchNo = value;
        }
    }

    private string _Province = string.Empty;

    public string Province
    {
        get
        {
            return _Province;
        }
        set
        {
            _Province = value;
        }
    }

    private string _District = string.Empty;

    public string District
    {
        get
        {
            return _District;
        }
        set
        {
            _District = value;
        }
    }



    private string _Country = string.Empty;

    public string Country
    {
        get
        {
            return _Country;
        }
        set
        {
            _Country = value;
        }
    }


    private string _Address1 = string.Empty;

    public string Address1
    {
        get
        {
            return _Address1;
        }
        set
        {
            _Address1 = value;
        }
    }


    private string _Address2 = string.Empty;

    public string Address2
    {
        get
        {
            return _Address2;
        }
        set
        {
            _Address2 = value;
        }
    }
    private string _Address3 = string.Empty;

    public string Address3
    {
        get
        {
            return _Address3;
        }
        set
        {
            _Address3 = value;
        }
    }
    private string _City = string.Empty;

    public string City
    {
        get
        {
            return _City;
        }
        set
        {
            _City = value;
        }
    }

    private string _BranchName = string.Empty;

    public string BranchName
    {
        get
        {
            return _BranchName;
        }
        set
        {
            _BranchName = value;
        }
    }

    private string _MicroBranchHours = string.Empty;

    public string MicroBranchHours
    {
        get
        {
            return _MicroBranchHours;
        }
        set
        {
            _MicroBranchHours = value;
        }
    }


    private string _Postcode = string.Empty;

    public string Postcode
    {
        get
        {
            return _Postcode;
        }
        set
        {
            _Postcode = value;
        }
    }

    //private string _BranchAddress = string.Empty;

    //public string BranchAddress
    //{
    //    get
    //    {
    //        return _BranchAddress;
    //    }
    //    set
    //    {
    //        _BranchAddress = value;
    //    }
    //}

    //#region Tel
    ////BoothTel   BCTel   BranchTel
    //string _BranchTel = string.Empty;
    //public string BranchTel
    //{
    //    get
    //    {
    //        return _BranchTel;
    //    }
    //    set
    //    {
    //        _BranchTel = value;
    //    }
    //}

    //string _BCTel = string.Empty;
    //public string BCTel
    //{
    //    get
    //    {
    //        return _BCTel;
    //    }
    //    set
    //    {
    //        _BCTel = value;
    //    }
    //}


    //string _BoothTel = string.Empty;
    //public string BoothTel
    //{
    //    get
    //    {
    //        return _BoothTel;
    //    }
    //    set
    //    {
    //        _BoothTel = value;
    //    }
    //}
    //#endregion

    #region Fax
    //BoothFax or BCFax or BranchFax
    //string _BranchFax = string.Empty;
    //public string BranchFax
    //{
    //    get
    //    {
    //        return _BranchFax;
    //    }
    //    set
    //    {
    //        _BranchFax = value;
    //    }
    //}


    //string _BCFax = string.Empty;
    //public string BCFax
    //{
    //    get
    //    {
    //        return _BCFax;
    //    }
    //    set
    //    {
    //        _BCFax = value;
    //    }
    //}


    //string _BoothFax = string.Empty;
    //public string BoothFax
    //{
    //    get
    //    {
    //        return _BoothFax;
    //    }
    //    set
    //    {
    //        _BoothFax = value;
    //    }
    //}

    string _Tel = string.Empty;
    public string Tel
    {
        get
        {

            string outPut = "";
            string mBranchTel = "";



            string mBCTel = "";
           

            string mBoothTel = "";


            //Set ForMAtt if not 

            //if (InternationalBranch != "X")
            //{




            //    if (NullableCheck(BranchTel))
            //    {
            //        mBranchTel = RemoveNonNumerric(BranchTel);
            //        mBranchTel = SetPhoneFormat(mBranchTel) + ",";
            //    }
            //    if (NullableCheck(BCTel))
            //    {
            //        mBCTel = RemoveNonNumerric(BCTel);
            //        mBCTel = SetPhoneFormat(mBCTel) + ",";
            //    }
            //    if (NullableCheck(BoothTel))
            //    {
            //        mBoothTel = RemoveNonNumerric(BoothTel);
            //        mBoothTel = SetPhoneFormat(mBoothTel) + ",";
            //    }
            //}
            //else
            //{
            //    mBranchTel = BranchTel + ",";
            //    mBCTel = BCTel + ",";
            //    mBoothTel = BoothTel + ",";
            //}
         



            //outPut = mBranchTel + mBCTel + mBoothTel;
            //outPut = outPut.TrimEnd(',');



            string mTel="";
            if (InternationalBranch != "X")
            {




                if (NullableCheck(_Tel))
                {
                    mTel = RemoveNonNumerric(_Tel);
                    mTel = SetPhoneFormat(mTel) + ",";
                }
               
            }
            else
            {
                mTel = _Tel + ",";
               
            }




            outPut = mTel.Trim();
            outPut = outPut.TrimEnd(',');
            //if (outPut.Trim() == "")
            //{
            //    outPut = "-";
            //}
            return outPut;

        }
        set
        {
            _Tel = value;
        
        }
    }
    string _Fax=string.Empty;
    public string Fax
    {
        get
        {

            string outPut = "";
            //string mBranchFax = "";

            //if (NullableCheck(BranchFax))
            //{

            //    mBranchFax = RemoveNonNumerric(BranchFax);
            //    mBranchFax = SetPhoneFormat(mBranchFax) + ",";
            //}
            
            //string mBCFax = "";

            //if (NullableCheck(BCFax))
            //{
            //    mBCFax = RemoveNonNumerric(BCFax);
            //    mBCFax = SetPhoneFormat(mBCFax) + ",";
            //}

            //string mBoothFax = "";
            //if (NullableCheck(BoothFax))
            //{
            //    mBoothFax = RemoveNonNumerric(BoothFax);
            //    mBoothFax = SetPhoneFormat(mBoothFax) + ",";
            //}



           // outPut = mBranchFax + mBCFax + mBoothFax;
            //outPut = outPut.TrimEnd(',');


            string mFax = "";
            if (InternationalBranch != "X")
            {




                if (NullableCheck(_Fax))
                {
                    mFax = RemoveNonNumerric(_Fax);
                    mFax = SetPhoneFormat(mFax) + ",";
                }

            }
            else
            {
                mFax = _Fax + ",";

            }

            outPut = mFax.Trim() ;
          outPut = outPut.TrimEnd(',');

            //if (outPut.Trim() == "")
            //{
            //    outPut = "-";
            //}
            return outPut;

        }
        set
        {
            _Fax = value;

        }
       
    }


    bool NullableCheck(string str)
    {
      return   (!String.IsNullOrEmpty(str));
    
    }

    #endregion



    string RemoveNonNumerric(string Phone)
    {

        string OutPut = "";
        string[] Temp = Phone.Split(',');

        foreach (string ph in Temp)
        {
            try
            {
                OutPut += Regex.Replace(ph, "[^0-9]", "") + ",";
            }
            catch (Exception ex)
            { }
        }


        OutPut = OutPut.TrimEnd(',');

        return OutPut;
    }

    string SetPhoneFormat(string Phone)
    {
        string OutPut = "";
        string[] Temp = Phone.Split(',');
        foreach (string ph in Temp)
        {
            try
            {
                OutPut += ph.Insert(1, "-").Insert(6, "-") + ", ";
            }
            catch (Exception ex)
            { }
        }
        OutPut = OutPut.Trim();
        OutPut = OutPut.TrimEnd(',');
        return OutPut;
    }

   


    #region Service Property
    //ATM
    //Branch
    //WesternUnionService
    //BusinessCenter
    //FxService
    //RemittanceService

    // add New Service 20/12/2010 
    
    private string _MicroBranch = string.Empty;
    public string MicroBranch
    {
        get
        {
            if (String.IsNullOrEmpty(_MicroBranch) == false)
            {

                _MicroBranch = _MicroBranch.ToUpper();
            }
            return _MicroBranch;
        }
        set
        {
            _MicroBranch = value;
        }
    }


    private string _SubBranch = string.Empty;
    public string SubBranch
    {
        get
        {
            if (String.IsNullOrEmpty(_SubBranch) == false)
            {

                _SubBranch = _SubBranch.ToUpper();
            }
            return _SubBranch;
        }
        set
        {
            _SubBranch = value;
        }
    }
    //===================================================== End  add New Service 20/12/2010 
    private string _ATM = string.Empty;

    public string ATM
    {
        get
        {
            if (String.IsNullOrEmpty(_ATM) == false)
            {

                _ATM = _ATM.ToUpper();
            }
            return _ATM;
        }
        set
        {
            _ATM = value;
        }
    }

    private string _Branch = string.Empty;

    public string Branch
    {
        get
        {

            if (String.IsNullOrEmpty(_Branch) == false)
            {

                _Branch = _Branch.ToUpper();
            }
            return _Branch;
        }
        set
        {
            _Branch = value;
        }
    }

    private string _BualuangExclusive = string.Empty;

    public string BualuangExclusive
    {
        get
        {
            if (String.IsNullOrEmpty(_BualuangExclusive) == false)
            {

                _BualuangExclusive = _BualuangExclusive.ToUpper();
            }
            return _BualuangExclusive;
        }
        set
        {
            _BualuangExclusive = value;
        }
    }


    private string _WesternUnionService = string.Empty;

    public string WesternUnionService
    {
        get
        {
            if (String.IsNullOrEmpty(_WesternUnionService) == false)
            {

                _WesternUnionService = _WesternUnionService.ToUpper();
            }
            return _WesternUnionService;
        }
        set
        {
            _WesternUnionService = value;
        }
    }

    private string _BusinessCenter = string.Empty;

    public string BusinessCenter
    {
        get
        {
            if (String.IsNullOrEmpty(_BusinessCenter) == false)
            {

                _BusinessCenter = _BusinessCenter.ToUpper();
            }
            return _BusinessCenter;
        }
        set
        {
            _BusinessCenter = value;
        }
    }

    private string _FXBooth = string.Empty;

    public string FXBooth
    {
        get
        {
            if (String.IsNullOrEmpty(_FXBooth) == false)
            {

                _FXBooth = _FXBooth.ToUpper();
            }
            return _FXBooth;
        }
        set
        {
            _FXBooth = value;
        }
    }

    private string _RemittanceService = string.Empty;

    public string RemittanceService
    {
        get
        {
            if (String.IsNullOrEmpty(_RemittanceService) == false)
            {

                _RemittanceService = _RemittanceService.ToUpper();
            }
            return _RemittanceService;
        }
        set
        {
            _RemittanceService = value;
        }
    }
    private string _InternationalBranch = string.Empty;

    public string InternationalBranch
    {
        get
        {
            if (String.IsNullOrEmpty(_InternationalBranch) == false)
            {

                _InternationalBranch = _InternationalBranch.ToUpper();
            }
            return _InternationalBranch;
        }
        set
        {
            _InternationalBranch = value;
        }
    }

    private string _FCDService = string.Empty;

    public string FCDService
    {
        get
        {
            if (String.IsNullOrEmpty(_FCDService) == false)
            {

                _FCDService = _FCDService.ToUpper();
            }
            return _FCDService;
        }
        set
        {
            _FCDService = value;
        }
    }

    private string _Lat = string.Empty;

    public string Lat
    {
        get
        {
            if (String.IsNullOrEmpty(_Lat) == false)
            {

                _Lat = _Lat.ToUpper();
            }
            return _Lat;
        }
        set
        {
            _Lat = value;
        }
    }
    private string _Lng = string.Empty;

    public string Lng
    {
        get
        {
            if (String.IsNullOrEmpty(_Lng) == false)
            {

                _Lng = _Lng.ToUpper();
            }
            return _Lng;
        }
        set
        {
            _Lng = value;
        }
    }


    #endregion

}
