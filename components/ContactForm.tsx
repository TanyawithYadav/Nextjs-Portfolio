"use client";
import React, { useState, useRef } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mzzvjwyg", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("Thank you!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col w-full gap-6 items-start px-4 sm:px-6 md:px-8">
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="w-full max-w-[350px]"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white text-left">
          Contact Me
        </h2>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full px-3 py-2 text-sm sm:text-base md:text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full px-3 py-2 text-sm sm:text-base md:text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>

        <div className="mb-3">
          <textarea
            placeholder="Your message"
            name="message"
            required
            rows={4}
            className="w-full px-3 py-2 text-sm sm:text-base md:text-sm text-gray-800 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>

        <button
          type="submit"
          className="rounded-[15px] bg-blue-500 hover:bg-blue-400 px-5 py-2.5 text-sm sm:text-base md:text-sm text-white"
        >
          Send
        </button>

        {status && (
          <p className="text-sm sm:text-base md:text-xs text-white mt-2 text-left">
            {status}
          </p>
        )}
      </form>

      {/* Contact Details */}
      <div className="text-white text-left text-sm sm:text-base md:text-xs w-full max-w-[350px]">
        <h3 className="text-base sm:text-lg md:text-sm font-semibold mb-2">
          You can also reach me at:
        </h3>
        <p>📞 +91-7881155534</p>
        <p>✉️ tanya78811@gmail.com</p>
        <p>📍 Lucknow, Uttar Pradesh, India</p>
      </div>
    </div>
  );
};

export default ContactForm;
