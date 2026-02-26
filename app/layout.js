import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alvan Portfolio",
  description: "Ini adalah portfolio milik Alvan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[#f8f9fa] text-[#212529] relative overflow-hidden flex flex-col font-sans">
          {/* Background Blobs (Soft Grayscale) */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse [animation-delay:2s]"></div>
            <div className="absolute -bottom-32 left-40 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse [animation-delay:4s]"></div>
          </div>

          {/* Navbar */}
          <nav className="flex items-center justify-center gap-4 sm:gap-8 bg-white border border-gray-200 shadow-sm my-6 mx-auto px-8 py-4 rounded-full w-fit z-10">
            <Link href="/">
              <div className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                Home
              </div>
            </Link>
            <Link href="/projects">
              <div className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                Projects
              </div>
            </Link>
            <Link href="/about">
              <div className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                About
              </div>
            </Link>
            <Link href="/contact">
              <div className="px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
                Contact
              </div>
            </Link>
          </nav>

          {/* Main Content Area */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col md:flex-row gap-6 flex-1 mb-12 z-10">
            {/* Sidebar (Identitas) */}
            <aside className="w-full md:w-1/4 bg-white border border-gray-200 rounded-3xl p-6 shadow-sm h-fit flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden relative mb-4 border-4 border-gray-50 shadow-inner">
                <Image src="/alvn_foto.jpg" alt="Alvanza" fill className="object-cover" />
              </div>
              <h2 className="text-xl font-bold mb-1 text-[#212529]">Alvanza S. Y.</h2>
              <p className="text-sm text-gray-500 mb-6">Full-Stack Web Developer</p>
              
              <div className="flex gap-3 justify-center w-full border-t border-gray-100 pt-6">
                <a href="https://github.com/alvnz11" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-50 text-gray-600 rounded-full hover:bg-[#212529] hover:text-white transition-all shadow-sm">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/alvnzzz_" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-50 text-gray-600 rounded-full hover:bg-[#212529] hover:text-white transition-all shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/alvnz/" target="_blank" rel="noreferrer" className="p-2.5 bg-gray-50 text-gray-600 rounded-full hover:bg-[#212529] hover:text-white transition-all shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </aside>

            {/* Page Content */}
            <main className="w-full md:w-3/4 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm min-h-[500px]">
              {children}
            </main>
          </div>

          {/* Footer */}
          <footer className="bg-[#212529] text-[#f8f9fa] py-6 mt-auto z-10">
            <div className="container mx-auto px-4 text-center text-sm">
              © {new Date().getFullYear()} Alvanza Saputra Yudha. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
