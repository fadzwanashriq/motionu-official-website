import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Motion-U Club Official Website",
  description: "This is Motion-U Club Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden relativ`}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}