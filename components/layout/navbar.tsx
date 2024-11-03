"use client";

import HeaderMenu from "./header-menu.compnent";
import HeaderSearch from "./header-search.component";
import { usePathname } from "next/navigation";

interface Props {}

const Navbar = (props: Props) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav
      className={`container top-0 left-0 right-0 py-6 px-4 flex justify-between items-center mx-auto z-50 text-foreground ${
        isHomePage ? "fixed" : "sticky"
      }`}
    >
      <HeaderSearch />
      <HeaderMenu />
    </nav>
  );
};

export default Navbar;
