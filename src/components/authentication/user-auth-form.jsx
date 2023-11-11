"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import axios, { isCancel, AxiosError } from "axios";

import { useToast } from "@/components/ui/use-toast";

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [fullname, setFullname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [secondPassword, setSecondPassword] = React.useState("");
  const { toast } = useToast();
  const router = useRouter();

  const API_URI = process.env.NEXT_PUBLIC_BACKEND_URI;

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    console.log("username", username);
    console.log("fullname", fullname);
    console.log("password", password);
    console.log("secondPassword", secondPassword);

    axios
      .post(`${API_URI}/api/auth/register`, {
        username: username,
        full_name: fullname,
        password: password,
        password_check: secondPassword,
      })
      .then(function (response) {
        console.log(response);

        toast({
          description: "Register successful, please login",
        });
        setIsLoading(false);

        // redirect to login page
        router.push("/authentication/login");
      })
      .catch(function (error) {
        // console.error(error.response.data.message);
        toast({
          description: error.response.data.message,
        });
        setIsLoading(false);
      });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="fullname">
              Full name
            </Label>
            <Input
              id="fullname"
              placeholder="fullname"
              type="string"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              value={fullname}
              onChange={(event) => setFullname(event.target.value)}
              required={true}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="username"
              type="string"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required={true}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
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
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="secondPassword">
              Re-type your Password
            </Label>
            <Input
              id="secondPassword"
              placeholder="re-type your password"
              type="password"
              autoCapitalize="none"
              disabled={isLoading}
              value={secondPassword}
              onChange={(event) => setSecondPassword(event.target.value)}
              required={true}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
