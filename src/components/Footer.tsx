import React from 'react';
import { FooterLink, SocialLink } from '../types/footer';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const footerLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Exams', href: '/exams' },
  { label: 'LeaderBoard', href: '/leaderboard' },
  { label: 'Register', href: '/register' },
  { label: 'Login', href: '/login' },
  { label: 'Contact', href: '/contact' },
  
];

const socialLinks: SocialLink[] = [
  { icon: <FaFacebook className="text-xl" />, href: 'https://facebook.com' },
  { icon: <FaTwitter className="text-xl" />, href: 'https://twitter.com' },
  { icon: <FaLinkedin className="text-xl" />, href: 'https://linkedin.com' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#97c966] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Brand Info */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Edumart CBT</h1>
            <p className="mt-2 text-sm text-white">
              Your trusted platform for exam preparation.
            </p>
          </div>

          {/* Footer Links */}
          <div className="w-full md:w-1/3 flex justify-center">
            <ul className="flex space-x-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <ul className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-50 hover:text-white transition"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white pt-6 text-center">
          <p className="text-sm text-white font-bold text-lg">
            &copy; {currentYear} Edummart CBT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
