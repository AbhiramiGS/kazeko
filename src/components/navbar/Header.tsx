import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { getServerAuthSession } from "@/server/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Route from "@/components/navbar/Route";
import SignoutButton from "@/components/navbar/SignoutButton";

const Header = async () => {
  const session = await getServerAuthSession();
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <SheetClose asChild>
              <Link
                href="/"
                className="group flex h-10 w-fit items-center justify-center gap-2 rounded-full bg-primary pr-4 text-lg font-semibold text-primary-foreground md:text-base"
              >
                <Image
                  src="/images/logobg-modified.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full border border-primary"
                />
                <p>Vendor</p>
                <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">BCloudOne Vendor</span>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/orders"
                className="flex items-center gap-4 px-2.5 text-foreground"
              >
                <ShoppingCart className="h-5 w-5" />
                Orders
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/products"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Package className="h-5 w-5" />
                Products
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/customers"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <Users2 className="h-5 w-5" />
                Customers
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/settings"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
              >
                <LineChart className="h-5 w-5" />
                Settings
              </Link>
            </SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
      <Route />
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="" />
              <AvatarFallback>
                {session ? session.user.name?.slice(0, 1) : null}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <div className="px-2">
            <p className="text-xs text-muted-foreground">
              {session ? session.user.name : null}
            </p>
            <p className="text-xs text-muted-foreground">
              {session ? session.user.email : null}
            </p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"/settings"}>Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/support"}>Support</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <SignoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
