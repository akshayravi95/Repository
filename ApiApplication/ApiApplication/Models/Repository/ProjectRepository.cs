using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManagementWeb.Models;
using ProjectManagementWeb.Common;

namespace ProjectManagementWeb.Models.Repository
{
    class ProjectRepository
    {
        public static void CreateProject(Projects pro)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            db.Projects.Add(pro);
            db.SaveChanges();
        }
        public static void Edit(Projects pro)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Projects p = SearchProjects(pro, db);
            p.projectname = pro.projectname;
            p.startdate = pro.startdate;
            p.enddate = pro.enddate;
            p.clientname = pro.clientname;
            db.SaveChanges();

        }
        public static void DeleteProject(Projects pro)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Projects p = SearchProjects(pro, db);
            db.Projects.Remove(p);
            db.SaveChanges();
        }
        public static List<Projects> ShowAllProjects()
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Projects.Select(pro => pro).ToList());
        }
        public static Projects SearchProjects(Projects pro,ProjectEntiryDbcontext db)
        {
            return (db.Projects.Select(p => p).Where(p=>p.projectid==pro.projectid)).First();
        }
        public static Projects SearchProNAme(Projects pro)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Projects.Select(p=>p).Where(p => p.projectname == pro.projectname)).First();
        }
        public static Projects SearchProjects(Projects pro)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Projects.Select(p => p).Where(p => p.projectid == pro.projectid)).First();
        }

    }
}
