"use client";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { tv } from "tailwind-variants";

interface Props {
  component: ReactNode;
  open: boolean;
  handleClose: () => void;
}
const modalStyles = tv({
  slots: {
    wrapper:
      "w-full h-full absolute right-0 left-0 flex justify-center items-center bg-primary bg-opacity-25",
  },
});
const { wrapper } = modalStyles();
const Modal = (props: Props) => {
  const handleCloseModal = () => {
    props.handleClose();
  };

  return (
    <>
      {props.open && (
        <div className={wrapper()} onClick={handleCloseModal}>
          {props.component}
        </div>
      )}
    </>
  );
};

export default Modal;
