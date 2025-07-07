import type { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
  title: "Minimal Landing Page - Builder.io",
  description: "A minimal landing page built with Builder.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
