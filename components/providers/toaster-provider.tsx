"use client";

import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";
const TOAST_LIMIT = 3;

const ToasterProvider = () => {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) removal without animation
  }, [toasts]);

  return <Toaster position="bottom-left" toastOptions={{}} />;
};

export default ToasterProvider;
