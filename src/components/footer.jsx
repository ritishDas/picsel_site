import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#E0E0E0] text-[#333333] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h1 className="text-2xl font-bold text-[#0078D4]">CSE Committee</h1>
            <p className="mt-4 text-[#737373]">
              Empowering students with knowledge, innovation, and collaboration to build a brighter future in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-[#333333]">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-[#333333] hover:text-[#0056A3] transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-[#333333] hover:text-[#0056A3] transition"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#333333] hover:text-[#0056A3] transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[#333333] hover:text-[#0056A3] transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold text-[#333333]">Contact</h2>
            <ul className="mt-4 space-y-2 text-[#737373]">
              <li>Email: csecommittee@college.edu</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 College Street, City, State</li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-[#E0E0E0] my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#737373]">
          <p>&copy; 2025 CSE Committee. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="hover:text-[#0056A3] transition"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-[#0056A3] transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
