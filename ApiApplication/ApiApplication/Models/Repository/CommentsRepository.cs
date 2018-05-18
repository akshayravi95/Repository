using ProjectManagementWeb.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace ApiApplication.Models.Repository
{
    public class CommentsRepository
    {
        public static void Create(ManagerComment comment)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            db.ManagerComments.Add(comment);
            db.SaveChanges();
        }
        public static void Edit(ManagerComment comment)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            ManagerComment c = Search(comment, db);
            c.comments = comment.comments;
            c.taskid = comment.taskid;
            db.SaveChanges();
        }
        public static void Delete(ManagerComment comment)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            db.ManagerComments.Remove(comment);
            db.SaveChanges();
        }
        public static List<ManagerComment> ShowAll()
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.ManagerComments.Select(comment => comment).ToList());
        }
        public static ManagerComment  Search(ManagerComment comment, ProjectEntiryDbcontext db)
        {
            return (db.ManagerComments.Select(s => s).Where(s => s.managerid == comment.managerid)).First();
        }
    }
}