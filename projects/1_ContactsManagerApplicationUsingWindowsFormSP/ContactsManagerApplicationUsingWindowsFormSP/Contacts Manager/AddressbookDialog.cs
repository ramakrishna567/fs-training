using ContactsManager.BO;
using ContactsManager.DataClass;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ContactsManager
{
    public partial class AddressbookDialog : Form
    {
        
        #region Properties
        public string CountryName
        {
            get
            {
                return cmbCountryName.SelectedValue.ToString();
            }
            set
            {
                cmbCountryName.SelectedValue = value;
            }
        }
        public string StateName
        {
            get
            {
                return cmbStateName.SelectedValue.ToString();
            }
            set
            {
                cmbStateName.SelectedValue = value;
            }
        }
        public string EmailId
        {
            get
            {
                return txtEmailId.Text;
            }
            set
            {
                txtEmailId.Text = value;
            }
        }
        public string phoneNo
        {
            get
            {
                return txtPhoneNo.Text;
            }
            set
            {
                txtPhoneNo.Text = value;
            }
        }
        public string Address1
        {
            get
            {
                return txtAddress1.Text;
            }
            set
            {
                txtAddress1.Text = value;
            }
        }
        public string Address2
        {
            get
            {
                return txtAddress2.Text;
            }
            set
            {
                txtAddress2.Text = value;
            }
        }
        public string City
        {
            get
            {
                return txtCity.Text;
            }
            set
            {
                txtCity.Text = value;
            }
        }
        public long ZipCode
        {
            get
            {
                return Convert.ToInt64(txtZipCode.Text);
            }
            set
            {
                txtZipCode.Text = value.ToString();
            }
        }
        public string FirstName
        {
            get
            {
                return txtFirstName.Text;
            }
            set
            {
                txtFirstName.Text = value;
            }
        }
        public string LastName
        {
            get
            {
                return txtLastName.Text;
            }
            set
            {
                txtLastName.Text = value;
            }
        }
        public string Street
        {
            get
            {
                return txtStreet.Text;
            }
            set
            {
                txtStreet.Text = value;
            }
        }
        public bool IsActive
        {
            get
            {
                return chkIsActive.Checked;
            }
            set
            {
                chkIsActive.Checked = value;
            }
        }
        #endregion

        #region Form Events
        private void btnOk_Click(object sender, EventArgs e)
        {
            CountryBO objCountryBO = new CountryBO();
            Country objCountry = objCountryBO.GetCountry(Convert.ToInt32(CountryName));
            if (txtFirstName.Text.Trim() == "")
            {
                epAddressDailog.SetError(txtFirstName, "plz provide FirstName");
            }
            else if (txtEmailId.Text.Trim() == "")
            {
                epAddressDailog.SetError(txtEmailId, "plz provide EmailId");
            }
            else if (!Regex.IsMatch(txtEmailId.Text.Trim(), "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"))
            {
                epAddressDailog.SetError(txtEmailId, "Enter correct Email Id ex:abc@gmail.com");
            }
            else if (txtPhoneNo.Text.Trim() == "")
            {
                epAddressDailog.SetError(txtPhoneNo, "plz provide the Phone Number");
            }
            else if (txtAddress1.Text.Trim() == "")
            {
                epAddressDailog.SetError(txtAddress1, "plz Provide Address");
            }
            else if (txtCity.Text.Trim() == "")
            {
                epAddressDailog.SetError(txtCity, "Plz provide City Name");
            }
            else if (txtStreet.Text.Trim() == "")
            {
                epAddressDailog.SetError(txtStreet, "plz Provide Street Name");
            }
            else if (objCountry.ZipCodeStart > ZipCode || objCountry.ZipCodeEnd < ZipCode)
            {
                epAddressDailog.SetError(txtZipCode, "plz provide a Vaild ZipCode");
            }
            else
            {
                this.DialogResult = System.Windows.Forms.DialogResult.OK;
            }
        }
        private void txtZipCode_KeyPress(object sender, KeyPressEventArgs e)
        {
            if ((int)e.KeyChar == 8)
                return;
            if (e.KeyChar < '0' || e.KeyChar > '9')
                e.Handled = true;
        }
        private void cmbCountryName_SelectedIndexChanged(object sender, EventArgs e)
        {
            int countryID = Convert.ToInt32(cmbCountryName.SelectedValue);
            BindStates();
        }
        private void AddressBookDialogForm_Load(object sender, EventArgs e)
        {
            BindCoutries();
        }
        public AddressbookDialog(string countryName=null)
        {
            InitializeComponent();
            CountryName = countryName;
        }
        #endregion

        # region  Private Methods
        private void BindCoutries()
        {
            CountryBO objCountryBO = new CountryBO();
            cmbCountryName.DisplayMember = "CountryName";
            cmbCountryName.ValueMember = "PKCountryId";
            DataSet ds = objCountryBO.GetActiveCountries();
            cmbCountryName.DataSource = ds.Tables[0];
            if (CountryName != null || Convert.ToInt32(CountryName) != 0)
                cmbCountryName.SelectedValue = Convert.ToInt32(CountryName);
        }
        private void BindStates()
        {
            StateBO objStateBO = new StateBO();
            cmbStateName.DisplayMember = "StateName";
            cmbStateName.ValueMember = "PKStateId";
            DataSet ds = objStateBO.GetActiveStates(Convert.ToInt32(cmbCountryName.SelectedValue));
            cmbStateName.DataSource = ds.Tables[0];
        }
        #endregion
    }
}
