using ProjectManagementWeb.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ApiApplication.Models
{
    public class ManagerComment
    {   [Key]
        public int managerid { get; set; }
        public string comments { get; set; }
        public int taskid { get; set; }
        [ForeignKey("taskid")]
        [System.Runtime.Serialization.IgnoreDataMember]
        public virtual Tasks TaskID { get; set; }
    }
}