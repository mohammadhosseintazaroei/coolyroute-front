import { Search } from "react-feather";

const HeaderSearch = () => {
  return (
    <div className="md:hidden flex flex-row justify-center p-3 rounded-md gap-[10px] min-w-[200px] min-h-[40px] bg-primary-lighter items-center z-50">
      <Search/>
      <input
        className="outline-none border-none bg-transparent"
        placeholder="جست و جو در رویداد‌ ..."
      />
    </div>
  );
};
export default HeaderSearch;
