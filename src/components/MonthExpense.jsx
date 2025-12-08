import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import dayjs from "dayjs"; // 📦

function MonthExpense({ currentMonthOuter, setCurrentMonthOuter }) {
  
  const handleNextMonth = () => {
    return setCurrentMonthOuter(dayjs(currentMonthOuter).add(1, "month"));
  };
  const handlePrevMonth = () => {
    return setCurrentMonthOuter(dayjs(currentMonthOuter).subtract(1, "month"));
  };

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center bg-white rounded my-4 p-2 shadow">
        <button
          onClick={handlePrevMonth}
          className="text-cyan-800 p-2 text-2xl hover:bg-gray-200"
        >
          <FaAngleLeft />
        </button>
        <h2 className="text-cyan-800 text-xl font-bold">
          {dayjs(currentMonthOuter).format("MMMM YYYY")}
        </h2>
        <button
          onClick={handleNextMonth}
          className=" p-2 text-2xl hover:bg-gray-200"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default MonthExpense;
