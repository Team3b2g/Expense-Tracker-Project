import React, { useState } from "react";
import { INITIAL_EXPENSES } from "./data/db";
import Navbar from "./components/Navbar";
import AddExpenseModal from "./components/AddExpenseModal";
import HomePage from "./pages/HomePage";
import ExpensesPage from "./pages/ExpensesPage";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const [showModal, setShowModal] = useState(false);

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [{ ...expense, id: Date.now() }, ...prev]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <>
      {/* Floating gradient blobs — always in background */}
      <div className="blob-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      {/* Nav */}
      <Navbar page={page} onNavigate={setPage} userName="Arjun Sharma" />

      {/* Page content */}
      {page === "home" && (
        <HomePage
          expenses={expenses}
          onNavigate={setPage}
          onAddExpense={() => setShowModal(true)}
        />
      )}

      {page === "expenses" && (
        <ExpensesPage
          expenses={expenses}
          onAddExpense={() => setShowModal(true)}
          onDelete={handleDelete}
        />
      )}

      {/* Add Expense Modal */}
      {showModal && (
        <AddExpenseModal
          onClose={() => setShowModal(false)}
          onSave={handleAddExpense}
        />
      )}
    </>
  );
}
