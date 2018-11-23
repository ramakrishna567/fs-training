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
    class StateBO
    {
        public void InsertState(State objState)
        {
            objState.Validate();
            StateDB.ManageState(objState, ActionType.Add);
        }
        public void InsertState(int countryId, String stateName, bool isActive)
        {
            try
            {
                State objState = new State(-1, countryId, stateName, isActive);
                objState.Validate();
                StateDB.ManageState(objState, ActionType.Add);
            }
            catch (System.Data.SqlClient.SqlException)
            {
                throw new ApplicationException("CountryName Entered");
            }
        }
        public DataSet GetStates(int countryId = 0)
        {
            return StateDB.GetStates((int)ActiveStatus.All, countryId);
        }
        public void UpdateState(int stateId, int countryId, String stateName, bool isActive)
        {
            try
            {
                State objState = new State(stateId, countryId, stateName, isActive);
                objState.Validate();
                StateDB.ManageState(objState, ActionType.Edit);
            }
            catch(FormatException)
            {
                throw;
            }
        }
        public State GetState(int stateId)
        {
            return StateDB.GetState(stateId);
        }
        public void DeleteState(int stateId)
        {
            State objState = new State(stateId, 0, "", false);
            StateDB.ManageState(objState, ActionType.Delete);
        }
        public DataSet GetActiveStates(int countryId = 0)
        {
            return StateDB.GetStates((int)ActiveStatus.Active, countryId);
        }
        public bool IsStateExist(string CountryName,string stateName)
        {
            if (StateDB.IsStateExist(CountryName, stateName))
                throw new ApplicationException("state name already exists");
            else
                return StateDB.IsStateExist(CountryName, stateName);
        }
    }
}

