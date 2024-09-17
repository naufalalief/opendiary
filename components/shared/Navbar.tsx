import { Button } from "../ui/button";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center justify-between p-4 bg-gray-800 text-white mx-auto container">
      <div className="text-2xl font-bold">Navbar</div>
      <div className="flex space-x-4">
        <NavbarButton />
      </div>
    </nav>
  );
};

export default Navbar;
