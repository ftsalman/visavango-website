import React, { useState } from "react";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter your email address");
    if (!/\S+@\S+\.\S+/.test(email)) return alert("Please enter a valid email");

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Subscribed with email:", email);
      setIsSubscribed(true);
      setEmail("");
    } catch (error) {
      alert("Subscription failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#070214] to-gray-900 text-white">
      <div
        className="bg-cover bg-center bg-blend-overlay py-12 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1483721310020-03392a8b1c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12">
            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <Link to="/">
                <h2 className="flex items-center gap-3 text-3xl font-bold mb-4">
                  <img
                    src="/imgs/logo.png"
                    alt="Visa Vango Logo"
                    className="w-10 h-10"
                  />
                  VISA VANGO
                </h2>
              </Link>

              

              <h3 className="text-xl font-semibold mb-4">
                Subscribe to our newsletter
              </h3>

              {isSubscribed ? (
                <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4 max-w-md">
                  <p className="text-yellow-400  font-semibold">
                    ✅ Thank you for subscribing!
                  </p>
                  <p className="text-yellow-300 text-sm mt-1">
                    You'll receive our latest updates and offers soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex sm:flex-row items-start  gap-3 w-full max-w-md mx- rounded-full px-4 py-2 border border-gray-400 bg-gray-600/20 focus-within:ring-2 focus-within:ring-yellow-500 transition-all duration-300"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 w-full bg-transparent outline-none placeholder:text-gray-300 px-3 py-2 text-white text-sm sm:text-base"
                    disabled={isLoading}
                    required
                  />

                  <Button
                    type="submit"
                    variant="secondary"
                    className="rounded-full px-5 py-2 text-white font-semibold  border-none transition-colors duration-200 flex items-center justify-center min-w-[48px]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <img
                        src="/imgs/6778c2f044158030c310b22c_icon-01.svg"
                        alt="Submit"
                        className="w-5 h-5"
                      />
                    )}
                  </Button>
                </form>
              )}

              {/* Contact Info */}
              <div className="mt-6 space-y-2">
                <h4 className="font-semibold mb-2">Contact us</h4>
                <a
                  href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20more%20about%20your%20visa%20services"
                  className="flex items-center gap-2 text-lg hover:text-yellow-400 transition"
                >
                  <IconPhoneCall className=" w-6 h-6 " />
                  0567529006
                </a>
                <a
                  href="https://wa.me/971567529006?text=Hello%20I%20want%20to%20know%20more%20about%20your%20visa%20services"
                  className="flex items-center gap-2 text-lg hover:text-yellow-400 transition"
                >
                  <IconPhoneCall className=" w-6 h-6 " />
                  0544455526
                </a>
                <p className="flex items-center gap-2 text-lg">
                   <IconMail/>
                   sales@visavango.com</p>
              </div>
            </div>

            {/* Pages Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  {[
                    { name: "Immigration", path: "/visa-services" },
                    { name: "Visas", path: "/visa-services" },
                    { name: "Countries", path: "/countries" },
                    { name: "Case Studies", path: "/blog" },
                  ].map((page) => (
                    <Link
                      key={page.name}
                      to={page.path}
                      className="block hover:text-yellow-500 text-gray-300 transition"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Testimonials", path: "/about" },
                    { name: "Agents", path: "/about" },
                    { name: "About", path: "/about" },
                    { name: "Contact", path: "/contact" },
                  ].map((page) => (
                    <Link
                      key={page.name}
                      to={page.path}
                      className="block hover:text-yellow-500 text-gray-300 transition"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Office Location</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">
                    Conrad Office tower 1707. World trade center - Dubai -UAE
                    Closest metro exit 2
                  </h4>
                  <p className="text-gray-300 mt-1"></p>
                </div>
                <div>
                  <p className="font-medium">Mon-Sat: 9 AM – 6 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-700 mt-10 pt-6 text-sm text-gray-300 gap-4">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} VISA VANGO. All rights reserved.
            </p>

            <div className="flex justify-center gap-3">
              <a
                href="https://www.instagram.com/visavango/"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-600/20 border border-gray-200 hover:bg-yellow-500/20 transition"
              >
                <IconBrandInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/visavango"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-600/20 border border-gray-200 hover:bg-yellow-500/20 transition"
              >
                <IconBrandFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/visavango"
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-600/20 border border-gray-200 hover:bg-yellow-500/20 transition"
              >
                <IconBrandLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
