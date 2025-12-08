import React, { useEffect, useState } from "react";
import CreateExpense from "./CreateExpense";
import Amount from "./Amount";
import CreateForm from "./helpers/CreateForm";
import MonthExpense from "./MonthExpense";
import List from "./List";
import { createExpense, getExpenseCounts, getTotalAmounts } from "../api/expenses";
import { getExpensesByMonth } from "../api/expenses";
import dayjs from "dayjs";
import Error from "./Error";
import Charts from "./Charts";

function Home() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [total, setTotal] = useState(0);
  const [monthlyTotal, setMonthlyTotal] = useState(0);
  const [counts, setCounts] = useState(0);

  const fetchCounts = async () => {
    const response = await getExpenseCounts();
    setCounts(response.totalExpenses);
  };

  const fetchTotalAmounts = async ()=>{
    const response = await getTotalAmounts();
    setTotal(response.totalAmount);
  }

  const fetchExpenses = async (date) => {
    setLoading(true);
    const year = dayjs(currentMonth).year();
    const month = dayjs(currentMonth).month() + 1; // month is 0-indexed in dayjs
    try {
      const data = await getExpensesByMonth(month, year);
      setExpenses(data);
      const totalAmount = data.reduce(
        (acc, expense) => acc + Number(expense.amount),
        0
      );
      setMonthlyTotal(totalAmount);
      fetchCounts();
      fetchTotalAmounts();
    } catch (error) {
      setError("Xarajatlarni olishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (expenseData) => {
    try {
      await createExpense(expenseData);
      await fetchExpenses();
      // setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setIsActive(false);
    } catch (error) {
      console.log("Error adding expense:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [currentMonth]);

  return (
    <div className="max-w-2xl mx-auto px-4">
      {
        error && <Error>{error}</Error>
      }
      <h1 className="text-xl md:text-3xl font-bold text-center my-6 bg-white w-full p-4 rounded">
        💲 Expense Tracker_v2
      </h1>

      {/* Header */}
      <div className="bg-white shadow rounded-lg space-x-2 px-4 py-6 flex items-center justify-between">
        <Amount counts={counts} total={total} monthlyTotal={monthlyTotal} />
        {/* Tugma — CreateExpense */}
        <CreateExpense onOpen={() => setIsActive(true)} />
      </div>

      {/* Modal (CreateForm) */}
      {isActive && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            {/* Yopish tugmasi */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setIsActive(false)}
            >
              ✖
            </button>
            <CreateForm onSave={handleAddExpense} />
          </div>
        </div>
      )}
      {/* Oy kesimi */}
      <MonthExpense
        currentMonthOuter={currentMonth}
        setCurrentMonthOuter={setCurrentMonth}
      />

      {/* Xarajatlar ro'yxati */}

      <List expenses={expenses} isLoading={loading} fetchData={fetchExpenses} />
      <Charts expenses={expenses}/>
      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8">
        &copy; {dayjs().year()} Expense Tracker. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
