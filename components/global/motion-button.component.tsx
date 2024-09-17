import { motion } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import CrButton from "./cr-button.component";
// eslint-disable-next-line react/display-name
const ListElement = forwardRef((props: { children: ReactNode }, ref: any) => {
  return <CrButton ref={ref}>{props.children}</CrButton>;
});

const MotionButton = motion(ListElement);

export default MotionButton;
