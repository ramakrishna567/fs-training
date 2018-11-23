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
    public partial class UserForm : Form
    {
        #region Form Events
        private void ManageUserForm_Load(object sender, EventArgs e)
        {
            dgvUser.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            BindDataToGrid();
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            UserDialog dlgUser = new UserDialog();
            if (dlgUser.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                try
                {
                    User objUser = new User();
                    UserBO objUserBO = new UserBO();
                    objUserBO.InsertUser(dlgUser.UserName, dlgUser.Password, dlgUser.FirstName, dlgUser.Lastname, dlgUser.EmailId, dlgUser.PhoneNo, dlgUser.IsActive);
                    BindDataToGrid();
                }
                catch (System.Data.SqlClient.SqlException)
                {
                    MessageBox.Show("UserName AlredyExist");
                }
            }
        }

        private void btnEdit_Click(object sender, EventArgs e)
        {
            UserDialog objUserDialog = new UserDialog();
            string user = "";
            if (dgvUser.RowCount != 0)
            {
                try
                {
                    int userId;
                    userId = Convert.ToInt32(dgvUser.SelectedRows[0].Cells[0].Value);
                    UserDialog dlgUser = new UserDialog();
                    UserBO objUserBO = new UserBO();
                    User objUser = objUserBO.GetUser(userId);
                    dlgUser.UserName = objUser.UserName;
                    dlgUser.Password = objUser.Password;
                    dlgUser.FirstName = objUser.FirstName;
                    dlgUser.Lastname = objUser.LastName;
                    dlgUser.EmailId = objUser.EmailId;
                    dlgUser.PhoneNo = objUser.Password;
                    dlgUser.IsActive = objUser.IsActive;
                    user = objUser.UserName;
                    if (dlgUser.ShowDialog() == System.Windows.Forms.DialogResult.OK)
                    {
                        objUser.UserName = dlgUser.UserName;
                        objUser.Password = dlgUser.Password;
                        objUser.FirstName = dlgUser.FirstName;
                        objUser.LastName = dlgUser.Lastname;
                        objUser.EmailId = dlgUser.EmailId;
                        objUser.PhoneNo = dlgUser.PhoneNo;
                        objUser.IsActive = dlgUser.IsActive;
                        if (user == dlgUser.UserName)
                        {
                            objUserBO.UpdateUser(objUser);
                        }
                        objUserBO.UpdateUser(objUser);
                        BindDataToGrid();
                    }
                }
                catch (System.Data.SqlClient.SqlException)
                {
                    MessageBox.Show("UserName AlreadyExist");
                }
            }
        }
        private void btnDelete_Click(object sender, EventArgs e)
        {
            AddressBookBO objAddressBO = new AddressBookBO();
            if (dgvUser.RowCount != 0)
            {
                DialogResult dr;
                dr = MessageBox.Show("Are you sure?", "Delete", MessageBoxButtons.YesNo);
                if (dr == System.Windows.Forms.DialogResult.No)
                {
                    return;
                }
                int userId = (int)dgvUser.SelectedRows[0].Cells[0].Value;
                UserBO objUserBO = new UserBO();
                objUserBO.DeleteUser(userId);
                BindDataToGrid();
            }
        }

        private void gdvManageUser_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
        #endregion

        #region Constructor
        public UserForm()
        {
            InitializeComponent();
        }
        #endregion

        #region Globally Created Objects
        UserDialog objUserDialog = new UserDialog();
        User objUser = new User();
        UserBO objUserBo = new UserBO();
        #endregion

        #region Private methods
        private void BindDataToGrid()
        {
            //Bind all records into gridview
            try
            {
                DataSet ds;
                UserBO objUserBO = new UserBO();
                ds = objUserBO.GetUsers();
                if (ds != null)
                {
                    dgvUser.DataSource = ds.Tables[0];
                }
            }
            catch(Exception )
            {
                MessageBox.Show("Data base connection is invalid");
            }
           
        }
        #endregion
    }
}
