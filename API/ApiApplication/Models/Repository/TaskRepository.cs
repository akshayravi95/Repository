using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManagementWeb.Common;
using ProjectManagementWeb.Models;

namespace ProjectManagementWeb.Models.Repository
{
    public class TaskRepository
    {
        public static void CreateTasks(Tasks task)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            db.Tasks.Add(task);
            db.SaveChanges();
        }
        public static void Edit(Tasks task)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Tasks t = SearchTask(task, db);
            t.empid = task.empid;
            t.taskstartdate = task.taskstartdate;
            t.taskenddate = task.taskenddate;
            t.taskcompletion = task.taskcompletion;
            t.userstoryid = task.userstoryid;
            db.SaveChanges();
        }
        public static List<Tasks> ShowAllTasks()
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Tasks.Select(task =>task).ToList());
        }
        public static Tasks SearchTask(Tasks task, ProjectEntiryDbcontext db)
        {
            return db.Tasks.Select(t=>t).Where(t=>t.projecttaskid == task.projecttaskid).FirstOrDefault();
        }
        public static void DeleteTask(Tasks task)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Tasks t = SearchTask(task, db);
            db.Tasks.Remove(t);
            db.SaveChanges();
        }
        public static Tasks SearchTask(Tasks task)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Tasks.Select(t => t).Where(t => t.projecttaskid == task.projecttaskid)).First();
        }

    }
}
