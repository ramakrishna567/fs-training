using ContactsManager.BO;
using ContactsManager.DataClass;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ContactsManager
{
    public partial class CountryForm : Form
    {
        #region Form Events
        private void ManageCountry_Load(object sender, EventArgs e)
        {
            dgvCountry.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            dgvCountry.AutoGenerateColumns = false;
            dgvCountry.AllowUserToAddRows = false;
            dgvCountry.AllowUserToDeleteRows = false;
            dgvCountry.ReadOnly = true;
            dgvCountry.MultiSelect = false;
            BindDataToGrid();
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            // if user click on Add button
            CountryDialog dlgCountry = new CountryDialog();
            if (dlgCountry.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                try
                {
                    CountryBO objCountryBO = new CountryBO();
                    objCountryBO.InsertCountry(dlgCountry.CountryName, dlgCountry.ZipCodeStart, dlgCountry.ZipCodeEnd, dlgCountry.IsActive);
                    BindDataToGrid();
                }
                catch (Exception)
                {
                    MessageBox.Show("CountryName AlredyEntered");
                }
            }
        }

        private void btnEdit_Click(object sender, EventArgs e)
        {
            // if user click on Edit button
            try
            {
                if (dgvCountry.RowCount != 0)
                {
                    int countryId;
                    countryId = (int)(dgvCountry.SelectedRows[0].Cells[0].Value);
                    CountryDialog dlgCountry = new CountryDialog();
                    CountryBO objCountryBO = new CountryBO();
                    Country objCountry = objCountryBO.GetCountry(countryId);
                    dlgCountry.CountryName = objCountry.CountryName;
                    dlgCountry.ZipCodeStart = Convert.ToInt32(objCountry.ZipCodeStart);
                    dlgCountry.ZipCodeEnd = Convert.ToInt32(objCountry.ZipCodeEnd);
                    dlgCountry.IsActive = objCountry.IsActive;
                    string country = objCountry.CountryName;
                    if (dlgCountry.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                    {
                        objCountry.CountryName = dlgCountry.CountryName;
                        objCountry.ZipCodeStart = dlgCountry.ZipCodeStart;
                        objCountry.ZipCodeEnd = dlgCountry.ZipCodeEnd;
                        objCountry.IsActive = dlgCountry.IsActive;
                        objCountryBO.UpdateCountry(objCountry);
                        BindDataToGrid();
                    }
                }
            }
            catch (System.Data.SqlClient.SqlException)
            {
                MessageBox.Show("CountryName AlreadyEntered");
            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            // if user click on delete button
            CountryBO objCountryBO = new CountryBO();
            if (dgvCountry.RowCount != 0)
            {
                DialogResult dr;
                dr = MessageBox.Show("Are you sure?", "Delete", MessageBoxButtons.YesNo);
                if (dr == System.Windows.Forms.DialogResult.No)
                {
                    return;
                }
                int countryId = (int)dgvCountry.SelectedRows[0].Cells[0].Value;
                objCountryBO.DeletCountry(countryId);
                BindDataToGrid();
            }
        }
        #endregion

        #region Private Methods
        /// <summary>
        ///    Bind all records into gridview
        /// </summary>
        private void BindDataToGrid()
        {
            try
            {
                DataSet ds;
                CountryBO objCountryBO = new CountryBO();
                ds = objCountryBO.GetCountries();
                dgvCountry.DataSource = ds;
                dgvCountry.DataMember = "Country";
            }
            catch (System.Data.SqlClient.SqlException)
            {
                MessageBox.Show("1.Check the Connection Connection string ","Unable to connect database ");
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }   
        #endregion

        #region Constructors
        public CountryForm()
        {
            InitializeComponent();
        }
        #endregion
    }
}
