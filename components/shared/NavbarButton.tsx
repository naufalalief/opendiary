"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Loading from "@/app/loading";

const NavbarButton = (): React.ReactElement => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <Loading />;

  return isSignedIn ? (
    <div className="flex items-center space-x-4">
      <Button variant={"link"} className="text-primary font-semibold">
        <Link href="/dashboard">Dashboard</Link>
      </Button>
      <Button variant={"link"} className="text-primary font-semibold">
        <Link href="/dashboard/my-diary">My Diary</Link>
      </Button>
      <UserButton />
    </div>
  ) : (
    <a href="/sign-in" className="hover:underline">
      <Button variant={"default"}>Sign In</Button>
    </a>
    // <Loading />
  );
};

export default NavbarButton;
