using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectManagementWeb.Models;
using ProjectManagementWeb.Common;
using System.Data.Entity;

namespace ProjectManagementWeb.Models.Repository
{
    public class EmployeeRepositorycs
    {   
        public static void CreateEmployee(Employees emp)
        {
            if (emp.managerid == 0)
                emp.managerid = null;
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            db.Employees.Add(emp);
            db.SaveChanges();
        }
        public static void Edit(Employees emp)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Employees e = SearchEmployee(emp,db);
            e.employeename = emp.employeename;
            e.designation = emp.designation;
            e.contactno = emp.contactno;
            e.managerid = emp.managerid;
            e.emailid = emp.emailid;
            e.skillset = emp.skillset;
            db.SaveChanges();
            
        }
        public static void DeleteEmpo(Employees emp)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            Employees e = SearchEmployee(emp, db);
            db.Employees.Remove(e);
            db.SaveChanges();
            
        }
        public static List<Employees> ShowAllEmployees()
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Employees.Select(emp => emp).ToList());
        }
        public static Employees SearchEmployee(Employees emp, ProjectEntiryDbcontext db)
        {
            return (db.Employees.Select(e => e).Where(e => e.employeeid == emp.employeeid)).First();
      
           
        }
        public static Employees SearchEmpNAme(Employees emp)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Employees.Select(e => e).Where(e => e.employeename == emp.employeename)).First();
        }
        public static Employees SearchEmployee(Employees emp)
        {
            ProjectEntiryDbcontext db = new ProjectEntiryDbcontext();
            return (db.Employees.Select(e => e).Where(e => e.employeeid == emp.employeeid)).First();


        }


    }
}
