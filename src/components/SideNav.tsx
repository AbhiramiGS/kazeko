"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  Building2,
  Component,
  DollarSignIcon,
  Gem,
  HandHeart,
  HelpCircle,
  Home,
  LifeBuoy,
  Package,
  Package2,
  Puzzle,
  ReceiptIndianRupee,
  RectangleHorizontal,
  Settings,
  Shapes,
  ShoppingBasket,
  ShoppingCart,
  UserPlus,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SideNav = () => {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex w-9  flex-col items-center justify-center gap-2 rounded-full bg-primary pb-2 text-lg font-semibold text-primary-foreground md:w-8 md:text-base"
          >
            <Image
              src="/images/logobg-modified.png"
              alt="Logo"
              width={40}
              height={40}
              className="mx-2 rounded-full border border-primary "
            />
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">BCloudOne Vendor</span>
          </Link>

          {/* Dashboard */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/dashboard"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/dashboard"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>

          {/* Orders */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/orders"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/orders"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>

          {/* Products */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/products"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/products"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>

          {/* Customers */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/customers"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/customers"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>

          {/* Categories */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/categories"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/categories"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Component className="h-5 w-5" />
                <span className="sr-only">Categories</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Categories</TooltipContent>
          </Tooltip>

          {/* Collections */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/collections"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/collections"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Shapes className="h-5 w-5" />
                <span className="sr-only">Collections</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Collections</TooltipContent>
          </Tooltip>

          {/* Vendors */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/vendors"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/vendors"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Building2 className="h-5 w-5" />
                <span className="sr-only">Vendors</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Vendors</TooltipContent>
          </Tooltip>

          {/* Employees */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/employees"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/employees"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <UserPlus className="h-5 w-5" />
                <span className="sr-only">Employees</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Employees</TooltipContent>
          </Tooltip>

          {/* Schemes */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/schemes"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/schemes"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <ReceiptIndianRupee className="h-5 w-5" />
                <span className="sr-only">Schemes</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Schemes</TooltipContent>
          </Tooltip>

          {/* Make To Order */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/make-to-order"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/make-to-order"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Gem className="h-5 w-5" />
                <span className="sr-only">Make To Order</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Make To Order</TooltipContent>
          </Tooltip>

          {/* Other options */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                      pathname in
                        [
                          "/admin/referral",
                          "/admin/banners",
                          "/admin/policies",
                          "/admin/faq",
                          "/admin/coupons",
                          "/admin/sets",
                          "/admin/careers",
                        ]
                        ? "bg-accent text-accent-foreground"
                        : "",
                    )}
                  >
                    <Puzzle className="h-5 w-5" />
                    <span className="sr-only">Other</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">Other</TooltipContent>
              </Tooltip>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuGroup>
                <Link
                  href="/admin/policies"
                  className="flex w-full cursor-pointer"
                >
                  <DropdownMenuItem className="flex w-full">
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Policies</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/admin/faq" className="flex w-full cursor-pointer">
                  <DropdownMenuItem className="flex w-full">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>FAQs</span>
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="/admin/coupons"
                  className="flex w-full cursor-pointer"
                >
                  <DropdownMenuItem className="flex w-full">
                    <DollarSignIcon className="mr-2 h-4 w-4" />
                    <span>Coupons</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/admin/sets" className="flex w-full cursor-pointer">
                  <DropdownMenuItem className="flex w-full">
                    <ShoppingBasket className="mr-2 h-4 w-4" />
                    <span>Sets</span>
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="/admin/careers"
                  className="flex w-full cursor-pointer"
                >
                  <DropdownMenuItem className="flex w-full">
                    <BriefcaseBusiness className="mr-2 h-4 w-4" />
                    <span>Careers</span>
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="/admin/referrals"
                  className="flex w-full cursor-pointer"
                >
                  <DropdownMenuItem className="flex w-full">
                    <HandHeart className="mr-2 h-4 w-4" />
                    <span>Referrals</span>
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="/admin/billboards"
                  className="flex w-full cursor-pointer"
                >
                  <DropdownMenuItem className="flex w-full">
                    <RectangleHorizontal className="mr-2 h-4 w-4" />
                    <span>Banners</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/admin/settings"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/admin/settings"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default SideNav;
