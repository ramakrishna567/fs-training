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
    public partial class CountryDialog : Form
    {
        #region Properties
        public string CountryName
        {
            get
            { return txtCountryName.Text; }
            set
            { txtCountryName.Text = value; }
        }

        public int ZipCodeStart
        {
            get
            { return int.Parse(txtZipCodeStart.Text); }
            set
            { txtZipCodeStart.Text = value.ToString(); }
        }

        public int ZipCodeEnd
        {
            get
            { return int.Parse(txtZipCodeEnd.Text); }
            set
            { txtZipCodeEnd.Text = value.ToString(); }
        }

        public bool IsActive
        {
            get
            { return chkIsActive.Checked; }
            set
            { chkIsActive.Checked = value; }
        }
        #endregion

        #region form Events
        private void ManageCountryDialog_Load(object sender, EventArgs e)
        {

        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            bool errorflag = false;
            epCountry.Clear();
            if (txtCountryName.Text.Trim() == "")
            {
                errorflag = true;
                epCountry.SetError(txtCountryName, "Please provide Country Name");
            }
            else if (txtZipCodeStart.Text.Trim() == "")
            {
                errorflag = true;
                epCountry.SetError(txtZipCodeStart, "Please provide Zipcode Start Value");
            }
            else if (txtZipCodeEnd.Text.Trim() == "")
            {
                errorflag = true;
                epCountry.SetError(txtZipCodeEnd, "Please provide Zipcode End Value");
            }
            else if (txtZipCodeEnd.Text.Trim() != "" && txtZipCodeStart.Text.Trim() != "")
            {
                if (Convert.ToInt64(txtZipCodeEnd.Text.Trim()) <= Convert.ToInt64(txtZipCodeStart.Text.Trim()))
                {
                    errorflag = true;
                    MessageBox.Show("Please enter a valid Zipcode range");
                }
            }
            if (errorflag == false)
            {
                this.DialogResult = System.Windows.Forms.DialogResult.OK;
            }
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.DialogResult = System.Windows.Forms.DialogResult.Cancel;
        }

        private void txtZipCodeStart_KeyPress(object sender, KeyPressEventArgs e)
        {
            if ((int)e.KeyChar == 8)
                return;
            if (e.KeyChar < '0' || e.KeyChar > '9')
                e.Handled = true;
        }

        private void txtZipCodeEnd_KeyPress(object sender, KeyPressEventArgs e)
        {
            if ((int)e.KeyChar == 8)
                return;
            if (e.KeyChar < '0' || e.KeyChar > '9')
                e.Handled = true;
        }
        #endregion

        #region Constructor
        public CountryDialog()
        {
            InitializeComponent();
        }
        #endregion
    }
}
