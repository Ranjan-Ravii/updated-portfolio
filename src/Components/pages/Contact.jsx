import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Loader2, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success", // success | error
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      showPopup("Please fill all fields.", "error");
      return;
    }

    setLoading(true);

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
        "lyjy9L8-C9S5JL-up"
      )
      .then(() => {
        showPopup("Email sent successfully!", "success");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        showPopup("Failed to send email. Please try again.", "error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: "", type: "success" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-24"
    >
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6">

          {/* Section Title */}
          <motion.h2
            className="text-5xl font-black uppercase text-center mb-14"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in <span className="text-blue-400">Touch</span>
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-10 items-stretch">

            {/* LEFT SIDE */}
            <div className="md:w-1/2 bg-white dark:bg-black/60 border border-gray-200 dark:border-white/10 rounded-xl p-8 shadow-md space-y-8">

              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Shakarpur, New Delhi, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +91 8700834348
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    inboxraviiranjan@gmail.com
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <form
              onSubmit={sendEmail}
              className="md:w-1/2 bg-white dark:bg-black/60 border border-gray-200 dark:border-white/10 rounded-xl p-8 shadow-md"
            >

              <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="write you message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-black/40 border border-gray-300 dark:border-white/10 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Mail className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>

          </div>
        </div>
      </div>

      {/* TOAST POPUP */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`
              fixed bottom-6 right-6 z-50
              px-6 py-4 rounded-lg shadow-xl
              flex items-center gap-3 text-white
              ${popup.type === "success"
                ? "bg-green-600"
                : "bg-red-600"}
            `}
          >
            {popup.type === "success" ? (
              <CheckCircle size={18} />
            ) : (
              <XCircle size={18} />
            )}
            <span>{popup.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;
