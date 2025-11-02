import React, { useState } from "react";
import { User, Mail } from "lucide-react";
import { LuMessageSquareShare } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Toast } from "./toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setStatus("submitting");
    setErrorMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      // Initialize EmailJS with public key
      emailjs.init(publicKey);

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "fa.freelancerlaju@gmail.com", // Recipient email
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset the form
      setShowToast(true); // Show toast notification
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center text-foreground/70 hover:text-primary z-10 transition-colors">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center text-foreground/70 hover:text-primary z-10 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-foreground"
          >
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 text-foreground/70 hover:text-primary z-10 transition-colors">
              <FaRegCommentDots className="w-5 h-5" />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              rows={4}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none resize-none transition-all duration-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
            status === "submitting"
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          }`}
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          {status !== "submitting" && (
            <LuMessageSquareShare className="w-5 h-5" />
          )}
        </button>

        {/* Error Message */}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-center mt-4 font-medium">
            {errorMessage}
          </p>
        )}
      </form>

      {/* Toast Notification with Backdrop */}
      {showToast && (
        <>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-40 rounded-lg" />
          <Toast
            message="Message sent successfully!"
            type="success"
            duration={3000}
            onClose={() => setShowToast(false)}
          />
        </>
      )}
    </div>
  );
}
