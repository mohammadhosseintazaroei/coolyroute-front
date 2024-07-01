import HeaderMenu from "./header-menu.compnent";
import HeaderSearch from "./header-search.component";
interface Props {}

// eslint-disable-next-line react-hooks/rules-of-hooks
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="py-6 px-4 flex justify-between items-center">
        <HeaderSearch />
        <HeaderMenu />
      </nav>
    </>
  );
};

export default Navbar;
