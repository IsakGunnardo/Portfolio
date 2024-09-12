"use client";

import emailjs from "emailjs-com";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        emailParams,
        process.env.NEXT_PUBLIC_USER_ID as string
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
    // CONTAINER
    <div
      id="contact"
      className="flex flex-col gap-10 w-full mx-auto  mt-36 text-center 0 py-5"
    >
      {/* TOP  */}
      <h1 className="text-2xl font-semibold text-ardo">Contact me</h1>
      {/* BOTTOM CONTAINER  */}
      <div className="flex flex-col gap-16 md:flex-row">
        {/* LEFT CONTAINER */}
        <div className="w-full min-h-[300px] rounded-md  text-black p-3 flex flex-col items-center justify-center gap-10 container">
            {/* INNER TEXT  */}
          <div className="flex items-center justify-center gap-5">
            <FaLocationDot className="text-5xl" />
            <a href="https://www.google.com/maps/place/Norra+Strandv%C3%A4gen+23,+574+50+Eken%C3%A4ssj%C3%B6n/@57.4889126,15.0168711,17z/data=!3m1!4b1!4m6!3m5!1s0x4659e2ba9e8b7539:0xd015f733973e7f66!8m2!3d57.4889097!4d15.019446!16s%2Fg%2F11c16_l9d0?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D">
              <p>
                Norra Strandvägen 23, <br /> 57450 Ekenässjön, Sverige
              </p>
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            <MdEmail className="text-5xl "/>
            <a href="mailto:isak.gunnardo@ardodev.se">
                <p className="text-xl">isak.gunnardo@ardodev.se</p>
            </a>
            
          </div>
        </div>

        {/* RIGHT CONTAINER WITH FORM*/}
        <div className="w-full  0 p-3">
          <form id="contactForm" className="" onSubmit={handleSubmit}>
            {/* NAME AND EMAIL WRAPPER  */}
            <div className="flex flex-col gap-2">
              {/* NAME INPUT  */}
              <div className=" flex gap-2 ">
                <div className="w-full">
                  {/* <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black opacity-80"
                  >
                    Name
                  </label> */}
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
                {/* EMAIL INPUT  */}
                <div className="w-full">
                  {/* <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black opacity-80 "
                  >
                    Email
                  </label> */}
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
              </div>
              {/* MESSAGE INPUT  */}
              <div className="w-full h-[300px]">
                {/* <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black opacity-80"
                >
                  Message
                </label> */}
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full h-full  p-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white text-gray-800 "
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            {/* SEND BUTTON  */}
            <div>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
