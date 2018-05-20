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
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public List<Employees> Get()
        {
            return EmployeeRepositorycs.ShowAllEmployees();
        }

        // GET: api/Employee/5
        public Employees Get(int id)
        {
            Employees employees = new Employees();
            employees.employeeid = id;
            return EmployeeRepositorycs.SearchEmployee(employees);
        }

        // POST: api/Employee
        //public Employees Post([FromBody]Employees value)
        public void Post(Employees employees)
        {
             EmployeeRepositorycs.CreateEmployee(employees);
           
        }

        // PUT: api/Employee/5
        public void Put(int id,Employees employees)
        {
            employees.employeeid= id;
            EmployeeRepositorycs.Edit(employees);
            
            
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            Employees emp = new Employees();
            emp.employeeid = id;
            EmployeeRepositorycs.DeleteEmpo(emp);
        }
    }
}
