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
    public class ProjectController : ApiController
    {
        // GET: api/Project
        public IEnumerable<Projects> Get()
        {
            return ProjectRepository.ShowAllProjects();
        }

        // GET: api/Project/5
        public Projects Get(int id)
        {
            
            Projects project = new Projects();
            project.projectid = id;
            return ProjectRepository.SearchProjects(project);
        }

        // POST: api/Project
        public void Post(Projects project)
        {
            ProjectRepository.CreateProject(project);
        }

        // PUT: api/Project/5
        public void Put(int id,Projects project)
        {
            project.projectid = id;
            ProjectRepository.Edit(project);
        }

        // DELETE: api/Project/5
        public void Delete(int id)
        {
            Projects project = new Projects();
            project.projectid = id;
            ProjectRepository.DeleteProject(project);
        }
    }
}
