/* eslint-disable */
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }:{active:boolean ,selectTab:()=>{}, children:any}) => {
  const buttonClasses = active ? "font-bold" : "text-black";

  return (
    <button onClick={selectTab}>
      <p className={`font-semibold text-center ${buttonClasses}`}>
        {children}
      </p>
     {active && <div className="bg-black h-[2px] "/>}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;