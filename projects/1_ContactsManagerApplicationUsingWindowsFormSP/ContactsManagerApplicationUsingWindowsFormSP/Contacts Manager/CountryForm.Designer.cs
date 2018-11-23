namespace ContactsManager
{
    partial class CountryForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.dgvCountry = new System.Windows.Forms.DataGridView();
            this.countryBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.btnAdd = new System.Windows.Forms.Button();
            this.btnEdit = new System.Windows.Forms.Button();
            this.btnDelete = new System.Windows.Forms.Button();
            this.PKCountryId = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.CountryName = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ZipCodeStart = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.ZipCodeEnd = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.IsActive = new System.Windows.Forms.DataGridViewCheckBoxColumn();
            ((System.ComponentModel.ISupportInitialize)(this.dgvCountry)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.countryBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // dgvCountry
            // 
            this.dgvCountry.AllowUserToAddRows = false;
            this.dgvCountry.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.dgvCountry.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgvCountry.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.PKCountryId,
            this.CountryName,
            this.ZipCodeStart,
            this.ZipCodeEnd,
            this.IsActive});
            this.dgvCountry.Location = new System.Drawing.Point(0, 0);
            this.dgvCountry.Margin = new System.Windows.Forms.Padding(2);
            this.dgvCountry.MultiSelect = false;
            this.dgvCountry.Name = "dgvCountry";
            this.dgvCountry.ReadOnly = true;
            this.dgvCountry.RowTemplate.Height = 24;
            this.dgvCountry.Size = new System.Drawing.Size(554, 213);
            this.dgvCountry.TabIndex = 0;
            // 
            // countryBindingSource
            // 
            this.countryBindingSource.DataMember = "Country";
            // 
            // btnAdd
            // 
            this.btnAdd.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.btnAdd.Location = new System.Drawing.Point(344, 220);
            this.btnAdd.Margin = new System.Windows.Forms.Padding(2);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(66, 25);
            this.btnAdd.TabIndex = 1;
            this.btnAdd.Text = "&Add";
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // btnEdit
            // 
            this.btnEdit.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.btnEdit.Location = new System.Drawing.Point(414, 220);
            this.btnEdit.Margin = new System.Windows.Forms.Padding(2);
            this.btnEdit.Name = "btnEdit";
            this.btnEdit.Size = new System.Drawing.Size(66, 25);
            this.btnEdit.TabIndex = 2;
            this.btnEdit.Text = "&Edit";
            this.btnEdit.UseVisualStyleBackColor = true;
            this.btnEdit.Click += new System.EventHandler(this.btnEdit_Click);
            // 
            // btnDelete
            // 
            this.btnDelete.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.btnDelete.Location = new System.Drawing.Point(484, 220);
            this.btnDelete.Margin = new System.Windows.Forms.Padding(2);
            this.btnDelete.Name = "btnDelete";
            this.btnDelete.Size = new System.Drawing.Size(66, 25);
            this.btnDelete.TabIndex = 3;
            this.btnDelete.Text = "&Delete";
            this.btnDelete.UseVisualStyleBackColor = true;
            this.btnDelete.Click += new System.EventHandler(this.btnDelete_Click);
            // 
            // PKCountryId
            // 
            this.PKCountryId.DataPropertyName = "PKCountryId";
            this.PKCountryId.HeaderText = "CountryId";
            this.PKCountryId.Name = "PKCountryId";
            this.PKCountryId.ReadOnly = true;
            this.PKCountryId.Visible = false;
            // 
            // CountryName
            // 
            this.CountryName.DataPropertyName = "CountryName";
            this.CountryName.HeaderText = "Country Name";
            this.CountryName.Name = "CountryName";
            this.CountryName.ReadOnly = true;
            this.CountryName.Width = 140;
            // 
            // ZipCodeStart
            // 
            this.ZipCodeStart.DataPropertyName = "ZipCodeStart";
            this.ZipCodeStart.FillWeight = 130F;
            this.ZipCodeStart.HeaderText = "Zipcode Start";
            this.ZipCodeStart.Name = "ZipCodeStart";
            this.ZipCodeStart.ReadOnly = true;
            this.ZipCodeStart.Width = 135;
            // 
            // ZipCodeEnd
            // 
            this.ZipCodeEnd.DataPropertyName = "ZipCodeEnd";
            this.ZipCodeEnd.HeaderText = "Zipcode End";
            this.ZipCodeEnd.Name = "ZipCodeEnd";
            this.ZipCodeEnd.ReadOnly = true;
            this.ZipCodeEnd.Width = 130;
            // 
            // IsActive
            // 
            this.IsActive.DataPropertyName = "IsActive";
            this.IsActive.HeaderText = "Active";
            this.IsActive.Name = "IsActive";
            this.IsActive.ReadOnly = true;
            this.IsActive.Resizable = System.Windows.Forms.DataGridViewTriState.True;
            this.IsActive.SortMode = System.Windows.Forms.DataGridViewColumnSortMode.Automatic;
            this.IsActive.Width = 50;
            // 
            // CountryForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(554, 249);
            this.Controls.Add(this.btnDelete);
            this.Controls.Add(this.btnEdit);
            this.Controls.Add(this.btnAdd);
            this.Controls.Add(this.dgvCountry);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "CountryForm";
            this.Text = "Manage Country";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.ManageCountry_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgvCountry)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.countryBindingSource)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.DataGridView dgvCountry;
        private System.Windows.Forms.Button btnAdd;
        private System.Windows.Forms.Button btnEdit;
        private System.Windows.Forms.Button btnDelete;
      //  private AddressBookDataSet addressBookDataSet;
        private System.Windows.Forms.BindingSource countryBindingSource;
       // private AddressBookDataSetTableAdapters.CountryTableAdapter countryTableAdapter;
       // private System.Windows.Forms.DataGridViewTextBoxColumn pKCountryIdDataGridViewTextBoxColumn;
      //  private System.Windows.Forms.DataGridViewTextBoxColumn countryNameDataGridViewTextBoxColumn;
      //  private System.Windows.Forms.DataGridViewTextBoxColumn zipCodeStartDataGridViewTextBoxColumn;
      //  private System.Windows.Forms.DataGridViewTextBoxColumn zipCodeEndDataGridViewTextBoxColumn;
      //  private System.Windows.Forms.DataGridViewCheckBoxColumn isActiveDataGridViewCheckBoxColumn;
        private System.Windows.Forms.DataGridViewTextBoxColumn PKCountryId;
        private System.Windows.Forms.DataGridViewTextBoxColumn CountryName;
        private System.Windows.Forms.DataGridViewTextBoxColumn ZipCodeStart;
        private System.Windows.Forms.DataGridViewTextBoxColumn ZipCodeEnd;
        private System.Windows.Forms.DataGridViewCheckBoxColumn IsActive;
    }
}