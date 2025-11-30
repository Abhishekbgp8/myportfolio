import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Section from "../Common/Section";
import { CONTACT_EMAIL } from "../../constants";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
    if (PUBLIC_KEY && emailjs && emailjs.init) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (err) {
        console.debug("EmailJS init failed (maybe already initialized)", err);
      }
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_oh4muzh";
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_8ae17la";
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "9jWVUbz2DPBPEquni";

    // Basic validation of IDs — if they are empty or clearly invalid, open mailto fallback.
    // Fix common typo: extra 's' at the beginning (i.e., 'sservice_...')
    let actualServiceId = SERVICE_ID;
    if (SERVICE_ID && SERVICE_ID.startsWith("sservice_")) {
      actualServiceId = SERVICE_ID.replace(/^s+/, "");
      console.warn("Corrected common typo in VITE_EMAILJS_SERVICE_ID from", SERVICE_ID, "to", actualServiceId);
    }
    const isConfigValid = (actualServiceId && actualServiceId.startsWith("service_") && TEMPLATE_ID && PUBLIC_KEY && !TEMPLATE_ID.startsWith(","));
    if (SERVICE_ID && !SERVICE_ID.startsWith("service_") && !SERVICE_ID.startsWith("sservice_")) {
      console.warn("Possible typo in VITE_EMAILJS_SERVICE_ID detected:", SERVICE_ID);
    }
    if (!isConfigValid) {
      // Fallback: open mail client with pre-filled subject/body
      const formData = new FormData(form.current);
      const recipient = CONTACT_EMAIL || "abhishekbgp8@gmail.com";
      const name = formData.get("user_name") || "";
      const subject = formData.get("subject") || "Contact";
      const message = formData.get("message") || "";
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nFrom: " + name)}`;
      window.location.href = mailto;
      setIsSending(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(actualServiceId, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setIsSent(true);
      form.current.reset();
      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setIsSending(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      // final fallback to mailto
      const formData = new FormData(form.current);
      const recipient = CONTACT_EMAIL || "abhishekbgp8@gmail.com";
      const name = formData.get("user_name") || "";
      const subject = formData.get("subject") || "Contact";
      const message = formData.get("message") || "";
      const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nFrom: " + name)}`;
      window.location.href = mailto;
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" title="CONTACT" subtitle="I’d love to hear from you—reach out for any opportunities or questions!" paddingTop="pt-8" paddingBottom="pb-0" titleClassName="mb-6" style={{ scrollMarginTop: 'var(--navbar-height)' }} className="relative">
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title is handled by Section component */}

      {/* Contact Form */}
      <div className="contact-bg absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
      </div>
      <div className="mt-4 mb-2 w-4/5 mx-auto bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 relative z-10">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            disabled={isSending}
          >
            {isSending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
