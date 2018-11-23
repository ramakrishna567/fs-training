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
    public partial class MDIParentForm : Form
    {
        #region Constructor
        public MDIParentForm()
        {
            InitializeComponent();
        }
        #endregion

        #region Form Events
        CountryForm objCountryForm;
        private void countryToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (objCountryForm == null)
            {
                objCountryForm = new CountryForm();
                objCountryForm.MdiParent = this;
                objCountryForm.Show();
                objCountryForm.FormClosing += objCountryForm_FormClosing;
            }
            else
            {
                objCountryForm.Activate();
            }
        }
        void objCountryForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            objCountryForm = null;
        }
        private void frmContactManger_Load(object sender, EventArgs e)
        {

        }
        StateForm objStateForm;
        private void mnuManageState_Click(object sender, EventArgs e)
        {
            if (objStateForm == null)
            {
                objStateForm = new StateForm();
                objStateForm.MdiParent = this;
                objStateForm.Show();
                objStateForm.FormClosing += objStateForm_FormClosing;
            }
            else
            {
                objStateForm.Activate();
            }
        }

        void objStateForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            objStateForm = null;
        }
        UserForm objUserForm;
        private void mnuManageUser_Click(object sender, EventArgs e)
        {
            if (objUserForm == null)
            {
                objUserForm = new UserForm();
                objUserForm.MdiParent = this;
                objUserForm.Show();
                objUserForm.FormClosing += objUserForm_FormClosing;
            }
            else
            {
                objUserForm.Activate();
            }
        }

        void objUserForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            objUserForm = null;
        }
        AddressbookForm objAddressForm;
        private void mnuAddressBook_Click(object sender, EventArgs e)
        {
            if (objAddressForm == null)
            {
                objAddressForm = new AddressbookForm();
                objAddressForm.MdiParent = this;
                objAddressForm.Show();
                objAddressForm.FormClosing += objAddressForm_FormClosing;
            }
            else
            {
                objAddressForm.Activate();
            }
        }

        void objAddressForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            objAddressForm = null;
        }

        private void mnuManageExit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void mnuManage_DropDownOpening(object sender, EventArgs e)
        {
            //if(this.ActiveMdiChild is CountryForm)
            // MenuItem.
        }

        private void titleHorxToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.LayoutMdi(MdiLayout.TileHorizontal);
        }

        private void titleVertexToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.LayoutMdi(MdiLayout.TileVertical);
        }

        private void cascadeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.LayoutMdi(MdiLayout.Cascade);
        }
        #endregion
    }
}
