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
    public partial class UserDialog : Form
    {
        #region Constructor
        public UserDialog()
        {
            InitializeComponent();
        }
        #endregion

        #region Properties
        private int _UserId = 0;
        public int UserId
        {
            get
            {
                return _UserId;
            }
            set
            {
                if (!string.IsNullOrEmpty(value.ToString()))
                {
                    _UserId = value;
                }
                else
                {
                    _UserId = 0;
                }
            }
        }
        public string UserName
        {
            get
            {
                return txtUserName.Text;
            }
            set
            {
                txtUserName.Text = value;
            }
        }
        public string Password
        {
            get
            {
                return txtPassword.Text;
            }
            set
            {
                txtPassword.Text = value;
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
        public string Lastname
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
        public string PhoneNo
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
        private void UserDialogForm_Load(object sender, EventArgs e)
        {
        }
        private void btnOk_Click(object sender, EventArgs e)
        {

            if (txtUserName.Text.Trim() == "")
            {
                epUserDialog.SetError(txtUserName, "Please Provide The UserName");
            }
            else if (txtPassword.Text.Trim() == "")
            {
                epUserDialog.SetError(txtPassword, "Please Provide The Password ");
            }
            else if (txtFirstName.Text.Trim() == "")
            {
                epUserDialog.SetError(txtFirstName, "Please Provide The FirstName");
            }
            else if (txtEmailId.Text.Trim() == "")
            {
                epUserDialog.SetError(txtEmailId, "Please Provide The EmailId");
            }
            else if (!Regex.IsMatch(txtEmailId.Text.Trim(), "\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*"))
            {
                epUserDialog.SetError(txtEmailId, "Enter correct Email Id ex:abc@gmail.com");
            }

            else if (txtPhoneNo.Text.Trim() == "")
            {
                epUserDialog.SetError(txtPhoneNo, "Please Provide The PhoneNumber");
            }
            else
            {
                this.DialogResult = System.Windows.Forms.DialogResult.OK;
            }
        }
        private void btnCancel_Click(object sender, EventArgs e)
        {
            this.DialogResult = System.Windows.Forms.DialogResult.Cancel;
        }
        #endregion
        
    }
}
