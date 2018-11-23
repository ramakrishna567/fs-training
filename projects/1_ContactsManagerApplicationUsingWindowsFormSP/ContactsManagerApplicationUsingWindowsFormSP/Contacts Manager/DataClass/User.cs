using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsManager.DataClass
{
    class User
    {
          private string _Validation = "";
        public void Validate()
        {
            if (!String.IsNullOrEmpty(_Validation))
            {
                throw new ApplicationException(_Validation);
            }
        }
        public User()
        { }
        public User(int userId, string userName, string password, string firstName, string lastName, string emailId, string phoneNo, bool isActive)
        {
          
            _UserId = userId;
            this.UserName = userName;
            this.Password = password;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.EmailId = emailId;
            this.PhoneNo = phoneNo;
            this.IsActive = isActive;
        }
        private int _UserId;
        public int UserId
        {
            get
            {
                return _UserId;
            }
        }
        private string _UserName;
        public string UserName
        {
            get
            {
                return _UserName;
            }
            set
            {
                if (value == "")
                    _Validation += "Please provide a value for UserName" + "\t";
                _UserName = value;
            }
        }
        private string _Password;
        public string Password
        {
            get
            {
                return _Password;
            }
            set
            {
                if (value == "")
                    _Validation += "Please provide a value for Password" + "\t";
                _Password = value;
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
                    _Validation += "Please provide a value for FirstName" + "\t";
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
                _LastName = value;
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
                    _Validation += "Please provide a value for EmailId" + "\t";
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
                    _Validation += "Please provide a value for Phone" + "\t";
                _PhoneNo = value;
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
    

