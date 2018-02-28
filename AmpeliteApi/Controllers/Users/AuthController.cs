﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.NetworkInformation;
using System.Security.Cryptography;
using System.Text;

using AmpeliteApi.Models;
using JWT;
using JWT.Algorithms;
using JWT.Serializers;

using AmpeliteApi.Controllers.Users;

namespace AmpeliteApi.Controllers.Users
{
    [Produces("application/json")]
    //[Route("api/Auth")]
    public class AuthController : Controller
    {
        private readonly db_AmpeliteContext _context;


        public AuthController(db_AmpeliteContext context)
        {
            _context = context;
        }

        // POST: api/Auth
        [Route("Auth/SignIn")]
        [HttpPost]
        public async Task<IActionResult> Authtication([FromBody] SignIn signin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            List<CustomerInfo> customer;
            customer = await (from p in _context.HrEmployee
                              where p.SEmpUserName == signin.UserName
                              select new CustomerInfo
                              {
                                  UserId = p.SEmpId,
                                  UserName = p.SEmpUserName,
                                  Email = p.SEmpEmail,
                                  Password = p.SEmpPassword
                              }).ToListAsync();

            if (customer.Count == 0 || customer == null)
            {
                return StatusCode(401);
            }
            else
            {
                //List<string> macAddress = Auth.GetMacAddress();
                string hash = customer[0].Password;
<<<<<<< HEAD
                //if (macAddress == customer[0].MacAddress)
                //{
                using (MD5 md5Hash = MD5.Create())
                {
                    if (Auth.VerifyMd5Hash(md5Hash, signin.Password, hash))
                    {
                        var payload = new Dictionary<string, object>
                            {
                                { "UserID", customer[0].UserId},
                                { "Username", customer[0].UserName },
                            };
                        var token = Auth.JwtEncoder(payload);
                        var obj = new Dictionary<string, object>
                            {
                                {"access_token", token}
                            };
                        Response.Headers.Add("Authorization", token);
                        return Ok(obj);
                    }
                    else
                    {
                        return StatusCode(401);
                    }
                }
                //}
                //else
                //{
                //    return StatusCode(401);
                //}
=======
                return "";
                // if (macAddress == customer[0].MacAddress)
                // {
                //     using (MD5 md5Hash = MD5.Create())
                //     {
                //         if (Auth.VerifyMd5Hash(md5Hash, signin.Password, hash))
                //         {
                //             var payload = new Dictionary<string, object>
                //             {
                //                 { "UserID", customer[0].UserId},
                //                 { "Username", customer[0].UserName },
                //             };
                //             var token = Auth.JwtEncoder(payload);
                //             var obj = new Dictionary<string, object>
                //             {
                //                 {"access_token", token}
                //             };
                //             Response.Headers.Add("Authorization", token);
                //             return Ok(obj);
                //         }
                //         else
                //         {
                //             return StatusCode(401);
                //         }
                //     }
                // }
                // else
                // {
                //     return StatusCode(401);
                // }
>>>>>>> acaf6c2dbb3c80fce2d50c849f0a22218f067b7a
            }
        }
    }

    public class SignIn
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public partial class CustomerInfo
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        //public string MacAddress { get; set; }
    }


}