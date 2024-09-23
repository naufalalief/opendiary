import NavbarButton from "./NavbarButton";

const Navbar = (): React.ReactElement => {
  return (
    <nav className="h-16  bg-transparent text-primary font-bold ">
      <div className="container flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Navbar</div>
        <div className="flex space-x-4">
          <NavbarButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
