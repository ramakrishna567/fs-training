using ContactsManager.DataClass;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using ContactsManager.DB;

namespace ContactsManager.BO
{
    class CountryBO
    {
        CountyrDB objCountryDB = new CountyrDB();
        public void InsertCountry(Country objCountry)
        {
            objCountry.Validate();
            CountyrDB.ManageCountry(objCountry, ActionType.Add);
        }
        public void InsertCountry(string CountryName, long ZipCodeStart, long ZipCodeEnd, bool IsActive)
        {
            try
            {
             Country objCountry = new Country(-1, CountryName, ZipCodeStart, ZipCodeEnd, IsActive);
             objCountry.Validate();
             CountyrDB.ManageCountry(objCountry, ActionType.Add);
            }
            catch (System.Data.SqlClient.SqlException)
            {
                throw;
            }
        }
        public void UpdateCountry(Country objCountry)
        {
            objCountry.Validate();
            CountyrDB.ManageCountry(objCountry, ActionType.Edit);
        }
        public void UpdateCountry(int countyId, string countryName, int zipCodeStart, int zipCodeEnd, bool isActive)
        {
            try
            {
                Country objCountry = new Country(countyId, countryName, zipCodeStart, zipCodeEnd, isActive);
                objCountry.Validate();
                CountyrDB.ManageCountry(objCountry, ActionType.Edit);
              
           }
            catch (System.Data.SqlClient.SqlException)
            {
                throw;
            }
        }
        public void DeletCountry(int countryId)
        {
            Country objCountry = new Country(countryId, "", 0, 0, false);
            CountyrDB.ManageCountry(objCountry, ActionType.Delete);
        }
        public DataSet GetCountries()
        {
            return CountyrDB.GetCountries((int)ActiveStatus.All);
        }
        public DataSet GetActiveCountries()
        {
            return CountyrDB.GetCountries((int)ActiveStatus.Active);
        }
        public Country GetCountry(int countryId)
        {
            Country objCountry = new Country();
            objCountry = CountyrDB.GetCountry(countryId);
            return objCountry;
        }
    }
}

