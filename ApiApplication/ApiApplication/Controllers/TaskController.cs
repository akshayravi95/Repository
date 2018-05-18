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
    public class TaskController : ApiController
    {
        // GET: api/Task
        public IEnumerable<Tasks> Get()
        {
            return TaskRepository.ShowAllTasks();
        }

        // GET: api/Task/5
        public Tasks Get(int id)
        {
         
            Tasks task = new Tasks();
            task.projecttaskid = id;
            return TaskRepository.SearchTask(task);
        }

        // POST: api/Task
        public void Post(Tasks Task)
        {
            TaskRepository.CreateTasks(Task);
        }

        // PUT: api/Task/5
        public void Put(int id, Tasks Task)
        {
            Task.projecttaskid = id;
            TaskRepository.Edit(Task);

        }

        // DELETE: api/Task/5
        public void Delete(int id)
        {
            Tasks task = new Tasks();
            task.projecttaskid = id;
            TaskRepository.DeleteTask(task);
        }
    }
}
