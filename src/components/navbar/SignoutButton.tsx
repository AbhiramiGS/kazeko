"use client";

import React from "react";
import { signOut } from "next-auth/react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const SignoutButton = () => {
  return (
    <DropdownMenuItem
      onClick={async () => {
        await signOut({
          callbackUrl: "/login",
        });
      }}
    >
      Logout
    </DropdownMenuItem>
  );
};

export default SignoutButton;
