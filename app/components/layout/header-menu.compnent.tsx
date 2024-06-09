"use client";

import useMediaQuery from "@/app/hooks/useMediaQuery";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
const menuItems = [
  { text: "خانه", link: "/" },
  { text: "رویداد ها", link: "/" },
  { text: "درباره ما", link: "/" },
  { text: "کامیونیتی ", link: "/" },
  { text: "علاقه مندی ها", link: "/" },
];
type Props = {};

const HeaderMenu = (props: Props) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  const headerMenu = tv({
    slots: {
      hamburgerMenuButton:
        "flex flex-col justify-center items-center md:hidden z-10",
      hamburgerMenuItem:
        "bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ",
      mainMenuWrapper:
        "h-full flex flex-col md:flex-row gap-10 md:gap-14 top-0 right-0 max-md:absolute max-md:bg-primary-light max-md:w-full max-md:flex-col p-6 transition-[right] duration-300",
      menuItem:
        "text-lg sm:text-base lg:text-lg transition-[border] duration-500 hover:border-b-2-[red]",
    },
  });
  const { hamburgerMenuButton, hamburgerMenuItem, mainMenuWrapper, menuItem } =
    headerMenu();

  return (
    <>
      <button onClick={handleClick} className={hamburgerMenuButton()}>
        <span
          className={`${hamburgerMenuItem()} ${
            openMobileMenu ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`${hamburgerMenuItem()} my-0.5 ${
            openMobileMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`${hamburgerMenuItem()} ${
            openMobileMenu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div
        className={`${mainMenuWrapper()} ${
          openMobileMenu ? "right-0 " : "right-[-100%]"
        } `}
      >
        {menuItems.map((item, index) => (
          <Link href={item.link} key={index} className={menuItem()}>
            {item.text}
          </Link>
        ))}
      </div>
    </>
  );
};

export default HeaderMenu;
