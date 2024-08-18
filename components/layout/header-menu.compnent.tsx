"use client";

import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "next/link";
import React, { MouseEvent, useContext, useEffect, useState } from "react";
import { LogOut, User } from "react-feather";
import { tv } from "tailwind-variants";
import { GeneralDataContext } from "../providers/general-data-provider";
import { TransitionLink } from "../global/TransitionLink.component";
import { useRouter } from "next/navigation";
const menuItems = [
  { text: "خانه", link: "/" },
  { text: "رویداد ها", link: "/events" },
  { text: "درباره ما", link: "/about" },
  { text: "کامیونیتی ", link: "/community" },
  { text: "علاقه مندی ها", classes: "text-error-light", link: "/favorits" },
];
type Props = {};

const HeaderMenu = (props: Props) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openUserAccountTab, setOpenUserAccountTab] = useState(false);
  const { deleteToken, isLoggedIn } = useContext(GeneralDataContext);
  const router = useRouter();
  const handleClick = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const handleToggleAccountTab = () => {
    setOpenUserAccountTab(!openUserAccountTab);
  };

  const handleOpenAccountTab = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpenUserAccountTab(true);
  };
  const handleCloseAccountTab = () => {
    setOpenUserAccountTab(false);
  };

  const headerMenu = tv({
    slots: {
      hamburgerMenuButton:
        "flex flex-col justify-center items-center md:hidden z-[111]",
      hamburgerMenuItem:
        "bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ",
      mainMenuWrapper:
        "h-full flex flex-col md:flex-row gap-10 md:gap-14 top-0 right-0 max-md:absolute max-md:bg-primary-light max-md:w-full max-md:flex-col p-6 transition-[right] duration-300 z-[110]",
      menuItem:
        "text-lg sm:text-base lg:text-lg transition-[border] duration-500 hover:border-b-2-[red]",
      userAccountButton:
        "transition duration-200 rounded-full size-12 max-md:size-10 flex justify-center items-center relative  hover:shadow-button bg-primary hover:bg-primary-light",
      userAccountTab:
        "transition-[background] duration-200 w-fit absolute top-full left-0 rounded-xl p-4 mt-3 flex flex-col items-start gap-2 transition duration-200",
      accountTabItem: "flex gap-3 whitespace-pre items-center max-md:text-sm",
      accountTabItemIcon: "max-md:size-5 ",
      userIcon: "size-7 max-md:size-6",
      registerLoginButton:
        "flex items-center h-10 md:h-12 text-md md:text-lg max-md:h-10 px-6 bg-primary-light rounded-xl text-md font-normal",
    },
  });

  const styles = headerMenu();

  return (
    <>
      <button onClick={handleClick} className={styles.hamburgerMenuButton()}>
        <span
          className={`${styles.hamburgerMenuItem()} ${
            openMobileMenu ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`${styles.hamburgerMenuItem()} my-0.5 ${
            openMobileMenu ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`${styles.hamburgerMenuItem()} ${
            openMobileMenu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <nav
        className={`${styles.mainMenuWrapper()} ${
          openMobileMenu ? "right-0 " : "right-[-100%]"
        } `}
      >
        {menuItems.map((item, index) => (
          <TransitionLink
            href={item.link}
            key={index}
            className={`${styles.menuItem()} ${item.classes}`}
          >
            {item.text}
          </TransitionLink>
        ))}
      </nav>
      {console.log(isLoggedIn)}
      {isLoggedIn ? (
        <button
          className={` ${
            openMobileMenu ? "bg-primary" : "bg-primary-light"
          } ${styles.userAccountButton()}`}
          onClick={handleToggleAccountTab}
          // onBlur={handleCloseAccountTab}
        >
          <User className={styles.userIcon()} />
          <div
            className={`${styles.userAccountTab()} ${
              openUserAccountTab
                ? "opacity-100 scale-100 "
                : "opacity-0 scale-50 "
            } ${openMobileMenu ? "bg-primary" : "bg-primary-light"}`}
            onClick={handleOpenAccountTab}
          >
            <Link href="profile" className={styles.accountTabItem()}>
              <User className={styles.accountTabItemIcon()} />
              حساب کاربری
            </Link>
            <div onClick={deleteToken} className={styles.accountTabItem()}>
              <LogOut className={styles.accountTabItemIcon()} />
              خروج
            </div>
          </div>
        </button>
      ) : (
        <Link className={styles.registerLoginButton()} href="/login">
          ورود / ثبت‌نام
        </Link>
      )}
    </>
  );
};

export default HeaderMenu;
