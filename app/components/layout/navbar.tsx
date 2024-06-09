import Link from "next/link";
import { User } from "react-feather";
import HeaderSearch from "./search";
interface Props {}

const menuItems = [
  { text: "خانه", link: "/" },
  { text: "رویداد ها", link: "/" },
  { text: "درباره ما", link: "/" },
  { text: "کامیونیتی ", link: "/" },
  { text: "علاقه مندی ها", link: "/" },
];
// eslint-disable-next-line react-hooks/rules-of-hooks
const Navbar = (props: Props) => {
  return (
    <>
      <nav className="py-6 px-4 flex justify-between items-center">
        <HeaderSearch />
        <div className="h-full flex flex-col sm:flex-row gap-10 md:gap-14 ">
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="text-lg sm:text-base lg:text-lg"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <button className="rounded-full bg-primary-light size-12 flex justify-center items-center">
          <User size={30} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
