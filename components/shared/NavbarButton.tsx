"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";

const NavbarButton = () => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return null;

  return isSignedIn ? (
    <div className="flex items-center space-x-4">
      <Button variant={"link"} className="text-white">
        <a href="/create-diary">Dashboard</a>
      </Button>
      <Button variant={"link"} className="text-white">
        <a href="/my-diary">My Diary</a>
      </Button>
      <UserButton />
    </div>
  ) : (
    <a href="/sign-in" className="hover:underline">
      <Button variant={"default"}>Sign In</Button>
    </a>
  );
};

export default NavbarButton;
