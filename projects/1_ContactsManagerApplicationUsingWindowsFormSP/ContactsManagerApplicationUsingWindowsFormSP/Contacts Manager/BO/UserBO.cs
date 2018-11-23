using ContactsManager.DAL;
using ContactsManager.DataClass;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsManager.BO
{
    class UserBO
    {
        UserDB objUserDal = new UserDB();
        public void InsertUser(User objUser)
        {
            objUser.Validate();
            UserDB.ManageUser(objUser, ActionType.Add);
        }
        public void InsertUser(string userName, string password, string firstName, string lastName, string emailId, string phoneNo, bool isActive)
        {
            try
            {
            User objUser = new User(-1, userName, password, firstName, lastName, emailId, phoneNo, isActive);
            objUser.Validate();
            UserDB.ManageUser(objUser, ActionType.Add);
           }
            catch (System.Data.SqlClient.SqlException )
            {
                throw ;
            }
        }
        public DataSet GetUsers()
        {
            return UserDB.GetUsers((int)ActiveStatus.All);
        }
        public DataSet GetActiveUsers()
        {
            return UserDB.GetUsers((int)ActiveStatus.Active);
        }
        public void UpdateUser(User objUser)
        {
            objUser.Validate();
            UserDB.ManageUser(objUser, ActionType.Edit);
        }
        public void UpdateUser(int PKUserId, string UserName, string Password, string FirstName, string LastName, string EmailId, string PhoneNo, bool IsActive)
        {
            try
            {
            User objUser = new User(PKUserId, UserName, Password, FirstName, LastName, EmailId, PhoneNo, IsActive);
            objUser.Validate();
            UserDB.ManageUser(objUser, ActionType.Edit);
            }
            catch (System.Data.SqlClient.SqlException)
            {
                throw;
            }
        }
        public void DeleteUser(int PKUserId)
        {
            User objUser = new User(PKUserId, "", "", "", "", "", "", false);
            UserDB.ManageUser(objUser, ActionType.Delete);
        }
        public User GetUser(int UserId)
        {
            User objUser = new User();
            objUser = UserDB.GetUserId(UserId);
            return objUser;
        }
        public int AuthenticateUser(string userName, string password)
        {
            return UserDB.AuthenticateUser(userName, password);
        }
    }
}

