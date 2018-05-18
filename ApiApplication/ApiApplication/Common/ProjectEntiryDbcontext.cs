using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using ProjectManagementWeb.Models;
using ApiApplication.Models;

namespace ProjectManagementWeb.Common
{
    public class ProjectEntiryDbcontext : DbContext
    {
        public ProjectEntiryDbcontext():base("Data Source=DESKTOP-RS0IT2B\\SQLEXPRESS;Initial Catalog=ProjectUsingEntity;Integrated Security=True")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }
        public DbSet<Employees> Employees { get; set; }
        public DbSet<Projects> Projects { get; set; }
        public DbSet<Userstories> Userstories { get; set; }
        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<ManagerComment> ManagerComments { get; set; }

    }
}