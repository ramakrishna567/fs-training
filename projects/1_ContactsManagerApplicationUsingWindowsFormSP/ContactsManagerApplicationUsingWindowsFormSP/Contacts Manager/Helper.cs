using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsManager
{
    #region Public Method
    public class Helper
    {

        public static string ConnectionString
        {

            get
            {
                return System.Configuration.ConfigurationManager.ConnectionStrings["ContactManager"].ConnectionString;
            }
        }
        public static string Role;
        public static int UserId;
    }
    public enum ActionType
    {
        Add = 1, Edit, Delete
    }
    public enum ActiveStatus
    {
        All = -1,
        Active = -2,
        Inactive = -3
    }
    #endregion
}
