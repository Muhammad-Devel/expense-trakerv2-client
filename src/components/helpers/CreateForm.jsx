import React, { useState } from "react";

const initialState = {
  title: "",
  amount: "",
  category: "",
  date: "",
  description: "",
};

const categories = [
  "Food",
  "Transport",
  "Utilities",
  "Entertainment",
  "Health",
  "Other",
];

const titleStyle = "tect-center py-6 font-semibold text-gray-800 text-xl";
const formGroupStyle = "mb-4";
const labelStyle = "block text-gray-700 font-medium";
const inputStyle =
  "w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-cyan-600";
const buttonStyle =
  "bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-700 transition";

export default function CreateForm({ onSave }) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category || !form.date) return;
    onSave(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className={titleStyle}>Add Expense</h3>
      <div className={formGroupStyle}>
        <label className={labelStyle}>Title</label>
        <input
          className={inputStyle}
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className={labelStyle}>Amount</label>
        <input
          className={inputStyle}
          name="amount"
          type="number"
          min="0"
          step="0.01"
          value={form.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formGroupStyle}>
        <label className={labelStyle}>Category</label>
        <select
          className={inputStyle}
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div children={formGroupStyle}>
        <label className={labelStyle}>Date</label>
        <input
          className={inputStyle}
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className={formGroupStyle}>
        <label className={labelStyle}>Notes</label>
        <textarea
          className={inputStyle}
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <button className={buttonStyle} type="submit">
        Save
      </button>
    </form>
  );
}
