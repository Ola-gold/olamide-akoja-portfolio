import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Olamide Akoja — Product Manager & UX Researcher",
  description:
    "Olamide Akoja cultivates intentional digital products and automated systems. PM, UX Researcher, and Co-Founder at Parallel Lab, based in Lagos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Loader />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <Progress />
        <Cursor />
        {children}
        <footer className="foot-bar">
          <span>OLAMIDE AKOJA</span>
          <span>CULTIVATED SYSTEMS © 2026</span>
        </footer>
      </body>
    </html>
  );
}
