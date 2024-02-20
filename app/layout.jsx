import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Motion-U Club Official Website",
  description: "This is Motion-U Club Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/motionu.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
