// src/components/Info.jsx
import React from "react";
import {
  FaInfoCircle,
  FaTasks,
  FaRocket,
  FaUser,
  FaTools,
  FaDatabase,
  FaCode,
  FaDownload,
} from "react-icons/fa";

const StatCard = ({ title, value, type, children }) => (
  <div
    className={`bg-white rounded-lg shadow-sm p-4 flex flex-col ${
      type ? "border-red-500 border" : ""
    }`}
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
      <div className="text-slate-400">{children}</div>
    </div>
    <div className="text-2xl font-bold text-slate-900">{value}</div>
  </div>
);

export default function Info() {
  const version = "1.0.0";
  const developer = {
    name: "Muhammad",
    bio: "This project was created to help users take better control of their personal finances.",
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <header className="flex items-center gap-4">
        <div className="p-3 bg-cyan-50 text-cyan-700 rounded-lg">
          <FaInfoCircle size={28} />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
            Expense Tracker — Info
          </h1>
          <p className="text-sm text-slate-500">
            Overview, features, technologies and upcoming improvements.
          </p>
        </div>
      </header>

      {/* Top stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Version" value={version}>
          <FaCode />
        </StatCard>

        <StatCard title="Core Charts" value="Pie • Bar • Line">
          <FaTasks />
        </StatCard>

        <StatCard title="Responsive" value="Mobile • Desktop">
          <FaDatabase />
        </StatCard>

        <StatCard title="Export" value="PDF / Excel (Soon)" type="warning">
          <FaDownload />
        </StatCard>
      </section>

      {/* Two column main */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column: About & Features */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">
              About the Application
            </h2>
            <p className="text-slate-600 leading-relaxed">
              This application helps you track and manage your daily and monthly
              expenses. You can add, edit, and delete expenses, categorize them,
              and view visual analytics to better understand your spending
              habits.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-3">Core Features</h2>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 mt-1">
                  <FaTasks />
                </span>
                <span>
                  Add, edit and delete expenses; categorize and filter by date.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 mt-1">
                  <FaInfoCircle />
                </span>
                <span>
                  Monthly and yearly analytics with Pie, Bar and Line charts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 mt-1">
                  <FaTools />
                </span>
                <span>
                  JWT authentication (login/logout) and protected routes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-600 mt-1">
                  <FaDatabase />
                </span>
                <span>Responsive layout for mobile and desktop.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-3">Upcoming Features</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>
                Budget limit alerts (notifications when you exceed a limit)
              </li>
              <li>Automatic receipt scanning (OCR) to parse receipts</li>
              <li>Dark mode theme</li>
              <li>Export reports as PDF and Excel</li>
              <li>Multi-currency support</li>
            </ul>
          </div>
        </div>

        {/* Right column: Developer + Techs */}
        <aside className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-xl font-semibold">
                {developer.name?.charAt(0) || "M"}
              </div>
              <div>
                <div className="text-sm text-slate-500">Developer</div>
                <div className="font-semibold text-slate-900">
                  {developer.name}
                </div>
              </div>
            </div>
            <p className="mt-4 text-slate-600">{developer.bio}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              Technologies
            </h3>
            <ul className="text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <FaCode className="text-cyan-600" />
                React • React Router • Tailwind CSS • Recharts
              </li>
              <li className="flex items-center gap-2">
                <FaDatabase className="text-cyan-600" />
                Node.js • Express • MongoDB (Mongoose)
              </li>
              <li className="flex items-center gap-2">
                <FaTools className="text-cyan-600" />
                JWT Authentication • Axios • Day.js
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              Contact
            </h3>
            <p className="text-slate-600 text-sm">
              For feedback or support, contact{" "}
              <strong>jumaboyev2104@gmail.com</strong>
              {/* Replace with real contact. */}
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
