import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import { Suspense } from "react";
import ProgressBarProvider from "@/components/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <Suspense>
            <SearchBox />
            <ProgressBarProvider>{children}</ProgressBarProvider>
          </Suspense>
          <Results />
          {children}
        </Providers>
      </body>
    </html>
  );
}
