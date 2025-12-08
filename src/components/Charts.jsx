import { useState } from "react";
// import MonthlyBarChart from "./helpers/BarCharts";
import CategoryPieChart from "./helpers/PieCharts";

function Charts({ expenses }) {
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);

  // useEffect(() => {
  //   if (!expenses || expenses.length === 0) return;

  //   // --- Pie Chart data (by category) ---
  //   const grouped = expenses.reduce((acc, item) => {
  //     const category = item.category || "Unknown";
  //     const amount = Number(item.amount) || 0;

  //     acc[category] = (acc[category] || 0) + amount;
  //     return acc;
  //   }, {});

  //   const pie = Object.entries(grouped).map(([category, amount]) => ({
  //     category,
  //     amount,
  //   }));
  //   setPieData(pie);

  //   // --- Bar Chart data (monthly totals) ---
  //   const byMonth = expenses.reduce((acc, item) => {
  //     const month = new Date(item.date).toLocaleString("en-US", {
  //       month: "short",
  //     });
  //     const amount = Number(item.amount) || 0;

  //     acc[month] = (acc[month] || 0) + amount;
  //     return acc;
  //   }, {});

  //   const bar = Object.entries(byMonth).map(([month, total]) => ({
  //     month,
  //     total,
  //   }));
  //   setBarData(bar);

  // }, [expenses]);

  // if (!pieData.length && !barData.length) {
  //   return <div>Loading charts...</div>;
  // }

  return (
    <div className="w-full space-y-8">
      {/* <MonthlyBarChart data={expenses} /> */}
      <CategoryPieChart data={expenses} />
    </div>
  );
}

export default Charts;
