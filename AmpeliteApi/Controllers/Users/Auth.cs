﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using JWT;
using JWT.Algorithms;
using JWT.Serializers;

namespace AmpeliteApi.Controllers.Users {
    public class Auth {
        const string secret = "AmpelitE88";

        public static string JwtEncoder (Dictionary<string, object> payload) {
            IJwtAlgorithm algorithm = new HMACSHA256Algorithm ();
            IJsonSerializer serializer = new JsonNetSerializer ();
            IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder ();
            IJwtEncoder encoder = new JwtEncoder (algorithm, serializer, urlEncoder);

            return encoder.Encode (payload, secret);
        }

        public static bool JwtDecoder (string token) {
            try {
                IJsonSerializer serializer = new JsonNetSerializer ();
                IDateTimeProvider provider = new UtcDateTimeProvider ();
                IJwtValidator validator = new JwtValidator (serializer, provider);
                IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder ();
                IJwtDecoder decoder = new JwtDecoder (serializer, validator, urlEncoder);

                var json = decoder.Decode (token, secret, verify : true);
            } catch (TokenExpiredException) {
                return true;
            } catch (SignatureVerificationException) {
                return false;
            }
            return true;
        }

<<<<<<< HEAD
        //public static List<string> GetMacAddress()
        //{
        //    NetworkInterface[] nics = NetworkInterface.GetAllNetworkInterfaces();

        //    var macAddress = new List<string>();
        //    foreach (NetworkInterface adapter in nics)
        //    {
        //        if (adapter.OperationalStatus.ToString().ToUpper() == "UP")
        //        {
        //                IPInterfaceProperties properties = adapter.GetIPProperties();
        //                PhysicalAddress address = adapter.GetPhysicalAddress();
        //                byte[] bytes = address.GetAddressBytes();
        //                PhysicalAddress newAddress = new PhysicalAddress(bytes);
        //                macAddress.Add(newAddress.ToString());
                    
        //        }
        //    }
        //    return macAddress;
        //}
=======
        public static List<string> GetMacAddress () {
            NetworkInterface[] nics = NetworkInterface.GetAllNetworkInterfaces ();

            var macAddress = new List<string> ();
            foreach (NetworkInterface adapter in nics) {
                if (adapter.OperationalStatus.ToString ().ToUpper () == "UP") {
                    IPInterfaceProperties properties = adapter.GetIPProperties ();
                    PhysicalAddress address = adapter.GetPhysicalAddress ();
                    byte[] bytes = address.GetAddressBytes ();
                    PhysicalAddress newAddress = new PhysicalAddress (bytes);
                    macAddress.Add (newAddress.ToString ());
                }
            }
            return macAddress;
        }
>>>>>>> acaf6c2dbb3c80fce2d50c849f0a22218f067b7a

        public static string GetMd5Hash (MD5 md5Hash, string input) {

            // Convert the input string to a byte array and compute the hash.
            byte[] data = md5Hash.ComputeHash (Encoding.UTF8.GetBytes (input));

            // Create a new Stringbuilder to collect the bytes
            // and create a string.
            StringBuilder sBuilder = new StringBuilder ();

            // Loop through each byte of the hashed data 
            // and format each one as a hexadecimal string.
            for (int i = 0; i < data.Length; i++) {
                sBuilder.Append (data[i].ToString ("x2"));
            }

            // Return the hexadecimal string.
            return sBuilder.ToString ();
        }

        // Verify a hash against a string.
        public static bool VerifyMd5Hash (MD5 md5Hash, string input, string hash) {
            // Hash the input.
            string hashOfInput = GetMd5Hash (md5Hash, input);

            // Create a StringComparer an compare the hashes.
            StringComparer comparer = StringComparer.OrdinalIgnoreCase;

            if (0 == comparer.Compare (hashOfInput, hash)) {
                return true;
            } else {
                return false;
            }
        }
    }
}