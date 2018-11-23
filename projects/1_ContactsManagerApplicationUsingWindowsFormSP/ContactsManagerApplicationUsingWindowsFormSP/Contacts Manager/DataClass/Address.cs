using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsManager.DataClass
{
    class Address
    {
         private string _Validation = "";
        public void Validate()
        {
            if (!String.IsNullOrEmpty(_Validation))
            {
                throw new ApplicationException(_Validation);
            }
        }
        public  Address()
        {
        }
        public Address(int addressId, string stateName, int stateId, int userId, string firstName, string lastName, string emailId, string phoneNo, string address1, string address2, string street, string city, long zipCode, bool isActive)
        {
           
            _AddressId = addressId;
            this.StateId = stateId;
            this.StateName = stateName;
            this.UserId = userId;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailId = emailId;
            this.PhoneNo = phoneNo;
            this.Address1 = address1;
            this.Address2 = address2;
            this.Street = street;
            this.City = city;
            this.ZipCode = zipCode;
            this.IsActive = isActive;
        }
        public Address(int addressId, string stateName, int stateId, int countryId, int userId, string firstName, string lastName, string emailId, string phoneNo, string address1, string address2, string street, string city, long zipCode, bool isActive)
        {
            _AddressId = addressId;
            this.StateId = stateId;
            this.StateName = stateName;
            this.UserId = userId;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailId = emailId;
            this.PhoneNo = phoneNo;
            this.Address1 = address1;
            this.Address2 = address2;
            this.Street = street;
            this.City = city;
            this.ZipCode = zipCode;
            this.IsActive = isActive;
            this.CountryID = countryId;
        }
        public Address(int addressId, int stateId, int userId, string firstName, string lastName, string emailId, string phoneNo, string address1, string address2, string street, string city, long zipCode, bool isActive)
        {
            _AddressId = addressId;
            this.StateId = stateId;
            this.UserId = userId;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailId = emailId;
            this.PhoneNo = phoneNo;
            this.Address1 = address1;
            this.Address2 = address2;
            this.Street = street;
            this.City = city;
            this.ZipCode = zipCode;
            this.IsActive = isActive;
        }
        private int _AddressId;
        public int AddressId
        {
            get
            {
                return _AddressId;
            }
            set
            {
                _AddressId = value;
            }


        }
        private int _StateId;
        public int StateId
        {
            get
            {
                return _StateId;
            }
            set
            {
                _StateId = value;
            }
        }
        public int _CountryID;
        public int CountryID
        {
            get
            {
                return _CountryID;
            }
            set
            {
                _CountryID = value;
            }
        }
        private int _UserId;
        public int UserId
        {
            get
            {
                return _UserId;
            }
            set
            {
                _UserId = value;
            }
        }
        private string _StateName;
        public string StateName
        {
            get
            {
                return _StateName;
            }
            set
            {
                if (value == "")
                {
                    _Validation += "Please provide a value for StateName" + "\t";
                    _StateName = value;
                }
                else
                    _StateName = value;
            }
        }

        private string _FirstName;
        public string FirstName
        {
            get
            {
                return _FirstName;
            }
            set
            {
                if (value == "")
                {
_Validation += "Please provide a value for FirstName" + "\t";                    
_FirstName = value;
                }
                else
                    _FirstName = value;
            }
        }
        private string _LastName;
        public string LastName
        {
            get
            {
                return _LastName;
            }
            set
            {
                if (value == "")
                {
_Validation += "Please provide a value for LastName" + "\t";
                    _LastName = value;
                }
                else
                {
                    _LastName = value;
                }
            }
        }
        private string _EmailId;
        public string EmailId
        {
            get
            {
                return _EmailId;
            }
            set
            {
                if (value == "")
                {
_Validation += "Please provide a value for EmailId" + "\t";
                    _EmailId = value;
                }
                else
                    _EmailId = value;
            }
        }
        private string _PhoneNo;
        public string PhoneNo
        {
            get
            {
                return _PhoneNo;
            }
            set
            {
                if (value == "")
                {
                   _Validation += "Please provide a value for PhoneNo" + "\t";
                    _PhoneNo = value;
                }
                else
                    _PhoneNo = value;
            }
        }
        private string _Address1;
        public string Address1
        {
            get
            {
                return _Address1;
            }
            set
            {
                if (value == "")
                {
                   _Validation += "Please provide a value for Address1" + "\t";
                    _Address1 = value;
                }
                else
                    _Address1 = value;
            }
        }
        private string _Address2;
        public string Address2
        {
            get
            {
                return _Address2;
            }
            set
            {
                if (value == "")
                {
                    _Validation += "Please provide a value for Address2" + "\t";
                    _Address2 = value;
                }
                else
                    _Address2 = value;
            }
        }
        private string _Street;
        public string Street
        {
            get
            {
                return _Street;
            }
            set
            {
                if (value == "")
                {
                  _Validation += "Please provide a value for Street" + "\t";
                    _Address1 = value;
                }
                else
                    _Street = value;
            }
        }
        private string _City;
        public string City
        {
            get
            {
                return _City;
            }
            set
            {
                if (value == "")
                {
                   _Validation += "Please provide a value for City" + "\t";
                    _City = value;
                }
                else
                    _City = value;
            }
        }
        private long _ZipCode;
        public long ZipCode
        {
            get
            {
                return _ZipCode;
            }
            set
            {
                if (value <= 0)
                {
_Validation += "Please provide a value for ZipCode" + "\t";
                    _ZipCode = value;

                }
                else
                    _ZipCode = value;
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


