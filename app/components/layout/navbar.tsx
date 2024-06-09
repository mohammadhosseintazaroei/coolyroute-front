import Link from "next/link";
import { User } from "react-feather";
import HeaderSearch from "./header-search.component";
import HeaderMenu from "./header-menu.compnent";
import HeaderAccount from "./header-account.compnent";
interface Props {}

// eslint-disable-next-line react-hooks/rules-of-hooks
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="py-6 px-4 flex justify-between items-center">
        <HeaderSearch />
        <HeaderMenu />
        <HeaderAccount />
       
      </nav>
    </>
  );
};

export default Navbar;
