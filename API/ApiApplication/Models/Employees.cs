using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace ProjectManagementWeb.Models
{
    [Table("Employees")]
    public class Employees
    {
        [Key]
        public int employeeid { get; set; }
        [Required]
        public string employeename { get; set; }
        [Required]
        public string designation { get; set; }
        public int? managerid { get; set; }
        [ForeignKey("managerid")]
        [System.Runtime.Serialization.IgnoreDataMember]
        public virtual Employees Manager { get; set; }
        [Required]
        public string contactno { get; set; }
        [Required]
        [DataType(DataType.EmailAddress,ErrorMessage ="Invalid Email")]
        public string emailid { get; set; }
        [Required]
        public string skillset { get; set; }
        public Employees()
        {

        }
    }
}
