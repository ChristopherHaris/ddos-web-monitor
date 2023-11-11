"use client";

import * as React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "@styled-icons/evaicons-solid/Menu";
import { Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";

const components = [
  {
    title: "Aksi Sedekah Sampah",
    href: "/landing/program/aksi-sedekah-sampah",
  },
  {
    title: "Workshop",
    href: "/landing/program/workshop",
  },
  {
    title: "Research",
    href: "/landing/program/research",
  },
  {
    title: "SELINGKUH (Sekolah Lingkungan Hidup)",
    href: "/landing/program/ddorocare-goes-to-school",
  },
  {
    title: "Community Development",
    href: "/landing/program/community-development",
  },
  {
    title: "Diskusi Ngomongin Sampah",
    href: "/landing/program/diskusi-ngomongin-sampah",
  },
];

const menu = [
  {
    title: "Home",
    href: "/landing",
  },
  {
    title: "About",
    href: "/landing/about",
  },
  {
    title: "Program",
    href: "#",
  },
  {
    title: "News & Updates",
    href: "/landing/news-updates",
  },
  {
    title: "Donate",
    href: "/landing/donate",
  },
];

function Topbar() {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className="p-4 flex justify-between px-5 py-4 md:py-6 border-t-4 border-t-blue-500 border-b-2 border-b-gray-100 relative">
      {isSmallScreen ? (
        <>
          <div className="flex items-start">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="rounded">
                  <Menu className="h-6 w-6 md:h-8 md:w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col w-full gap-3 sm:p-4">
                  {menu.map((menuItem) => (
                    <div key={menuItem.title}>
                      {menuItem.href && (
                        <Suspense
                          fallback={
                            <div className="flex justify-center items-center h-screen">
                              <BarLoader
                                color={"#000000"}
                                loading={true}
                                height={4}
                              />
                            </div>
                          }
                        >
                          <SheetClose asChild>
                            <Link
                              href={menuItem.href}
                              className="block px-2 py-1 text-base sm:text-lg"
                            >
                              {menuItem.title}
                              {menuItem.title === "Program" && (
                                <div className="flex flex-col gap-3 p-4 bg-white">
                                  {components.map((component) => (
                                    <SheetClose key={component.title} asChild>
                                      <Link
                                        href={component.href}
                                        className="block px-2 py-1 text-sm sm:text-base"
                                      >
                                        {component.title}
                                      </Link>
                                    </SheetClose>
                                  ))}
                                </div>
                              )}
                            </Link>
                          </SheetClose>
                        </Suspense>
                      )}
                    </div>
                  ))}
                </div>
                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-end">
            <Link href="/landing" passHref>
              <Image
                className="pr-5 md:pr-10"
                src="/assets/logo.png"
                width={200}
                height={113}
                alt="Ddorocare"
              />
            </Link>
          </div>
        </>
      ) : (
        // Render the full navigation menu for larger screens
        <>
          <Link href="/landing" passHref>
            <Image
              className="pl-10"
              src="/assets/logo.png"
              width={200}
              height={113}
              alt="Ddorocare"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/landing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/landing/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Program</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/landing/news-updates" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    News & Updates
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/landing/donate" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Donate
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </>
      )}
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Topbar;
