"use client";

import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = ({ footerData }) => {
  return (
    <footer className="bg-black text-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-20" />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* CONTACT US */}
          <div>
            <p className="text-2xl font-bold mb-6 text-white">CONTACT US</p>
            <div className="space-y-4">
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-gray-400 group-hover:text-purple-400" />
                <p className="text-gray-300 group-hover:text-white">
                  {footerData.address}
                </p>
              </div>
              {footerData.mail?.map((email, i) => (
                <div key={i} className="flex items-center group">
                  <Mail className="h-5 w-5 mr-2 text-gray-400 group-hover:text-purple-400" />
                  <a
                    href={`mailto:${email}`}
                    className="hover:underline text-gray-300 hover:text-purple-400"
                  >
                    {email}
                  </a>
                </div>
              ))}
              {footerData.contact?.map((phone, i) => (
                <div key={i} className="flex items-center group">
                  <Phone className="h-5 w-5 mr-2 text-gray-400 group-hover:text-purple-400" />
                  <a
                    href={`tel:${phone}`}
                    className="hover:underline text-gray-300 hover:text-purple-400"
                  >
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* MENU */}
          <div>
            <p className="text-2xl font-bold mb-6 text-gray-100">MENU</p>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Loans For NRIs", path: "/loans-for-nris" },
                { name: "Legal Information", path: "/legal-information" },
                { name: "Inquiry", path: "/inquiry" },
                { name: "Career", path: "/career" },
                { name: "Team", path: "/team" },
                { name: "Event Photo Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy-policy" },
              ].map(({ name, path }, index) => (
                <li key={index} className="flex items-center group">
                  <span className="text-lg mr-2 text-gray-400">›</span>
                  <Link
                    href={path}
                    className="text-gray-300 hover:text-purple-400 hover:underline"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROPERTY BY LOCATION */}
          <div>
            <p className="text-2xl font-bold mb-6 text-gray-100">PROPERTY BY LOCATION</p>
            <ul className="space-y-3">
              {["Ahmedabad", "Pune", "Mumbai", "Gandhinagar"].map((city, index) => (
                <li key={index} className="flex items-center group">
                  <span className="text-lg mr-2 text-gray-400">›</span>
                  <Link
                    href={`/projects?city=${city}`}
                    className="text-gray-300 hover:text-purple-400 hover:underline"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROPERTY BY TYPE */}
          <div>
            <p className="text-2xl font-bold mb-6 text-gray-100">PROPERTY BY TYPE</p>
            <ul className="space-y-3">
              {["Residential", "Commercial", "Land"].map((type, index) => (
                <li key={index} className="flex items-center group">
                  <span className="text-lg mr-2 text-gray-400">›</span>
                  <Link
                    href={`/projects?projectType=${type}`}
                    className="text-gray-300 hover:text-purple-400 hover:underline"
                  >
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="mt-12 mb-6 border-t border-gray-800 pt-8 text-sm text-gray-400">
          <p className="mb-4">
            <span className="font-bold text-gray-200">Disclaimer:</span>{" "}
            {footerData.disclaimer}
          </p>
          <p className="mb-4">{footerData.rera}</p>
          <p className="text-gray-200">All Rights Reserved.</p>
        </div>

        {/* SOCIAL + COPYRIGHT */}
        <div className="pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">{footerData.rights}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[
              { href: footerData.facebookLink, label: "Facebook" },
              { href: footerData.twitterLink, label: "Twitter" },
              { href: footerData.instaLink, label: "Instagram" },
            ].map(({ href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="border border-gray-700 rounded-sm p-2 hover:bg-gray-800 hover:border-purple-400 transition-all"
              >
                <span className="text-sm text-gray-300">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
