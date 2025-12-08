import { MdDelete } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

function ExpenseBox({ expense, onDelete }) {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center bg-white shadow rounded-lg p-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">{expense.title}</h3>
          <p className="text-gray-600">{expense.description}</p>
          <p className="text-gray-500 text-sm">
            {new Date(expense.date).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="text-cyan-800 font-bold text-lg">
              {expense.amount}
            </span>
            <GiTakeMyMoney className="text-cyan-800 text-2xl md:text-3xl"/>
          </div>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700"
          >
            <MdDelete className="text-2xl md:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpenseBox;
