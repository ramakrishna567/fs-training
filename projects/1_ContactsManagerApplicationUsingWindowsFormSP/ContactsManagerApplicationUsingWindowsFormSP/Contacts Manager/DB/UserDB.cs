using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using ContactsManager.DataClass;

namespace ContactsManager.DAL
{
    class UserDB
    {
        public static void ManageUser(User objUser, ActionType action)
        {
            try
            {
                SqlParameter pActionType = new SqlParameter("@ActionType", SqlDbType.TinyInt);
                SqlParameter pPKUserId = new SqlParameter("@PKUserId", SqlDbType.Int);
                SqlParameter pUserName = new SqlParameter("@UserName", SqlDbType.VarChar, 50);
                SqlParameter pPassword = new SqlParameter("@Password", SqlDbType.VarChar, 50);
                SqlParameter pFirstName = new SqlParameter("@FirstName", SqlDbType.VarChar, 50);
                SqlParameter pLastName = new SqlParameter("@LastName", SqlDbType.VarChar, 50);
                SqlParameter pEmailId = new SqlParameter("@EmailId", SqlDbType.VarChar, 50);
                SqlParameter pPhoneNo = new SqlParameter("@PhoneNo", SqlDbType.VarChar, 50);
                SqlParameter pIsActive = new SqlParameter("@IsActive", SqlDbType.Bit);
                pPKUserId.Value = objUser.UserId;
                pUserName.Value = objUser.UserName;
                pPassword.Value = objUser.Password;
                pFirstName.Value = objUser.FirstName;
                pLastName.Value = objUser.LastName;
                pEmailId.Value = objUser.EmailId;
                pPhoneNo.Value = objUser.PhoneNo;
                pIsActive.Value = objUser.IsActive;
                pActionType.Value = Convert.ToInt32(action);
                if (action == ActionType.Add)
                {
                    pPKUserId.Direction = ParameterDirection.Output;
                    pPKUserId.Value = -1;
                }
                SqlHelper.ExecuteNonQuery(Helper.ConnectionString, CommandType.StoredProcedure, "spManageUserDetails", pActionType, pPKUserId, pUserName, pPassword, pFirstName, pLastName, pEmailId, pPhoneNo, pIsActive);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static DataSet GetUsers(int userId)
        {
            try
            {
                string spUserName = "spGetAllUsers";
                SqlParameter pUserId = new SqlParameter("@UserId", SqlDbType.Int);
                pUserId.Value = userId;
               
                    return SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, spUserName, pUserId);
            }
            catch (Exception ex)
            {
                throw ex;
            }           
        }

        public static User GetUserId(int userId)
        {
            try
            {
                string spName = "spGetAllUsers";
                SqlParameter pUserId = new SqlParameter("@UserId", SqlDbType.Int);
                pUserId.Value = userId;
                SqlDataReader drRow = SqlHelper.ExecuteReader(Helper.ConnectionString, CommandType.StoredProcedure, spName, pUserId);
                User objUser = null;
                if (drRow.HasRows)
                {
                    drRow.Read();
                    objUser = new User(drRow.GetInt32(drRow.GetOrdinal("PKUserId")), drRow["UserName"].ToString(), drRow["Password"].ToString(), drRow["FirstName"].ToString(), drRow["LastName"].ToString(), drRow["EmailId"].ToString(), drRow["PhoneNo"].ToString(), (bool)drRow["IsActive"]);
                }
                drRow.Close();
                return objUser;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static int AuthenticateUser(string userName, string password)
        {
            try
            {
                string spName = "spAuthenticateUser";
                SqlParameter pPKUserId = new SqlParameter("@PKUserId", SqlDbType.Int);
                SqlParameter pUserName = new SqlParameter("@UserName", SqlDbType.VarChar, 50);
                SqlParameter pPassword = new SqlParameter("@Password", SqlDbType.VarChar, 50);
                pPKUserId.Direction = ParameterDirection.Output;
                pUserName.Value = userName;
                pPassword.Value = password;
                SqlHelper.ExecuteNonQuery(Helper.ConnectionString, CommandType.StoredProcedure, spName, pUserName, pPassword, pPKUserId);
                if (pPKUserId.Value == DBNull.Value)
                    return 0;
                return Convert.ToInt32(pPKUserId.Value);
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
    }
}





