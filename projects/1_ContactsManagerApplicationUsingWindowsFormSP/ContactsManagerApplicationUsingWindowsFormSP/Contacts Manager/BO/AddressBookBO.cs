using ContactsManager.DAL;
using ContactsManager.DataClass;
using ContactsManager.DB;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsManager.BO
{
    class AddressBookBO
    {
        AddressBookDB objAddressDB = new AddressBookDB();
        public DataSet GetAddresses()
        {
            return AddressBookDB.GetAddresses();
        }
        public void InsertAddress(Address objAddbook)
        {
            objAddbook.Validate();
            AddressBookDB.ManageAddress(objAddbook, ActionType.Add);
        }
        public void InsertAddress(int stateId, int userId, string firstName, string lastName, string emailId, string phoneNo, string address1, string address2, string city, string street, long zipCode, bool isActive)
        {
            Address objAddbook = new Address(-1, stateId, userId, firstName, lastName, emailId, phoneNo, address1, address2, street, city, zipCode, isActive);
            objAddbook.Validate();
            AddressBookDB.ManageAddress(objAddbook, ActionType.Add);
        }

        public void UpdateAddress(int addressId, int stateId, int userId, string firstName, string lastName, string emailId, string phoneNo, string address1, string address2, string city, string street, long zipCode, bool isActive)
        {
            Address objAddbook = new Address(addressId, stateId, userId, firstName, lastName, emailId, phoneNo, address1, address2, street, city, zipCode, isActive);
            objAddbook.Validate();
            AddressBookDB.ManageAddress(objAddbook, ActionType.Edit);
        }
        public Address GetAddress(int addressId)
        {
            return AddressBookDB.GetAddress(addressId);
        }

        public void DeleteAddress(int adressId)
        {
            Address objAddbook = new Address(adressId, 0, 0, "", "", "", "", "", "", "", "", 0, false);
            AddressBookDB.ManageAddress(objAddbook, ActionType.Delete);
        }
      
        public DataSet GetFilteredAddress(string countryId, string stateId, string isActive)
        {
            bool ia;
            ia = isActive == "1" ? true : false;
            return AddressBookDB.GetFilteredAddressbook(countryId, stateId, ia);
        }
        public DataSet GetUserAddress()
        {
            return AddressBookDB.GetUserAddresses();
        }
    }
}


