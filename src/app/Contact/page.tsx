"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          We love to hear from you! Get in touch using the form below or reach out through our contact details
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-indigo-500 text-xl" />
            <div>
              <h4 className="text-lg font-medium text-gray-800">Our Address</h4>
              <p className="text-gray-600">Clifton Block-8 Karachi Pakistan</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-indigo-500 text-xl" />
            <div>
              <h4 className="text-lg font-medium text-gray-800">Phone Number</h4>
              <p className="text-gray-600">+92 234 567 890</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-indigo-500 text-xl" />
            <div>
              <h4 className="text-lg font-medium text-gray-800">Email Address</h4>
              <p className="text-gray-600">hammad@example.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509319!2d144.95592831531818!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1e7e8b0acb2!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635839864914!5m2!1sen!2sau"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
