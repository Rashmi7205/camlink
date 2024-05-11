import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamVideoProvider>
    <main className="relative">
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <section className="min-h-screen flrx flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
        <div className="w-full">{children}</div>
        </section>
      </div>
      footer
  </main>
    </StreamVideoProvider>
  );
};

export default RootLayout;
