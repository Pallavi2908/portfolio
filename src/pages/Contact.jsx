// src/pages/Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const key = import.meta.env.VITE_PUBLIC_KEY;

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, key).then(
      () => {
        alert("Message sent!");
        formRef.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again later.");
        console.error(error);
      }
    );
  };

  return (
    <div className="min-h-screen flex gap-2 items-center justify-center px-4">
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="bg-white/50 font-heading rounded-xl shadow-lg p-8 w-full max-w-md  flex flex-col gap-2"
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Contact Me
        </h2>

        <div className="">
          <label
            htmlFor="from_email"
            className="block text-white border-white font-medium mb-1"
          >
            From:
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            placeholder="your@email.com"
            required
            className="w-full px-4 py-2 border  rounded-full border-white "
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-white font-medium mb-1"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here... (temporarily unavailable)"
            required
            className="w-full px-4 py-2 border rounded-md border-white "
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary text-white font-semibold py-2 rounded-full tracking-wide hover:bg-primary transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
