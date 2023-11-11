"use client";

import { Inter } from "next/font/google";
// import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { MainNav } from "@/components/dashboard/main-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children }) {
  const router = useRouter();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   const id = sessionStorage.getItem("userId");

  //   if (!token || !id) {
  //     router.push("/authentication/login");
  //   }
  // }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
      {/* <Toaster /> */}
    </html>
  );
}
