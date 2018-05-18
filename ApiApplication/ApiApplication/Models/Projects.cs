using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ProjectManagementWeb.Models
{
    [Table("Projects")]
    public class Projects
    {
        [Key]
        public int projectid { get; set; }
        [Required]
        public string projectname { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime startdate { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime enddate { get; set; }
        [Required]
        public string clientname { get; set; }
        public Projects()
        {

        }
    }
}
