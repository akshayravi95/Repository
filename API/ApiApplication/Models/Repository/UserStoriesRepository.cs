using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManagementWeb.Common;
using ProjectManagementWeb.Models;

namespace ProjectManagementWeb.Models.Repository
{
    public class UserStoriesRepository
    {
        public static void CreateStory(Userstories story)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            db.Userstories.Add(story);
            db.SaveChanges();
        }
        public static void Edit(Userstories user)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Userstories u = SearchStory(user, db);
            u.projectid = user.projectid;
            u.story = user.story;
            db.SaveChanges();
        }
        public static void DeleteStory(Userstories story)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Userstories u = UserStoriesRepository.SearchStory(story, db);
            db.Userstories.Remove(u);
            db.SaveChanges();
        }
        public static List<Userstories> ShowAllStories()
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return(db.Userstories.Select(story => story).ToList());
        }
        public static Userstories SearchStory(Userstories story,ProjectEntiryDbcontext db)
        {
            return (db.Userstories.Select(s => s).Where(s => s.userstoryid == story.userstoryid)).First();  
        }
        public static Userstories SearchStory(Userstories story)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Userstories.Select(s => s).Where(s => s.userstoryid == story.userstoryid)).First();
        }

    }
}
