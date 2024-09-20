"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";

const NavbarButton = (): React.ReactElement => {
  const { isLoaded, isSignedIn } = useUser();
  if (!isLoaded) return <div />;

  return isSignedIn ? (
    <div className="flex items-center space-x-4">
      <Button variant={"link"} className="text-white">
        <a href="/dashboard">Create Diary</a>
      </Button>
      <Button variant={"link"} className="text-white">
        <a href="/dashboard/my-diary">My Diary</a>
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
