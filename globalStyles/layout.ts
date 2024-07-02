import { tv } from "tailwind-variants";

const container = tv(
  {
    base: "grid gap-4 text-white text-center leading-6 ",
    variants: {
      column: {
        col1: "grid-cols-1",
        col2: "grid-cols-2",
        col3: "grid-cols-3",
        col4: "grid-cols-4",
        col5: "grid-cols-5",
        col6: "grid-cols-6",
        col7: "grid-cols-7",
        col8: "grid-cols-8",
        col9: "grid-cols-9",
        col10: "grid-cols-10",
        col11: "grid-cols-11",
        col12: "grid-cols-12",
      },
    },
  },
  {
    responsiveVariants: ["md", "lg", "xl"],
  }
);

export { container };
