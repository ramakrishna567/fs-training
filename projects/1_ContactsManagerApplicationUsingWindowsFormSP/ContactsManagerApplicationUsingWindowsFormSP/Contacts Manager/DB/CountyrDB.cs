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
  public class CountyrDB
    {
        Country objcountry = new Country();

        public static void ManageCountry(Country objCountry, ActionType action)
        {
            try
            {
                string spName = "spManageCountry";
                SqlParameter pActionType = new SqlParameter("@ActionType", SqlDbType.TinyInt);
                SqlParameter pCountryId = new SqlParameter("@PKCountryId", SqlDbType.Int);
                SqlParameter pCountryName = new SqlParameter("@CountryName", SqlDbType.VarChar, 50);
                SqlParameter pZipCodeStart = new SqlParameter("@ZipCodeStart", SqlDbType.BigInt);
                SqlParameter pZipCodeEnd = new SqlParameter("@ZipCodeEnd", SqlDbType.BigInt);
                SqlParameter pIsActive = new SqlParameter("@IsActive", SqlDbType.Bit);
                pActionType.Value = action;
                if (action == ActionType.Add)
                    pCountryId.Direction = ParameterDirection.Input;
                else
                    pCountryId.Value = objCountry.CountryId;
                if (action == ActionType.Add || action == ActionType.Edit)
                {
                    pCountryName.Value = objCountry.CountryName;
                    pZipCodeStart.Value = objCountry.ZipCodeStart;
                    pZipCodeEnd.Value = objCountry.ZipCodeEnd;
                    pIsActive.Value = objCountry.IsActive;
                }
                SqlHelper.ExecuteNonQuery(Helper.ConnectionString, CommandType.StoredProcedure, spName, pActionType, pCountryId, pCountryName, pZipCodeStart, pZipCodeEnd, pIsActive);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            }
        public static DataSet GetCountries(int countryId)
        {
           
            string spCountryName = "spGetAllCountries";
            SqlParameter pCountryId = new SqlParameter("@PKCountryId", SqlDbType.Int);
            pCountryId.Value = countryId;
            DataSet ds = SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, spCountryName, pCountryId);
            ds.Tables[0].TableName = "Country";
            return ds;
        }
        public static Country GetCountry(int countryId)
        {
            string spName = "spGetAllCountries";
            SqlParameter pCountryId = new SqlParameter("@PKCountryId", SqlDbType.Int);
            pCountryId.Value = countryId;
            SqlDataReader drRow = SqlHelper.ExecuteReader(Helper.ConnectionString, CommandType.StoredProcedure, spName, pCountryId);
            Country objCountry = null;
            if (drRow.HasRows)
            {
                drRow.Read();
                objCountry = new Country(drRow.GetInt32(drRow.GetOrdinal("PKCountryId")), drRow["CountryName"].ToString(), Convert.ToInt32(drRow["ZipCodeStart"]), Convert.ToInt32(drRow["ZipCodeEnd"]), (bool)drRow["IsActive"]);
            }
            drRow.Close();
            return objCountry;
        }
    }
}
    
    
    

