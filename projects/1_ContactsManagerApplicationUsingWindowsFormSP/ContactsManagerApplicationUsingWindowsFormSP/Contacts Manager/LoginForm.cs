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
    public partial class LoginForm : Form
    {
        #region Form Events
        MDIParentForm parent = new MDIParentForm();
        private void LoginForm_Load(object sender, EventArgs e)
        {
        }

        private void btnCancel_Click(object sender, EventArgs e)
        {
            txtUserName.Text = "";
            txtPassword.Text = "";
            this.DialogResult = DialogResult.Cancel;
        }

        private void linkLabel1_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            User objUser = new User();
            UserBO objUserBo = new UserBO();
            UserDialog objUserDialog = new UserDialog();
            if (objUserDialog.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                UserBO objUserBO = new UserBO();
                //if (objUserBO.IsUserExist(objUserDialog.UserName))
                //MessageBox.Show("UserName is Already Exist");
                objUserBo.InsertUser(objUserDialog.UserName, objUserDialog.Password, objUserDialog.FirstName, objUserDialog.Lastname, objUserDialog.EmailId, objUserDialog.PhoneNo, objUserDialog.IsActive);
                MessageBox.Show("Registred Sucessfully");
                Helper.Role = "Visitor";
            }
        }

        private void btnSubmit_Click(object sender, EventArgs e)
        {
            UserBO objUserBO = new UserBO();
            if (txtUserName.Text.Trim() != "" && txtPassword.Text.Trim() != "")
            {
                //Checking the Admin and username
                string adminUserName = System.Configuration.ConfigurationManager.AppSettings["AdminUserName"];
                string adminPassword = System.Configuration.ConfigurationManager.AppSettings["AdminPassword"];

                if (txtUserName.Text.ToLower() == adminUserName.ToLower() && txtPassword.Text.Trim() == adminPassword)
                {
                    Helper.Role = "Admin";
                    Helper.UserId = -1;
                    this.DialogResult = DialogResult.OK;
                }
                else
                {
                    int pkuserid = objUserBO.AuthenticateUser(txtUserName.Text.Trim(), txtPassword.Text.Trim());
                    if (pkuserid != 0)
                    {
                        Helper.Role = "user";
                        Helper.UserId = pkuserid;
                        this.DialogResult = DialogResult.OK;
                    }
                    else
                    {
                        MessageBox.Show("Please provide the valid credentials");
                    }
                }
            }
            else
            {
                MessageBox.Show("Please provide username and password");
            }
        }
        #endregion

        #region Constructor
        public LoginForm()
        {
            InitializeComponent();
        }
        #endregion

        #region properties

        private string _role;
        public string Role
        {
            get
            {
                return _role;
            }
            set
            {
                _role = value;
            }
        }
        #endregion
    }
}


