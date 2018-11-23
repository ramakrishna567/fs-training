using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using ContactsManager.DataClass;
using System.Windows;

namespace ContactsManager.DAL
{
    class StateDB
    {
        public static void ManageState(State objState, ActionType action)
        {
            try
            {
                string spName = "spManageState";
                SqlParameter pActionType = new SqlParameter("@ActionType", SqlDbType.TinyInt);
                SqlParameter pStateId = new SqlParameter("@PKStateId", SqlDbType.Int);
                SqlParameter pCountryId = new SqlParameter("@FKCountryId", SqlDbType.Int);
                SqlParameter pStateName = new SqlParameter("@StateName", SqlDbType.VarChar, 50);
                SqlParameter pIsActive = new SqlParameter("@IsActive", SqlDbType.Bit);
                pActionType.Value = action;
                if (action == ActionType.Add)
                    pStateId.Direction = ParameterDirection.Input;
                else
                    pStateId.Value = objState.StateId;
                if (action == ActionType.Add || action == ActionType.Edit)
                {
                    pCountryId.Value = objState.CountryId;
                    pStateName.Value = objState.StateName;
                    pIsActive.Value = objState.IsActive;
                }
                SqlHelper.ExecuteNonQuery(Helper.ConnectionString, CommandType.StoredProcedure, spName, pActionType, pStateId, pCountryId, pStateName, pIsActive);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static DataSet GetStates(int stateId, int countryId)
        {
            try
            {
                string spName = "spGetAllStates";
                SqlParameter pStateId = new SqlParameter("@StateId", SqlDbType.Int);
                SqlParameter pCountryId = new SqlParameter("@CountryId", SqlDbType.Int);
                pStateId.Value = stateId;

                if (countryId >= 0)
                    pCountryId.Value = countryId;
                else
                    pCountryId.Value = DBNull.Value;
                DataSet ds = SqlHelper.ExecuteDataset(Helper.ConnectionString, CommandType.StoredProcedure, spName, pStateId, pCountryId);
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static State GetState(int stateId)
        {
            try
            {
                string spName = "spGetAllStates";
                SqlParameter pStateId = new SqlParameter("@StateId", SqlDbType.Int);
                pStateId.Value = stateId;
                SqlDataReader drRow = SqlHelper.ExecuteReader(Helper.ConnectionString, CommandType.StoredProcedure, spName, pStateId);
                State objState = null;
                if (drRow.HasRows)
                {
                    drRow.Read();
                    objState = new State(drRow.GetInt32(drRow.GetOrdinal("PKStateId")), drRow.GetInt32(drRow.GetOrdinal("FKCountryId")), drRow["StateName"].ToString(), Convert.ToBoolean(drRow["IsActive"]));
                }
                drRow.Close();
                return objState;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static bool IsStateExist(string CountryName, string stateName)
        {
            try
            {
                string spName = "spIsStateExist";
                SqlParameter pCountryName = new SqlParameter("@CountryName", SqlDbType.VarChar, 20);
                SqlParameter pStateName = new SqlParameter("@StateName", SqlDbType.VarChar, 20);
                pCountryName.Value = CountryName;
                pStateName.Value = stateName;
                int count = Convert.ToInt32(SqlHelper.ExecuteScalar(Helper.ConnectionString, CommandType.StoredProcedure, spName,pCountryName, pStateName));
                return count != 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

