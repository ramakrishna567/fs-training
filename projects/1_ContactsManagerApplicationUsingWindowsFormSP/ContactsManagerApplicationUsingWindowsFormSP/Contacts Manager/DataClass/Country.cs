using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsManager.DataClass
{
    public class Country
    {
        private string _Validation = "";
        public void Validate()
        {
            if (!String.IsNullOrEmpty(_Validation))
            {
                throw new ApplicationException(_Validation);
            }
        }
        public Country()
        {
        }
        public Country(int countryId, string countryName, long zipCodeStart, long zipcodeEnd, bool isActive)
        {
            _CountryId = countryId;
            this.CountryName = countryName;
            this.ZipCodeStart = zipCodeStart;
            this.ZipCodeEnd = zipcodeEnd;
            this.IsActive = isActive;
        }
        private int _CountryId;
        public int CountryId
        {
            get
            {
                return _CountryId;
            }
        }
        private string _CountryName;
        public string CountryName
        {
            get
            {
                return _CountryName;
            }
            set
            {
                if (value == "")
                    _Validation += "Please provide a Value for CountryName" + "\t";
                _CountryName = value;
            }
        }
        private long _ZipCodeStart;
        public long ZipCodeStart
        {
            get
            {
                return _ZipCodeStart;
            }
            set
            {
                if (value <= 0)
                    _Validation += "Please provide a valid ZipCode" + "\t";
                _ZipCodeStart = value;
            }
        }
        private long _ZipCodeEnd;
        public long ZipCodeEnd
        {
            get
            {
                return _ZipCodeEnd;
            }
            set
            {
                if (value <= 0)
                    _Validation += "Please provide a valid ZipCode" + "\t";
                _ZipCodeEnd = value;
            }
        }
        private bool _IsActive;
        public bool IsActive
        {
            get
            {
                return _IsActive;
            }
            set
            {
                _IsActive = value;
            }
        }
    }
}


