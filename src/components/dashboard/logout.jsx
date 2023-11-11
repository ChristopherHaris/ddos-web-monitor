"use client";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";

import { Icons } from "@/components/ui/icons";

import React from "react";

import axios from "axios";

import { useToast } from "@/components/ui/use-toast";

import { useRouter } from "next/navigation";

export default function Logout() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const isClient = typeof window !== "undefined";

  async function executeLogout() {
    setIsLoading(true);
    if (isClient) {
      const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };

      try {
        await axios.post(`${API_URI}/api/auth/logout`, {}, { headers });
        toast({
          description: "Logged out",
        });
        console.log("logout success");
      } catch (error) {
        console.error(error);
      }

      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("token");

      router.push("/authentication/login");
      setIsLoading(false);
    }
  }

  return (
    <DropdownMenuItem onClick={() => executeLogout()}>
      {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />} Log
      out
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
}
