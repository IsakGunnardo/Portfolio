"use client";

import emailjs from "emailjs-com";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSending, setIsSending] = useState<boolean>(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | ""
  >("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailParams: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    emailjs
      .send(
        "service_5sif438",
        "template_gg0r6zq",
        emailParams,
        "FIVqjS_Zz3o6eZ84Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          submissionStatus;
          // alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          submissionStatus;

          // alert("Failed to send message, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  return (
    <div id="contact" className="flex flex-col gap-16 w-full mx-auto  mt-36 text-center bg-pink-50 py-5">
      <div className="bg-yellow-300">Contact me</div>
      <div className="flex flex-col gap-16 md:flex-row">
        <div className="w-full bg-green-500 p-3">this is a square</div>
        <div className="w-full bg-red-500 p-3">
          <h2 className="text-2xl font-semibold mb-12 text-black text-opacity-80">
            While your waiting for the page to be finished
            <br />
            Send me a message
          </h2>
          <form id="contactForm" className="" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="shadow-lg">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black opacity-80"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full mt-1 p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white text-gray-800 "
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black opacity-80 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  className="w-full mt-1 p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white text-gray-800 "
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="shadow-lg">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black opacity-80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full mt-1 p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white text-gray-800 "
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full mt-4 py-3 rounded-md bg-white text-black text-opacity-70 font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition ease-in-out duration-200 shadow-lg"
                disabled={!isFormValid() || isSending}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
              {submissionStatus === "success" && (
                <p className="mt-4 text-green-100">
                  Message sent successfully!
                </p>
              )}
              {submissionStatus === "error" && (
                <p className="mt-4 text-red-100">
                  Failed to send message, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
