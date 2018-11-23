using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ContactsManager
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            LoginForm obj = new LoginForm();
            Form frm;
            if (obj.ShowDialog() == DialogResult.OK)
            {
                if (Helper.Role == "Admin")
                {
                    frm = new MDIParentForm();
                }
                else
                {
                    frm = new AddressbookForm();
                }
                Application.Run( frm);
            }
        }
    }
}
