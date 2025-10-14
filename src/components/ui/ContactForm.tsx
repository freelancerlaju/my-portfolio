import React, { useState } from "react";
import { User, Mail } from "lucide-react";
import { LuMessageSquareShare } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";

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
      const response = await fetch("https://formspree.io/f/mvggvyar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || "Something went wrong. Please try again."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2 text-white"
        >
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
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
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 text-white"
        >
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
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
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2 text-white"
        >
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 text-gray-400">
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
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-600 bg-slate-700/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none transition-all duration-300"
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

      {/* Status Messages */}
      {status === "success" && (
        <p className="text-green-400 text-center mt-4 font-medium">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-center mt-4 font-medium">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
