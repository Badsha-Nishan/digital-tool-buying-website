import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white">
      <div className="flex flex-col md:flex-row w-11/12 mx-auto p-24 gap-12">
        <div className="space-y-7">
          <h2 className="text-5xl font-bold">DigiTools</h2>
          <p className="max-w-[350px]">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-24">
          <div className="space-y-4">
            <p className="font-bold text-xl">Product</p>
            <a className="hover:underline" href="#">
              <p className="mb-3">Features</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Pricing</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Templates</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Integrations</p>
            </a>
          </div>
          <div className="space-y-4">
            <p className="font-bold text-xl">Company</p>
            <a className="hover:underline" href="#">
              <p className="mb-3">About</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Blog</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Careers</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Press</p>
            </a>
          </div>
          <div className="space-y-4">
            <p className="font-bold text-xl">Resources</p>
            <a className="hover:underline" href="#">
              <p className="mb-3">Documentation</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Help Center</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Community</p>
            </a>
            <a className="hover:underline" href="#">
              <p className="mb-3">Contact</p>
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold text-xl">Social Links</p>
          <div className="flex gap-5 mt-5">
            <a
              className="bg-white p-4 text-black text-2xl rounded-full hover:text-white hover:bg-pink-500 transition "
              href="#"
            >
              <FaInstagramSquare />
            </a>
            <a
              className="bg-white p-4 text-black text-2xl rounded-full hover:text-white hover:bg-pink-500 transition "
              href="#"
            >
              <FaSquareFacebook />
            </a>
            <a
              className="bg-white p-4 text-black text-2xl rounded-full hover:text-white hover:bg-pink-500 transition "
              href="#"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="flex mx-auto flex-col w-11/12">
        <div className="divider after:bg-gray-500 before:bg-gray-500"></div>
      </div>
      <div className="flex justify-between w-11/12 mx-auto pb-10">
        <div>
          <p>© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <a className="hover:underline" href="#">
            Privacy Policy
          </a>
          <a className="hover:underline" href="#">
            Terms of Service
          </a>
          <a className="hover:underline" href="#">
            Cookies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
