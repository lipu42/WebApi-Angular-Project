using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiUserRegistration.Models;

namespace WebApiUserRegistration.Controllers
{
    public class RegistrationController : ApiController
    {
        [Route("api/User/Registration")]
        [HttpPost]
        public IdentityResult Registration(AccountModel accountModel)
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);

            var user = new ApplicationUser() { UserName=accountModel.UserName ,Email=accountModel.Email};
            user.FirstName = accountModel.UserName;
            user.LastName = accountModel.LastName;

            manager.PasswordValidator = new PasswordValidator 
            {
                RequiredLength = 5
            };
            
            IdentityResult result = manager.Create(user, accountModel.Password);

            return result;
        }
    }
}
