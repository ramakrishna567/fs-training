using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using ContactsManager.DataClass;

namespace ContactsManager.DB
{
    class AddressBookDB
    {
        public static void ManageAddress(Address objAddressbook, ActionType action)
        {
            try
            {
                string spName = "spManageAddress";
                SqlParameter pActionType = new SqlParameter("@ActionType", SqlDbType.TinyInt);
                SqlParameter pAddressId = new SqlParameter("@PKAddressId", SqlDbType.Int);
                SqlParameter pStateId = new SqlParameter("@FKStateId", SqlDbType.Int);
                SqlParameter pUserId = new SqlParameter("@FKUserId", SqlDbType.Int);
                SqlParameter pFirstName = new SqlParameter("@FirstName", SqlDbType.VarChar, 50);
                SqlParameter pLastName = new SqlParameter("@LastName", SqlDbType.VarChar, 50);
                SqlParameter pEmailId = new SqlParameter("@EmailId", SqlDbType.VarChar, 50);
                SqlParameter pPhoneNo = new SqlParameter("@PhoneNo", SqlDbType.VarChar, 50);
                SqlParameter pAddress1 = new SqlParameter("@Address1", SqlDbType.VarChar, 50);
                SqlParameter pAddress2 = new SqlParameter("@Address2", SqlDbType.VarChar, 50);
                SqlParameter pStreet = new SqlParameter("@Street", SqlDbType.VarChar, 50);
                SqlParameter pCity = new SqlParameter("@City", SqlDbType.VarChar, 50);
                SqlParameter pZipCode = new SqlParameter("@ZipCode", SqlDbType.BigInt, 50);
                SqlParameter pIsActive = new SqlParameter("@IsActive", SqlDbType.Bit);
                pActionType.Value = action;
                if (action == ActionType.Add)
                    pAddressId.Direction = ParameterDirection.Input;
                else
                    pAddressId.Value = objAddressbook.AddressId;
                if (action == ActionType.Add || action == ActionType.Edit)
                {
                    pStateId.Value = objAddressbook.StateId;
                    pUserId.Value = objAddressbook.UserId;
                    pFirstName.Value = objAddressbook.FirstName;
                    pLastName.Value = objAddressbook.LastName;
                    pEmailId.Value = objAddressbook.EmailId;
                    pPhoneNo.Value = objAddressbook.PhoneNo;
                    pAddress1.Value = objAddressbook.Address1;
                    pAddress2.Value = objAddressbook.Address2;
                    pStreet.Value = objAddressbook.Street;
                    pCity.Value = objAddressbook.City;
                    pZipCode.Value = objAddressbook.ZipCode;
                    pIsActive.Value = objAddressbook.IsActive;
                }
                SqlHelper.ExecuteNonQuery(Helper.ConnectionString, CommandType.StoredProcedure, spName, pActionType, pAddressId, pStateId, pUserId, pFirstName, pLastName, pEmailId, pPhoneNo, pAddress1, pAddress2, pStreet, pCity, pZipCode, pIsActive);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static DataSet GetUserAddresses()
        {
            try
            {
                string spName = "spGetAllUserAddresses";
                SqlParameter pPKUserId = new SqlParameter("@PKUserId", SqlDbType.Int);
                pPKUserId.Value = Helper.UserId;
                DataSet ds = SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, spName, pPKUserId);
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static Address GetAddress(int addressId)
        {
            try
            {
                string spName = "spGetAllAddresses";
                SqlParameter pAddressId = new SqlParameter("@PKAddressId", SqlDbType.Int);
                pAddressId.Value = addressId;
                SqlDataReader drRow = SqlHelper.ExecuteReader(Helper.ConnectionString, CommandType.StoredProcedure, spName, pAddressId);
                Address objAddbook = null;
                if (drRow.HasRows)
                {
                    drRow.Read();
                    int addressid = drRow.GetInt32(drRow.GetOrdinal("PKAddressId"));
                    string stateName = drRow.GetString(drRow.GetOrdinal("StateName"));
                    int stateId = drRow.GetInt32(drRow.GetOrdinal("FKStateId"));
                    int userId = drRow.GetInt32(drRow.GetOrdinal("FKUserId"));
                    string firstName = drRow.GetString(drRow.GetOrdinal("FirstName"));
                    string lastName = drRow.GetString(drRow.GetOrdinal("LastName"));
                    string emailId = drRow.GetString(drRow.GetOrdinal("EmailId"));
                    string phoneNo = drRow.GetString(drRow.GetOrdinal("PhoneNo"));
                    string address1 = drRow.GetString(drRow.GetOrdinal("Address1"));
                    string address2 = drRow.GetString(drRow.GetOrdinal("Address2"));
                    string street = drRow.GetString(drRow.GetOrdinal("Street"));
                    string city = drRow.GetString(drRow.GetOrdinal("City"));
                    long zipCode = drRow.GetInt64(drRow.GetOrdinal("ZipCode"));
                    bool isActive = Convert.ToBoolean(drRow["IsActive"]);
                    int countryId = drRow.GetInt32(drRow.GetOrdinal("FKCountryId"));
                    objAddbook = new Address(addressid, stateName, stateId, countryId, userId, firstName, lastName, emailId, phoneNo, address1, address2, street, city, zipCode, isActive);
                }
                drRow.Close();
                return objAddbook;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static DataSet GetAddresses()
        {
            try
            {
                string spName = "spGetAllAddresses";
                SqlParameter pPKAddressId = new SqlParameter("@PKAddressId", SqlDbType.Int);
                pPKAddressId.Value = -1;
                DataSet ds = SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, spName, pPKAddressId);
                ds.Tables[0].TableName = "Address";
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static DataSet GetFilteredAddressbook(string countryId, string stateId, bool isActive)
        {
            try
            {
                string spName = "spGetFilteredAddressbook";
                SqlParameter pCountryID = new SqlParameter("@PKCountryID", SqlDbType.Int);
                pCountryID.Value = countryId == "-99" ? null : countryId;
                SqlParameter pStateID = new SqlParameter("@PKStateID", SqlDbType.Int);
                pStateID.Value = stateId == "-99" ? null : stateId;
                SqlParameter pIsActive = new SqlParameter("@IsActive", SqlDbType.Bit);
                pIsActive.Value = isActive;
                DataSet ds = SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, spName, pCountryID, pStateID, pIsActive);
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

