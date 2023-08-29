import { AnimatePresence, motion } from "framer-motion";
import type { MotionOutletWrapperProps } from "./types";
import { useLocation } from "@remix-run/react";

const MotionOutletWrapper = ({
  children,
  ...rest
}: MotionOutletWrapperProps) => {
  return (
    <AnimatePresence initial={false} mode={"popLayout"}>
      <motion.div
        className="relativ h-full w-full bg-cyan-600 flex flex-row"
        key={useLocation().pathname}
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: "0", opacity: 1, transition: { delay: 0.1 } }}
        exit={{ x: "50%", opacity: 0, transition: { delay: 0.1 } }}
        {...rest}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionOutletWrapper;
