import Header from "@/components/navbar/Header";
import SideNav from "@/components/navbar/SideNav";
import { Button } from "@/components/ui/button";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession();

  if (!session) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-muted/40">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-center text-2xl text-muted-foreground">
            You are not authorized to view this page
          </p>
          <Link href="/login">
            <Button className="mt-4 w-full">Login</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <SideNav />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <div className="px-8">
        {children}
        </div>
      </div>
    </div>
  );
}
