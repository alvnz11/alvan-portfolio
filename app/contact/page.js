"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Instagram, MessageCircle } from "lucide-react";

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
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out relative">
      {/* Background Gradients for Depth */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
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
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-xl font-bold text-[#212529] mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Feel free to reach out if you want to collaborate, have a project in mind, or just want to say hi!
              I&apos;m open to freelance work, internship opportunities, and interesting conversations.
            </p>

            <div className="space-y-5 mt-8">
              <div className="flex items-center gap-4 text-sm text-gray-700">
                <div className="p-3 bg-white/50 border border-white/40 shadow-sm rounded-full">
                  <MapPin className="w-5 h-5 text-[#212529]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#212529]">Location</span>
                  <span className="text-gray-600">Indonesia</span>
                </div>
              </div>
              
              <a href="mailto:alvanzasaputra123734@gmail.com" className="flex items-center gap-4 text-sm text-gray-700 hover:text-[#2563EB] group transition-all">
                <div className="p-3 bg-white/50 border border-white/40 shadow-sm rounded-full group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-[#212529] group-hover:text-[#2563EB] transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#212529]">Email</span>
                  <span className="text-gray-600 group-hover:text-[#2563EB] transition-colors">alvanzasaputra123734@gmail.com</span>
                </div>
              </a>

              <a href="https://instagram.com/alvnzzz_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-700 hover:text-[#E1306C] group transition-all">
                <div className="p-3 bg-white/50 border border-white/40 shadow-sm rounded-full group-hover:bg-[#E1306C]/10 group-hover:border-[#E1306C]/30 transition-all duration-300">
                  <Instagram className="w-5 h-5 text-[#212529] group-hover:text-[#E1306C] transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#212529]">Instagram</span>
                  <span className="text-gray-600 group-hover:text-[#E1306C] transition-colors">@alvnzzz_</span>
                </div>
              </a>

              <a href="https://wa.me/62895360215603" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sm text-gray-700 hover:text-[#25D366] group transition-all">
                <div className="p-3 bg-white/50 border border-white/40 shadow-sm rounded-full group-hover:bg-[#25D366]/10 group-hover:border-[#25D366]/30 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 text-[#212529] group-hover:text-[#25D366] transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[#212529]">WhatsApp</span>
                  <span className="text-gray-600 group-hover:text-[#25D366] transition-colors">+62 895-3602-15603</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB]/50 transition-all shadow-sm"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB]/50 transition-all shadow-sm"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/50 bg-white/50 backdrop-blur-sm text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:border-[#2563EB]/50 transition-all shadow-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#18181B] text-white font-medium text-sm hover:bg-[#2563EB] hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
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
