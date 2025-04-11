import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Create an account - Kiosk",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <section className="mx-auto md:h-screen max-w-screen-2xl flex md:grid md:grid-cols-2 relative">{children}</section>
    </>
  );
}
