import React from "react";

type projectTagtype ={
    name: string;
    onClick:()=>{};
    isSelected:boolean
}

const ProjectTag = ({ name, onClick, isSelected }: projectTagtype) => {
  const buttonStyles = isSelected
    ? "text-black border-black "
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;