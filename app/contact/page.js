"use client";

import { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real scenario, you'd send this to an API
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Page title */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#212529] mb-2">
          Contact
        </h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Let&apos;s get in touch</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Contact info */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#212529] mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Feel free to reach out if you want to collaborate, have a project in mind, or just want to say hi!
              I&apos;m open to freelance work, internship opportunities, and interesting conversations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="p-2 bg-gray-200 rounded-full">
                  <MapPin className="w-4 h-4 text-[#212529]" />
                </div>
                <span>Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <div className="p-2 bg-gray-200 rounded-full">
                  <Mail className="w-4 h-4 text-[#212529]" />
                </div>
                <span>alvanza@example.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#212529] mb-6">Send a Message</h2>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-lg font-bold text-[#212529] mb-2">Message Sent!</h3>
              <p className="text-gray-600 text-sm">Thanks for reaching out. I&apos;ll get back to you soon!</p>
              <button
                className="mt-6 px-5 py-2 rounded-lg text-sm font-medium bg-[#212529] text-white hover:bg-gray-800 transition-colors"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#212529] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#212529] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#212529] focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#212529] text-white font-medium text-sm hover:bg-gray-800 transition-colors"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
