import { ReactNode } from "react";

import { ChevronRight } from "react-feather";
import { tv } from "tailwind-variants";

const loginStyles = tv({
  slots: {
    formWrapper:
      "flex flex-col rounded-lg bg-card mx-auto px-6 pt-8 pb-11 w-[630px] gap-10",
    formTitle: "text-2xl font-medium ",
    backButton:
      "bg-primary-lighte rounded-2xl size-12 flex justify-center items-center",
    backIcon: "size-5",
    formHeader: "flex flex-col gap-3",
    formTitleWrapper: "flex gap-5 items-center",
    formInputsWrapper: "flex flex-col  gap-7",
  },
});
const styles = loginStyles();

interface Props {
  title: string;
  description: string;
  disableBackButton?: boolean;
  children: ReactNode;
}
const LoginBoxLayout = (props: Props) => {
  return (
    <div className={styles.formWrapper()}>
      <div className={styles.formHeader()}>
        <div className={styles.formTitleWrapper()}>
          {!props.disableBackButton && (
            <button className={styles.backButton()}>
              <ChevronRight className="size-7" />
            </button>
          )}

          <h1 className={styles.formTitle()}>{props.title}</h1>
        </div>
        <span>{props.description}</span>
      </div>
      {props.children}
    </div>
  );
};

export default LoginBoxLayout;
