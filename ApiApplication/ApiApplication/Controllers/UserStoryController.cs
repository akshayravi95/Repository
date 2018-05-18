using ProjectManagementWeb.Common;
using ProjectManagementWeb.Models;
using ProjectManagementWeb.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiApplication.Controllers
{
    public class UserStoryController : ApiController
    {
        // GET: api/UserStory
        public IEnumerable<Userstories> Get()
        {
           return UserStoriesRepository.ShowAllStories();
        }

        // GET: api/UserStory/5
        public Userstories Get(int id)
        {
            
            Userstories story = new Userstories();
            story.userstoryid = id;
            return UserStoriesRepository.SearchStory(story);
        }

        // POST: api/UserStory
        public void Post(Userstories story)
        {
            UserStoriesRepository.CreateStory(story);
        }

        // PUT: api/UserStory/5
        public void Put(int id, Userstories story)
        {
            story.userstoryid = id;
            UserStoriesRepository.Edit(story);
        }

        // DELETE: api/UserStory/5
        public void Delete(int id)
        {
            Userstories user = new Userstories();
            user.userstoryid = id;
            UserStoriesRepository.DeleteStory(user);
        }
    }
}
