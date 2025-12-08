import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import CreateForm from "./helpers/CreateForm";

function CreateExpense({ onOpen }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <button
        onClick={onOpen}
        className="bg-cyan-800 rounded-lg px-4  flex items-center justify-center shadow-lg text-white 
             w-12 h-12 md:w-16 md:h-16 text-2xl transition-transform duration-300 ease-in-out 
             hover:scale-110 hover:bg-cyan-700"
      >
        <HiOutlinePlus />
      </button>
    </div>
  );
}

export default CreateExpense;
