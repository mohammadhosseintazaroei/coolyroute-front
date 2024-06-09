"use client";
import Link from "next/link";
import { MouseEvent, MouseEventHandler, useState } from "react";
import { User } from "react-feather";
import { tv } from "tailwind-variants";

const HeaderAccount = () => {
  const [openUserAccountTab, setOpenUserAccountTab] = useState(false);
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
      userAccountButton:
        "rounded-full bg-primary-light size-12 flex justify-center items-center relative",
      userAccountTab:
        "w-36 absolute top-full left-0 bg-primary-light rounded-xl p-4 mt-3 flex gap-5 transition duration-200",
    },
  });
  const { userAccountButton, userAccountTab } = headerMenu();
  return (
    <button
      className={userAccountButton()}
      onClick={handleToggleAccountTab}
      onBlur={handleCloseAccountTab}
    >
      <User size={30} />
      <div
        className={`${userAccountTab()} ${
          openUserAccountTab ? "opacity-100 scale-100 " : "opacity-0 scale-50 "
        }`}
        onClick={handleOpenAccountTab}
      >
        <ul>
          <li>
            <Link href="login">ورود</Link>
          </li>
          <li>
            <Link href="register">ثبت نام</Link>
          </li>
        </ul>
      </div>
    </button>
  );
};

export default HeaderAccount;
