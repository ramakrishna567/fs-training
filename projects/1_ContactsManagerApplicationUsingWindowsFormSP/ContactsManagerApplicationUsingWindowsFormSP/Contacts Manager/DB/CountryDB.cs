using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using AddressBook.DataClass;

namespace AddressBook.DAL
{
    class CountryDO
    {
        public void ManageCountry(Country objCountry,ActionType action)
        {
            SqlParameter pPKCountryId = new SqlParameter("@PKCountryId", SqlDbType.Int);
            SqlParameter pCountryName = new SqlParameter("@CountryName", SqlDbType.VarChar, 50);
            SqlParameter pZipCodeStart = new SqlParameter("@ZipCodeStart", SqlDbType.Int);
            SqlParameter pZipCodeEnd = new SqlParameter("@ZipCodeEnd", SqlDbType.Int);
            SqlParameter pIsActive = new SqlParameter("IsActive", SqlDbType.Bit);
            SqlParameter pActionType = new SqlParameter("ActionType", SqlDbType.Int);
            pCountryName.Value = objCountry.CountryName;
            pZipCodeStart.Value = objCountry.ZipCodeStart;
            pZipCodeEnd.Value = objCountry.ZipCodeEnd;
            pIsActive.Value = objCountry.IsActive;
            pActionType.Value = (int)action;
            pPKCountryId.Value = objCountry.PKCountryId;
            if(action==ActionType.Add)
            {
                 pPKCountryId.Direction = ParameterDirection.Output;
                pPKCountryId.Value =-1;
            }
            SqlHelper.ExecuteNonQuery(Helper.ConnectionString, CommandType.StoredProcedure, "spManageCountry", pActionType, pPKCountryId, pCountryName, pZipCodeStart, pZipCodeEnd, pIsActive);
        }
        public DataSet GetCountryByCountryId(int countryId)
        {
            SqlParameter pPKCountryId = new SqlParameter("@PKCountryId", SqlDbType.Int);
            pPKCountryId.Value = countryId;
            return SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, "spGetAllCountry", pPKCountryId);
        }
        public Country GetCountry(int countryId)
        {
            SqlParameter pPKCountryId = new SqlParameter("@PKCountryId", SqlDbType.Int);
            pPKCountryId.Value = countryId;
           SqlDataReader drRow= SqlHelper.ExecuteReader(Helper.ConnectionString, CommandType.StoredProcedure, "spGetAllCountry", pPKCountryId);
           Country objCountry = null; 
            if (drRow.HasRows)
           {
               drRow.Read();
                objCountry = new Country();
              objCountry.PKCountryId= drRow.GetInt32(drRow.GetOrdinal("PKCountryId"));
              objCountry.CountryName = drRow["CountryName"].ToString();
              objCountry.ZipCodeStart = Convert.ToInt32(drRow["ZipCodeStart"]);
              objCountry.ZipCodeEnd = Convert.ToInt32(drRow["ZipCodeEnd"]);
              objCountry.IsActive = (bool)(drRow["IsActive"]);
           }
           drRow.Close();
           return objCountry;
        }
        public bool CountryAlreadyExit(string CountryName)
        {
            SqlParameter pCountryName = new SqlParameter("@CountryName", SqlDbType.VarChar, 50);
            pCountryName.Value = CountryName;
            int count = Convert.ToInt32(SqlHelper.ExecuteScalar(Helper.ConnectionString, CommandType.StoredProcedure, "spCountryExit", pCountryName));
            return count != 0;
        }
        public DataSet GetAllActiveCountries(ActiveStatus status)
        {
            SqlParameter pPKCountryId = new SqlParameter("@PKCountryId", SqlDbType.Int);
            pPKCountryId.Value =(int) status;
            return SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, "spGetAllCountry", pPKCountryId);
        }    
    }
}
