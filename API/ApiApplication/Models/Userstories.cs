using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using ProjectManagementWeb.Models;


namespace ProjectManagementWeb.Models
{
    public class Userstories
    {
        [Key]
        public int userstoryid { get; set; }
        [Required]
        public string story { get; set; }
        [Required]
        public int projectid { get; set; }
        [ForeignKey("projectid")]
        public Projects project { get; set; }
        public Userstories()
        {

        }
    }
}