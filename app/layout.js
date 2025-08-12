import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import { ThemeProvider } from "../components/theme-provider";
import Footer from "../components/Footer";
import { BlogsProvider } from "../components/BlogsContext";
import { Toaster } from 'sonner';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sakshi's Blog",
  description: "This blog isn’t about tutorials, it’s about experiences. I write about the bugs I debug, the tools I build, the frameworks I experiment with, and the concepts I fail at first and then finally understand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-padding-20">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BlogsProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="min-h-screen bg-[#B7B1F2] text-foreground dark:bg-gradient-to-b dark:from-[#181A2A] dark:via-[#1a1833] dark:to-[#232946]">
              {children}
              <Toaster richColors position="top-right" />
            </div>
            <Footer />
          </ThemeProvider>
        </BlogsProvider>
      </body>
    </html>
  );
}
