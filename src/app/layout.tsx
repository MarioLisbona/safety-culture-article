import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { data } from "./data/articleData";

const inter = Inter({ subsets: ["latin"] });

const title = data.pageProps.items.seo.seoTitle;
const description = data.pageProps.items.seo.seoDescription;
const keywords = data.pageProps.items.seo.seoKeywords;

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
