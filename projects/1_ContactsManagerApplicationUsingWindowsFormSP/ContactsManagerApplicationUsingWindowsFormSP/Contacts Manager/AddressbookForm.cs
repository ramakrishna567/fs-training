using ContactsManager.BO;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using ContactsManager.DataClass;

namespace ContactsManager
{
    public partial class AddressbookForm : Form
    {
        #region Form  Events
        private void ManageAddressBook_Load(object sender, EventArgs e)
        {
            CountryBO objCountryBO = new CountryBO();
            if (Helper.Role == "Admin")
            {
                BindDataToGrid();
                btnAdd.Enabled = false;
            }
            else
            {
                BindUserDataToGrid();
                btnAdd.Enabled = true;
            }
            cmbCountry.DisplayMember = "CountryName";
            cmbCountry.ValueMember = "PKCountryId";
            DataSet ds = objCountryBO.GetActiveCountries();
            cmbCountry.DataSource = ds.Tables[0];
            cmbStatus.Items.Insert(0, "InActive");
            cmbStatus.Items.Insert(1, "Active");
            cmbStatus.SelectedIndex = 1;
            dgvAddress.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            dgvAddress.AutoGenerateColumns = false;
            dgvAddress.AllowUserToAddRows = false;
            dgvAddress.AllowUserToDeleteRows = false;
            dgvAddress.ReadOnly = true;
            dgvAddress.MultiSelect = false;

        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            try
            {

                AddressbookDialog dlgAddressDialog = new AddressbookDialog();
                if (dlgAddressDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                {

                    Address objAddbook = new Address();
                    AddressBookBO objAddbookBO = new AddressBookBO();
                    objAddbookBO.InsertAddress(Convert.ToInt32(dlgAddressDialog.StateName), Helper.UserId, dlgAddressDialog.FirstName, dlgAddressDialog.LastName, dlgAddressDialog.EmailId, dlgAddressDialog.phoneNo, dlgAddressDialog.Address1, dlgAddressDialog.Address2, dlgAddressDialog.Street, dlgAddressDialog.City, dlgAddressDialog.ZipCode, dlgAddressDialog.IsActive);
                    if (Helper.Role == "Admin")
                    {
                        BindDataToGrid();
                        btnAdd.Enabled = false;
                    }
                    else
                    {
                        BindUserDataToGrid();
                        btnAdd.Enabled = true;
                    }
                }
            }
            catch (ApplicationException ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnEdit_Click(object sender, EventArgs e)
        {
            if (dgvAddress.RowCount != 0)
            {
                int addressId;
                addressId = (int)(dgvAddress.SelectedRows[0].Cells[0].Value);
                AddressBookBO objAddbookBO = new AddressBookBO();
                Address objAddbook = objAddbookBO.GetAddress(addressId);
                AddressbookDialog dlgAddressDialog = new AddressbookDialog( objAddbook.CountryID.ToString());
                dlgAddressDialog.StateName = objAddbook.StateId.ToString();
                dlgAddressDialog.FirstName = objAddbook.FirstName.ToString();
                dlgAddressDialog.LastName = objAddbook.LastName.ToString();
                dlgAddressDialog.EmailId = objAddbook.EmailId.ToString();
                dlgAddressDialog.phoneNo = objAddbook.PhoneNo.ToString();
                dlgAddressDialog.Address1 = objAddbook.Address1.ToString();
                dlgAddressDialog.Address2 = objAddbook.Address2.ToString();
                dlgAddressDialog.Street = objAddbook.Street.ToString();
                dlgAddressDialog.City = objAddbook.City.ToString();
                dlgAddressDialog.ZipCode = objAddbook.ZipCode;
                dlgAddressDialog.IsActive = objAddbook.IsActive;
                if (dlgAddressDialog.ShowDialog() == DialogResult.OK)
                {
                    objAddbookBO.UpdateAddress(objAddbook.AddressId, Convert.ToInt32(dlgAddressDialog.StateName), objAddbook.UserId, dlgAddressDialog.FirstName, dlgAddressDialog.LastName, dlgAddressDialog.EmailId, dlgAddressDialog.phoneNo, dlgAddressDialog.Address1, dlgAddressDialog.Address2, dlgAddressDialog.City, dlgAddressDialog.Street, dlgAddressDialog.ZipCode, Convert.ToBoolean(dlgAddressDialog.IsActive));
                    if (Helper.Role == "Admin")
                    {
                        BindDataToGrid();
                        btnAdd.Enabled = false;
                    }
                    else
                    {
                        BindUserDataToGrid();
                        btnAdd.Enabled = true;
                    }
                }
            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (dgvAddress.RowCount != 0)
            {
                DialogResult dr;
                dr = MessageBox.Show("Are you sure? Delete Address", "Delete", MessageBoxButtons.YesNo);
                if (dr == System.Windows.Forms.DialogResult.No)
                {
                    return;
                }
                int PKAddressId = (int)dgvAddress.SelectedRows[0].Cells[0].Value;
                AddressBookBO objAddbookBO = new AddressBookBO();
                objAddbookBO.DeleteAddress(PKAddressId);
                if (Helper.Role == "Admin")
                {
                    BindDataToGrid();
                    btnAdd.Enabled = false;
                }
                else
                {
                    BindUserDataToGrid();
                    btnAdd.Enabled = true;
                }
            }
        }

        private void btnSearch_Click(object sender, EventArgs e)
        {
            BindFilteredDataToGrid();

        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            if (Helper.Role == "Admin")
            {
                BindDataToGrid();
                btnAdd.Enabled = false;
            }
            else
            {
                BindUserDataToGrid();
                btnAdd.Enabled = true;
            }
        }

        private void btnExit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void cmbCountry_SelectedIndexChanged(object sender, EventArgs e)
        {
            cmbState.DisplayMember = "StateName";
            cmbState.ValueMember = "PKStateId";
            DataSet ds = new StateBO().GetActiveStates(Convert.ToInt32(cmbCountry.SelectedValue));
            int rowCount = ds.Tables[0].Rows.Count;
            if (rowCount != 0)
            {
                cmbState.DataSource = ds.Tables[0];
            }
            else
            {
                cmbState.DataSource = null;
            }
        }
        #endregion

        #region Private methods
        private void BindDataToGrid()
        {
            try
            {
                DataSet ds;
                AddressBookBO objAddressBO = new AddressBookBO();
                ds = objAddressBO.GetAddresses();
                dgvAddress.DataSource = ds.Tables[0];
            }
            catch(Exception)
            {
                MessageBox.Show("connection string is invalid");
            }
        }

        private void BindFilteredDataToGrid()
        {
            AddressBookBO objAddressBO = new AddressBookBO();
            string stateID = cmbState.SelectedValue == null ? "-99" : cmbState.SelectedValue.ToString();
            string status = "0";
            if (cmbStatus.Text == "Active")
                status = "1";
            DataSet ds = objAddressBO.GetFilteredAddress(cmbCountry.SelectedValue.ToString(), stateID, status);
            dgvAddress.DataSource = ds.Tables[0];
            dgvAddress.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
        }

        private void BindUserDataToGrid()
        {
            AddressBookBO objAddressBo = new AddressBookBO();
            DataSet ds = objAddressBo.GetUserAddress();
            dgvAddress.DataSource = ds.Tables[0];
            dgvAddress.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
        }
        #endregion

        #region constructor
        public AddressbookForm()
        {
            InitializeComponent();
        }
        #endregion
    }
}
