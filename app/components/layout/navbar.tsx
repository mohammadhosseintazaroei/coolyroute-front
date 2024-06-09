import Link from "next/link";
import { User } from "react-feather";
import HeaderSearch from "./header-search.component";
import HeaderMenu from "./header-menu.compnent";
interface Props {}

// eslint-disable-next-line react-hooks/rules-of-hooks
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="py-6 px-4 flex justify-between items-center">
        <HeaderSearch  />
        <HeaderMenu />
        <button className="rounded-full bg-primary-light size-12 flex justify-center items-center">
          <User size={30} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
