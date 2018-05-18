using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjectManagementWeb.Models
{
    public class Tasks
    {
        [Key]
        public int projecttaskid { get; set; }
        [Required]
        public int empid { get; set; }
        [ForeignKey("empid")]
        public Employees employee { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime taskstartdate { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime taskenddate { get; set; }
        [Required]
        public string taskcompletion { get; set; }
        [Required]
        public int userstoryid { get; set; }
        [ForeignKey("userstoryid")]
        public Userstories userstories { get; set; }
    }
}