import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const parameters = {
      from_name: name,
      from_email: email,
      to_name: "Ravi",
      message: message,
    };

    emailjs
      .send(
        "service_0r4pc7y",
        "template_zk4lk0i",
        parameters,
        "egcfkHhJ4n7u-xD60"
      )
      .then((response) => {
        alert("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const cardBg = 'bg-gray-700/50';
  const primaryText = 'text-white';
  const secondaryText = 'text-blue-100';

  return (
    <>
      <div className="text-center mb-16 py-20 bg-gradient-to-br from-[#0A0A23] to-[#162B44] relative overflow-hidden">
        <h2 className="text-4xl font-bold text-white mb-5 text-center">
          Get in <span className="text-blue-400">Touch</span>
        </h2>
        <div className="w-[90%] mx-auto max-w-7xl grid md:grid-cols-2 gap-12 p-8 md:gap-16">

          {/* Left Column - Contact Info */}
          <div className={`${cardBg} rounded-lg p-8 space-y-8 shadow-xl`}>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 mt-1 text-blue-300" />
                <div className="flex flex-col items-start">
                  <h3 className={`font-semibold ${primaryText}`}>Address:</h3>
                  <p className={`${secondaryText}`}>Shakarpur, New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 mt-1 text-blue-300" />
                <div className="flex flex-col items-start">
                  <h3 className={`font-semibold ${primaryText}`}>Contact Number:</h3>
                  <p className={`${secondaryText}`}>+918700834348</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 mt-1 text-blue-300" /> 
                <div className="flex flex-col items-start">
                  <h3 className={`font-semibold ${primaryText}`}>Email Us:</h3>
                  <p className={`${secondaryText}`}>inboxraviiranjan@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`rounded-lg p-8 space-y-3 ${cardBg} shadow-xl`}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label htmlFor="fullName" className={`block ${primaryText} text-left`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  id="fullName"
                  placeholder="Jesse"
                  className="text-gray-600 w-full px-4 py-3 rounded-lg bg-gray-300  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="email" className={`block ${primaryText}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleEmailChange}
                  value={email}
                  placeholder="example@gmail.com"
                  className="text-gray-600 w-full px-4 py-3 rounded-lg bg-gray-300  border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2 text-left">
              <label htmlFor="message" className={`block ${primaryText}`}>
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                onChange={handleMessageChange}
                value={message}
                placeholder="Write Your message"
                className={`text-gray-600 w-full px-4 py-3 rounded-lg bg-gray-300 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none md:rows-6 sm:rows-3`}
              />
            </div>

            <button
              className={`w-full px-6 py-3 text-center rounded-lg flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-600 text-white`}
              onClick={sendEmail}
            >
              Send Me Message
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Remove any unnecessary padding or margin */}
      <style jsx>{`
        body, html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @media (max-width: 768px) {
          .grid {
            display: flex;
            flex-direction: column;
          }
          #message {
            height: 100px; /* Adjust the height as needed */
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
