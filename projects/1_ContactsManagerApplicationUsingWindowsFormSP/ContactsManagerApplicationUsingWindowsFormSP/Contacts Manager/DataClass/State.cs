using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsManager.DataClass
{
    class State
    {
         private string _Validation = "";
        public void Validate()
        {
            if (!string.IsNullOrEmpty(_Validation))
            {
                throw new ApplicationException(_Validation);
            }
        }
        public State()
        { }
        public State(int stateId, int countryId, string stateName, bool isActive)
        {
         
            _StateId = stateId;
            this.CountryId = countryId;
            this.StateName = stateName;
            this.IsActive = isActive;
        }
        private int _StateId;
        public int StateId
        {
            get
            {
                return _StateId;
            }
        }
        private int _CountryId;
        public int CountryId
        {
            get
            {
                return _CountryId;
            }
            set
            {
                _CountryId = value;
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
                    _Validation += "Please provide a value for StateName" + "\t";
                _StateName = value;
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
    

