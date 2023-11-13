"use client";

import "./globals.css";
import { Inter } from "next/font/google";
// import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { MainNav } from "@/components/dashboard/main-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { useEffect } from "react";
import { ModeToggle } from "@/components/theme/theme-buttom";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-col flex">
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <ModeToggle />
                  <UserNav />
                </div>
              </div>
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
      {/* <Toaster /> */}
    </html>
  );
}
