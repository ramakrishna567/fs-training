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

namespace ContactsManager
{
    public partial class StateDialog : Form
    {
        #region properties
        public int CountryId
        {
            get
            {
                return (int)cmbCountryName.SelectedValue;
            }
            set
            {
                cmbCountryName.SelectedValue = value;
            }
        }
        public string CountryName
        {
            get
            {
                return cmbCountryName.Text;
            }
            set
            {
                cmbCountryName.Text = value;
            }
        }
        public string StateName
        {
            get
            {
                return txtStateName.Text;
            }
            set
            {
                txtStateName.Text = value;
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

        #region Constructor
        public StateDialog()
        {
            InitializeComponent();
            BindCountries();
        }
        #endregion

        #region Form Events
        private void StateDialogForm_Load(object sender, EventArgs e)
        {
            cmbCountryName.SelectedValue = CountryId;
            txtStateName.Text = StateName;
            chkIsActive.Checked = IsActive;

        }

        private void btnOk_Click(object sender, EventArgs e)
        {
            bool errorflag = false;
             epStateDialog.Clear();
            if (txtStateName.Text.Trim() == "")
            {
                errorflag = true;
                epStateDialog.SetError(txtStateName, "Please provide StateName");
        
            }
            if (errorflag == false)
            {
                this.DialogResult = System.Windows.Forms.DialogResult.OK;
            }
            CountryId = (int)cmbCountryName.SelectedValue;
            StateName = txtStateName.Text;
            CountryName = cmbCountryName.Text;
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.DialogResult = System.Windows.Forms.DialogResult.Cancel;
        }
       
        #endregion

        #region Private Method
        private void BindCountries()
        {
            //Bind Country names using object
            CountryBO objCountryBO = new CountryBO();
            cmbCountryName.DisplayMember = "CountryName";
            cmbCountryName.ValueMember = "PKCountryId";
            DataSet ds = objCountryBO.GetCountries();
            cmbCountryName.DataSource = ds.Tables[0];
        }
        #endregion
        
    }
}
