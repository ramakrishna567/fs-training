namespace ContactsManager
{
    partial class CountryDialog
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
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.txtCountryName = new System.Windows.Forms.TextBox();
            this.txtZipCodeStart = new System.Windows.Forms.TextBox();
            this.txtZipCodeEnd = new System.Windows.Forms.TextBox();
            this.chkIsActive = new System.Windows.Forms.CheckBox();
            this.btnOk = new System.Windows.Forms.Button();
            this.btnCancel = new System.Windows.Forms.Button();
            this.epCountry = new System.Windows.Forms.ErrorProvider(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.epCountry)).BeginInit();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(9, 16);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(74, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "&Country Name";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(9, 43);
            this.label2.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(71, 13);
            this.label2.TabIndex = 2;
            this.label2.Text = "Zipcode &Start";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(9, 70);
            this.label3.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(68, 13);
            this.label3.TabIndex = 4;
            this.label3.Text = "Zipcode &End";
            // 
            // txtCountryName
            // 
            this.txtCountryName.Location = new System.Drawing.Point(84, 14);
            this.txtCountryName.Margin = new System.Windows.Forms.Padding(2);
            this.txtCountryName.Name = "txtCountryName";
            this.txtCountryName.Size = new System.Drawing.Size(76, 20);
            this.txtCountryName.TabIndex = 1;
            // 
            // txtZipCodeStart
            // 
            this.txtZipCodeStart.Location = new System.Drawing.Point(84, 39);
            this.txtZipCodeStart.Margin = new System.Windows.Forms.Padding(2);
            this.txtZipCodeStart.Name = "txtZipCodeStart";
            this.txtZipCodeStart.Size = new System.Drawing.Size(76, 20);
            this.txtZipCodeStart.TabIndex = 3;
            this.txtZipCodeStart.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.txtZipCodeStart_KeyPress);
            // 
            // txtZipCodeEnd
            // 
            this.txtZipCodeEnd.Location = new System.Drawing.Point(84, 64);
            this.txtZipCodeEnd.Margin = new System.Windows.Forms.Padding(2);
            this.txtZipCodeEnd.Name = "txtZipCodeEnd";
            this.txtZipCodeEnd.Size = new System.Drawing.Size(76, 20);
            this.txtZipCodeEnd.TabIndex = 5;
            this.txtZipCodeEnd.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.txtZipCodeEnd_KeyPress);
            // 
            // chkIsActive
            // 
            this.chkIsActive.AutoSize = true;
            this.chkIsActive.Location = new System.Drawing.Point(84, 89);
            this.chkIsActive.Margin = new System.Windows.Forms.Padding(2);
            this.chkIsActive.Name = "chkIsActive";
            this.chkIsActive.Size = new System.Drawing.Size(56, 17);
            this.chkIsActive.TabIndex = 6;
            this.chkIsActive.Text = "&Active";
            this.chkIsActive.UseVisualStyleBackColor = true;
            // 
            // btnOk
            // 
            this.btnOk.Location = new System.Drawing.Point(26, 110);
            this.btnOk.Margin = new System.Windows.Forms.Padding(2);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(66, 25);
            this.btnOk.TabIndex = 7;
            this.btnOk.Text = "&OK";
            this.btnOk.UseVisualStyleBackColor = true;
            this.btnOk.Click += new System.EventHandler(this.btnOk_Click);
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(94, 110);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(2);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(66, 25);
            this.btnCancel.TabIndex = 8;
            this.btnCancel.Text = "Ca&ncel";
            this.btnCancel.UseVisualStyleBackColor = true;
            this.btnCancel.Click += new System.EventHandler(this.btnCancel_Click);
            // 
            // epCountry
            // 
            this.epCountry.ContainerControl = this;
            // 
            // CountryDialog
            // 
            this.AcceptButton = this.btnOk;
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(179, 140);
            this.Controls.Add(this.btnCancel);
            this.Controls.Add(this.btnOk);
            this.Controls.Add(this.chkIsActive);
            this.Controls.Add(this.txtZipCodeEnd);
            this.Controls.Add(this.txtZipCodeStart);
            this.Controls.Add(this.txtCountryName);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Margin = new System.Windows.Forms.Padding(2);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "CountryDialog";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "Add/Edit Country";
            this.Load += new System.EventHandler(this.ManageCountryDialog_Load);
            ((System.ComponentModel.ISupportInitialize)(this.epCountry)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox txtCountryName;
        private System.Windows.Forms.TextBox txtZipCodeStart;
        private System.Windows.Forms.TextBox txtZipCodeEnd;
        private System.Windows.Forms.CheckBox chkIsActive;
        private System.Windows.Forms.Button btnOk;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.ErrorProvider epCountry;
    }
}