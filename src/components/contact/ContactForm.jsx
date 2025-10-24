import React, { useState } from "react";
import Button from "../ui/button/Button";

export const ContactForm = () => {


     const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
      <div className="max-w-3xl mx-auto p-6 sm:p-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        Have questions? Send us a message and we’ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        ></textarea>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors duration-300"
        >
          Send Message
        </Button>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-500 font-medium mt-2">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>
    </div>
  );
};
