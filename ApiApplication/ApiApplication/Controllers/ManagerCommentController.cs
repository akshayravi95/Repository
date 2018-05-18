using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProjectManagementWeb.Models;
using ApiApplication.Models;
using ApiApplication.Models.Repository;
using ProjectManagementWeb.Common;

namespace ApiApplication.Controllers
{
    public class ManagerCommentController : ApiController
    {
        // GET: api/ManagerComment
        public IEnumerable<ManagerComment> Get()
        {
            return CommentsRepository.ShowAll();
        }

        // GET: api/ManagerComment/5
        public ManagerComment Get(int id)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            ManagerComment comment = new ManagerComment();
            comment.managerid = id;
            return CommentsRepository.Search(comment, db);
        }

        // POST: api/ManagerComment
        public void Post(ManagerComment comment)
        {
            CommentsRepository.Create(comment);
        }

        // PUT: api/ManagerComment/5
        public void Put(int id,ManagerComment comment)
        {
            comment.managerid = id;
            CommentsRepository.Edit(comment);
        }

        // DELETE: api/ManagerComment/5
        public void Delete(int id)
        {
            ManagerComment comment = new ManagerComment();
            CommentsRepository.Delete(comment);
        }
    }
}
