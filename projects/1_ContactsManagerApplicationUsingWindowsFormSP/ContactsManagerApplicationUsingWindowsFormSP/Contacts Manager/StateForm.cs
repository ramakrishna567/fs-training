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
    public partial class StateForm : Form
    {
        #region Form Events
        private void frmManageState_Load(object sender, EventArgs e)
        {
            dgvState.AutoGenerateColumns = false;
            dgvState.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            CountryBO objCountry = new CountryBO();
            cmbCountry.DisplayMember = "CountryName";
            cmbCountry.ValueMember = "PKCountryId";
            DataSet ds = objCountry.GetActiveCountries();
            cmbCountry.DataSource = ds.Tables[0];
            BindGridView();
        }

        private void btnAdd_Click(object sender, EventArgs e)
        {
            StateDialog dlgState = new StateDialog();
            if (dlgState.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                try
                {
                    StateBO objStateBO = new StateBO();
                    State objState = new State();
                    objStateBo.IsStateExist(dlgState.CountryName, dlgState.StateName);
                    objStateBO.InsertState(Convert.ToInt32(dlgState.CountryId), dlgState.StateName, dlgState.IsActive);
                    BindGridView();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message);
                }
            }
        }
        private void btnEdit_Click(object sender, EventArgs e)
        {

            if (dgvState.RowCount != 0)
            {
                int stateId = (int)(dgvState.SelectedRows[0].Cells[0].Value);
                StateDialog dlgState = new StateDialog();
                StateBO objStateBO = new StateBO();
                //update the records
                State objState = objStateBO.GetState(stateId);
                dlgState.CountryId = objState.CountryId;
                dlgState.StateName = objState.StateName;
                dlgState.IsActive = objState.IsActive;
                if (dlgState.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        if (!(objState.StateName == dlgState.StateName))
                            objStateBo.IsStateExist(dlgState.CountryName, dlgState.StateName);
                        objStateBO.UpdateState(objState.StateId, objState.CountryId, dlgState.StateName, dlgState.IsActive);
                    }
                    catch (Exception EX)
                    {
                        MessageBox.Show(EX.Message);
                    }
                    BindGridView();
                }
            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (dgvState.RowCount != 0)
            {
                DialogResult dr;
                dr = MessageBox.Show("Are you sure?If you delete state corresponding addresses will get deleted", "Delete", MessageBoxButtons.YesNo);
                if (dr == System.Windows.Forms.DialogResult.No)
                {
                    return;
                }
                int StateId = (int)dgvState.SelectedRows[0].Cells[0].Value;
                StateBO objStateBO = new StateBO();
                objStateBO.DeleteState(StateId);
                BindGridView();
            }
        }

        private void btnSearch_Click(object sender, EventArgs e)
        {
            BindFilteredData();
        }

        private void btnReset_Click(object sender, EventArgs e)
        {
            BindGridView();
        }
        #endregion

        #region Private  Methods
        public void BindGridView()
        {
            try
            {
                DataSet ds;
                StateBO objStateBO = new StateBO();
                ds = objStateBO.GetStates(-1);
                dgvState.DataSource = ds.Tables[0];
            }
            catch (System.Data.SqlClient.SqlException)
            {
                MessageBox.Show("1.Check the Connection Connection string ", "Unable to connect database ");
            }
            catch (Exception)
            {
                MessageBox.Show("connection string is invalid");
            }

        }
        public void BindFilteredData()
        {
            DataSet ds = objStateBo.GetActiveStates(Convert.ToInt32(cmbCountry.SelectedValue.ToString()));
            dgvState.DataSource = ds.Tables[0];
        }
        #endregion

        #region Constructors
        public StateForm()
        {
            InitializeComponent();
        }
        #endregion

        #region Globally Creted Objects
        StateDialog objstateDialog = new StateDialog();
        State objState = new State();
        StateBO objStateBo = new StateBO();
        #endregion
    }
}
