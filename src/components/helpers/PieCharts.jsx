import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#ff6384",
  "#36a2eb",
];

const CategoryPieChart = ({ data }) => {
   const grouped = data.reduce((acc, item) => {
      const category = item.category || "Unknown";
      const amount = Number(item.amount) || 0;

      acc[category] = (acc[category] || 0) + amount;
      return acc;
    }, {});

    const pie = Object.entries(grouped).map(([category, amount]) => ({
      category,
      amount,
    }));
 

  return (
    <div  className="bg-white shadow p-4 rounded-lg my-6">
      <h3 className="text-lg font-semibold mb-4">
        Expense by Category
      </h3>
      {data.length !== 0 && (
        <ResponsiveContainer width="100%" height={500} className="z-50">
          <PieChart>
            <Pie
              data={pie}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {pie.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CategoryPieChart;
