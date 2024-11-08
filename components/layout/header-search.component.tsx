"use client";
import React, { useState } from "react";
import { Search } from "react-feather";
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "../global/modal.component";
const HeaderSearch = () => {
  const [openModal, setOpenModal] = useState(false);
  const { lg, md, sm } = useMediaQuery({ query: 5454 });
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div
        className="relative h-full flex justify-start items-center w-10 sm:w-14 max-md:hidden z-50"
        onClick={handleOpenModal}
      >
        <input
          id="search"
          autoComplete="off"
          className="bg-transparent border-2 border-primary text-sm  outline-none size-10 rounded-xl sm:size-14 sm:rounded-3xl flex justify-center items-center transition-width duration-200 lg:focus:w-[200px] sm:pr-10 sm:pl-4 placeholder:opacity-0 lg:focus:placeholder:opacity-100  lg:focus:pr-[50px]"
          placeholder="جستوجو در رویدادها ..."
        />

        <label
          htmlFor="search"
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
        >
          <Search className="size-6 " />
        </label>
      </div>
      {!lg && (
        <Modal
          component={<div>fasdfsdfdasfsdfasdfdsfds</div>}
          open={openModal}
          handleClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default HeaderSearch;
