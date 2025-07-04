import type { Metadata } from "next";

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
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
