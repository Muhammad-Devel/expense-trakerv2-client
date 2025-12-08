import axios from "axios";
import { BASE_URL } from "./customers";
import { authConfig } from "./authConfig";
const API_URL = `${BASE_URL}/expenses`;




// Get all expenses
export const getExpenses = async () => {
  try {
    const response = await axios.get(API_URL, authConfig());
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get expenses by month
export const getExpensesByMonth = async (month, year) => {
  try {
    const response = await axios.get(`${API_URL}?month=${month}&year=${year}`, authConfig());
    return response.data;
  } catch (error) {
    console.log(error);
  } 
};
// Get a single expense by ID
export const getExpense = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, authConfig());
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Create a new expense
export const createExpense = async (expenseData) => {
  try {
    const response = await axios.post(API_URL, expenseData, authConfig());
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Update an expense by ID
export const updateExpense = async (id, expenseData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${id}`,
      expenseData,
      authConfig()
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Delete an expense by ID
export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, authConfig());
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// get counts of expenses
export const getExpenseCounts = async () => {
  try {
    const response = await axios.get(`${API_URL}/counts`, authConfig());
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// get total amounts of expenses
export const getTotalAmounts = async () => {
  try {
    const response = await axios.get(`${API_URL}/totalAmounts`, authConfig());
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
