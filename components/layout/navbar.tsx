import HeaderMenu from "./header-menu.compnent";
import HeaderSearch from "./header-search.component";
interface Props {}

// eslint-disable-next-line react-hooks/rules-of-hooks
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="fixed container top-0 left-0 right-0 py-6 px-4 flex justify-between items-center mx-auto z-50">
        <HeaderSearch />
        <HeaderMenu />
      </nav>
    </>
  );
};

export default Navbar;
