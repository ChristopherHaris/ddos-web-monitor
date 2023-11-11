"use client";
// import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { MainNav } from "@/components/dashboard/main-nav";
import { UserNav } from "@/components/dashboard/user-nav";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   const id = sessionStorage.getItem("userId");

  //   if (!token || !id) {
  //     router.push("/authentication/login");
  //   }
  // }, []);

  return (
    <>
      <div className="flex-col flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
