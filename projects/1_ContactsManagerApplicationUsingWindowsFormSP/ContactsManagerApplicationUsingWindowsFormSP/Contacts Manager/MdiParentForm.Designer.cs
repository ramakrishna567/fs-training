namespace ContactsManager
{
    partial class MDIParentForm
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
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.mnuManage = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuManageCountry = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuManageUser = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuManageState = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripSeparator1 = new System.Windows.Forms.ToolStripSeparator();
            this.mnuManageExit = new System.Windows.Forms.ToolStripMenuItem();
            this.mnuAddressBook = new System.Windows.Forms.ToolStripMenuItem();
            this.menuToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.titleHorxToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.titleVertexToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.cascadeToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.iconsToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.mnuManage,
            this.mnuAddressBook,
            this.menuToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Padding = new System.Windows.Forms.Padding(4, 2, 0, 2);
            this.menuStrip1.Size = new System.Drawing.Size(264, 24);
            this.menuStrip1.TabIndex = 1;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // mnuManage
            // 
            this.mnuManage.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.mnuManageCountry,
            this.mnuManageUser,
            this.mnuManageState,
            this.toolStripSeparator1,
            this.mnuManageExit});
            this.mnuManage.Name = "mnuManage";
            this.mnuManage.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.M)));
            this.mnuManage.Size = new System.Drawing.Size(62, 20);
            this.mnuManage.Text = "&Manage";
            this.mnuManage.DropDownOpening += new System.EventHandler(this.mnuManage_DropDownOpening);
            // 
            // mnuManageCountry
            // 
            this.mnuManageCountry.Name = "mnuManageCountry";
            this.mnuManageCountry.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.C)));
            this.mnuManageCountry.Size = new System.Drawing.Size(159, 22);
            this.mnuManageCountry.Text = "&Country";
            this.mnuManageCountry.Click += new System.EventHandler(this.countryToolStripMenuItem_Click);
            // 
            // mnuManageUser
            // 
            this.mnuManageUser.Name = "mnuManageUser";
            this.mnuManageUser.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.U)));
            this.mnuManageUser.Size = new System.Drawing.Size(159, 22);
            this.mnuManageUser.Text = "&User";
            this.mnuManageUser.Click += new System.EventHandler(this.mnuManageUser_Click);
            // 
            // mnuManageState
            // 
            this.mnuManageState.Name = "mnuManageState";
            this.mnuManageState.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.S)));
            this.mnuManageState.Size = new System.Drawing.Size(159, 22);
            this.mnuManageState.Text = "&State";
            this.mnuManageState.Click += new System.EventHandler(this.mnuManageState_Click);
            // 
            // toolStripSeparator1
            // 
            this.toolStripSeparator1.Name = "toolStripSeparator1";
            this.toolStripSeparator1.Size = new System.Drawing.Size(156, 6);
            // 
            // mnuManageExit
            // 
            this.mnuManageExit.Name = "mnuManageExit";
            this.mnuManageExit.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.X)));
            this.mnuManageExit.Size = new System.Drawing.Size(159, 22);
            this.mnuManageExit.Text = "E&xit";
            this.mnuManageExit.Click += new System.EventHandler(this.mnuManageExit_Click);
            // 
            // mnuAddressBook
            // 
            this.mnuAddressBook.Name = "mnuAddressBook";
            this.mnuAddressBook.Size = new System.Drawing.Size(88, 20);
            this.mnuAddressBook.Text = "&AddressBook";
            this.mnuAddressBook.Click += new System.EventHandler(this.mnuAddressBook_Click);
            // 
            // menuToolStripMenuItem
            // 
            this.menuToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.titleHorxToolStripMenuItem,
            this.titleVertexToolStripMenuItem,
            this.cascadeToolStripMenuItem,
            this.iconsToolStripMenuItem});
            this.menuToolStripMenuItem.Name = "menuToolStripMenuItem";
            this.menuToolStripMenuItem.Size = new System.Drawing.Size(50, 20);
            this.menuToolStripMenuItem.Text = "&Menu";
            // 
            // titleHorxToolStripMenuItem
            // 
            this.titleHorxToolStripMenuItem.Name = "titleHorxToolStripMenuItem";
            this.titleHorxToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.titleHorxToolStripMenuItem.Text = "Ti&tle Horx";
            this.titleHorxToolStripMenuItem.Click += new System.EventHandler(this.titleHorxToolStripMenuItem_Click);
            // 
            // titleVertexToolStripMenuItem
            // 
            this.titleVertexToolStripMenuItem.Name = "titleVertexToolStripMenuItem";
            this.titleVertexToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.titleVertexToolStripMenuItem.Text = "Title &Vertex";
            this.titleVertexToolStripMenuItem.Click += new System.EventHandler(this.titleVertexToolStripMenuItem_Click);
            // 
            // cascadeToolStripMenuItem
            // 
            this.cascadeToolStripMenuItem.Name = "cascadeToolStripMenuItem";
            this.cascadeToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.cascadeToolStripMenuItem.Text = "&Cascade";
            this.cascadeToolStripMenuItem.Click += new System.EventHandler(this.cascadeToolStripMenuItem_Click);
            // 
            // iconsToolStripMenuItem
            // 
            this.iconsToolStripMenuItem.Name = "iconsToolStripMenuItem";
            this.iconsToolStripMenuItem.Size = new System.Drawing.Size(152, 22);
            this.iconsToolStripMenuItem.Text = "Icons";
            // 
            // MDIParentForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(264, 225);
            this.Controls.Add(this.menuStrip1);
            this.IsMdiContainer = true;
            this.MainMenuStrip = this.menuStrip1;
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "MDIParentForm";
            this.Text = "ContactManager";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.frmContactManger_Load);
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem mnuManage;
        private System.Windows.Forms.ToolStripMenuItem mnuManageCountry;
        private System.Windows.Forms.ToolStripMenuItem mnuManageUser;
        private System.Windows.Forms.ToolStripMenuItem mnuManageState;
        private System.Windows.Forms.ToolStripMenuItem mnuAddressBook;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator1;
        private System.Windows.Forms.ToolStripMenuItem mnuManageExit;
        private System.Windows.Forms.ToolStripMenuItem menuToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem titleHorxToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem titleVertexToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem cascadeToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem iconsToolStripMenuItem;
    }
}

