import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Welcome to Kiosk",
  description:
    "An ecommerce web application used to bring official producers and student vendors together to the students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
