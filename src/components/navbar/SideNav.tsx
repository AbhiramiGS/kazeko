"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Home,
  Package,
  Package2,
  Route,
  Settings,
  Shapes,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { cn } from "@/lib/utils";
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
            className="group flex h-9 w-9 flex-col items-center justify-center gap-2 rounded-full bg-primary p-2 text-lg font-semibold text-primary-foreground md:w-8 md:text-base"
          >
            <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">BCloudOne Vendor</span>
          </Link>

          {/* Dashboard */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/dashboard"
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
                href="/shipments"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/shipments"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shipments</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Shipments</TooltipContent>
          </Tooltip>

          {/* Products */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/products"
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
                href="/drivers"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/drivers"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Drivers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Drivers</TooltipContent>
          </Tooltip>

          {/* Categories */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/routes"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/routes"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Route className="h-5 w-5" />
                <span className="sr-only">Routes</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Routes</TooltipContent>
          </Tooltip>

          {/* Collections */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/warehouses"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/warehouses"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Shapes className="h-5 w-5" />
                <span className="sr-only">Warehouses</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Warehouses</TooltipContent>
          </Tooltip>

          {/* Vendors */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/shipyards"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
                  pathname === "/shipyards"
                    ? "bg-accent text-accent-foreground"
                    : "",
                )}
              >
                <Building2 className="h-5 w-5" />
                <span className="sr-only">Ship Yards</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Ship Yards</TooltipContent>
          </Tooltip>
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
