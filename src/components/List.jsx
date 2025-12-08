import { deleteExpense } from "../api/expenses";
import AnimateElement from "./helpers/AnimateElement";
import ExpenseBox from "./helpers/ExpenseBox";

function List({ expenses, isLoading, fetchData }) {
  const handleDelete = async (id) => {
    await deleteExpense(id);
    await fetchData();
  }

  if (isLoading)
    return (
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-8 border-transparent border-t-cyan-800 border-l-cyan-800 rounded-full animate-spin duration-75"></div>
        Loading...
      </div>
    );
  return (
    <div className="w-fullmt-8">
      <ul className="w-full space-y-4 flex justify-center flex-col">
        {expenses && expenses.length > 0 ? (
          expenses.map((expense) => (
            <AnimateElement>
              <li key={expense._id}>
                <ExpenseBox expense={expense} onDelete={()=>handleDelete(expense._id)} />
              </li>
            </AnimateElement>
          ))
        ) : (
          <li className="w-full text-center text-gray-300 text-lg font-semibold">
            No expenses found.
          </li>
        )}
      </ul>
    </div>
  );
}

export default List;
