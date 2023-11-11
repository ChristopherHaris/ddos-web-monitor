"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/use-toast";

import axios, { isCancel, AxiosError } from "axios";

const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const { toast } = useToast();
  const router = useRouter();
  const isClient = typeof window !== "undefined";

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    console.log(API_URI);

    if (isClient) {
      try {
        axios
          .post(`${API_URI}/api/auth/login`, {
            username: username,
            password: password,
          })
          .then(function (response) {
            console.log(response);
            const userId = response.data.user.id;
            const token = response.data.user.token;

            // save userId and token to session storage
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("token", token);

            // console.log("from session userId:", sessionStorage.getItem("userId"));
            // console.log("from session token:", sessionStorage.getItem("token"));

            toast({
              description: "Logged in",
            });
            setIsLoading(false);

            // redirect to audit page
            router.push("/audit");
          });
      } catch (error) {
        console.log(error);
        toast({
          description: error.response.data.message,
        });
        setIsLoading(false);
      }
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username"
              type="string"
              autoCapitalize="none"
              // autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required={true}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Email
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              disabled={isLoading}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required={true}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
