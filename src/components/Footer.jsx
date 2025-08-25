import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-black px-4 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto items-start">
        {/* Contact Info */}
        <div className="space-y-3 text-sm font-medium">
          <p>sadarshivdip@gmail.com</p>
          <p>+91 7498219037</p>
          <p>
            Location: Remote / India
          </p>
        </div>

        {/* Page Links */}
        <div className="space-y-2 text-sm font-medium">
          <p className="hover:underline cursor-pointer">Projects</p>
          <p className="hover:underline cursor-pointer">Contact</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
          <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4 w-full">
          <h3 className="text-lg md:text-xl font-extrabold uppercase">
            Subscribe to our Newsletter
          </h3>
          <div className="flex border border-black w-full h-[60px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 text-sm text-black bg-white placeholder-black focus:outline-none"
            />
            <button className="bg-black text-white px-6 text-sm font-semibold uppercase">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
