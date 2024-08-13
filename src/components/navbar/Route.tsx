"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { capitalizeFirstLetter } from "@/lib/utils";

const Route = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");
  let pathCombined = "";
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          {paths.length > 0 && paths[0] !== "dashboard" ? (
            <BreadcrumbLink asChild>
              <Link href="/">Dashboard</Link>
            </BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {paths.length > 0 && <BreadcrumbSeparator />}
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          if (index > 0) {
            pathCombined += "/";
          }
          pathCombined += path;
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link href={`/${pathCombined}`}>
                      {capitalizeFirstLetter(path)}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{capitalizeFirstLetter(path)}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Route;
