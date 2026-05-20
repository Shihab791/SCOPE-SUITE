"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const weeklyData = [
  { day: "Sat", value: 6800 },
  { day: "Sun", value: 3200 },
  { day: "Mon", value: 4125, active: true },
  { day: "Tue", value: 7200 },
  { day: "Wed", value: 1000 },
  { day: "Thu", value: 4700 },
  { day: "Fri", value: 3500 },
];

const monthlyData = [
  { day: "Jan", value: 12000 },
  { day: "Feb", value: 8500 },
  { day: "Mar", value: 15000, active: true },
  { day: "Apr", value: 11000 },
  { day: "May", value: 9500 },
  { day: "Jun", value: 13000 },
  { day: "Jul", value: 7000 },
];

const MAX = 8000;
const yLabels = ["$8000", "$7000", "$6000", "$5000", "$4000", "$3000", "$2000", "$1000", "$500", "$0"];

const navItems = [
  {
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    path: "/admin/dashboard",
  },
  {
    label: "Users management",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    path: "/admin/users",
  },
  {
    label: "Proposal management", // 🔥 updated
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    path: "/admin/proposals", // 🔥 path change (optional but recommended)
  },
  {
    label: "Settings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    path: "/admin/settings",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [chartMode, setChartMode] = useState("Weekly");
  const [hoveredBar, setHoveredBar] = useState(null);

  const data = chartMode === "Weekly" ? weeklyData : monthlyData;
  const maxVal = chartMode === "Weekly" ? 8000 : 16000;
  const yAxis = chartMode === "Weekly"
    ? ["$8000", "$7000", "$6000", "$5000", "$4000", "$3000", "$2000", "$1000", "$500", "$0"]
    : ["$16000", "$14000", "$12000", "$10000", "$8000", "$6000", "$4000", "$2000", "$1000", "$0"];

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-52 bg-white border-r border-gray-100 flex flex-col fixed h-full">

        {/* Admin profile */}
        <div className="px-4 py-5 flex items-center gap-3 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" fill="#d1d5db"/>
              <circle cx="20" cy="15" r="7" fill="#9ca3af"/>
              <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" fill="#9ca3af"/>
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Admin name</p>
            <p className="text-xs text-gray-400 truncate">adminuser548@gmail.com</p>
          </div>
        </div>

        {/* Nav */}
        <div className="px-3 py-4 flex-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 mb-3">Main Menu</p>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { setActiveNav(item.label); router.push(item.path); }}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition text-left w-full ${
                  activeNav === item.label
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Log out */}
        <div className="p-3 border-t border-gray-100">
          <button
            onClick={() => router.push("/admin/signin")}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition"
          >
            Log out
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-52 flex-1 flex flex-col">

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Dashboard Management</h1>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
        </div>

        <div className="px-8 py-6 flex flex-col gap-6">

          {/* Overview cards */}
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-0.5">Overview</p>
            <p className="text-xs text-gray-400 mb-3">Active summary at a glance</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-5">
                <p className="text-xs text-gray-500 mb-2">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">598562</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-5">
                <p className="text-xs text-gray-500 mb-2">Total revenue</p>
                <p className="text-3xl font-bold text-gray-900">$6320.00</p>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">Statics analysis</p>
                <p className="text-xs text-gray-400">Revenue details of month & week</p>
              </div>
              <div className="flex items-center gap-4">
                {["Weekly", "Monthly"].map((mode) => (
                  <label key={mode} className="flex items-center gap-1.5 cursor-pointer">
                    <div
                      onClick={() => setChartMode(mode)}
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center cursor-pointer transition ${
                        chartMode === mode ? "border-gray-900" : "border-gray-300"
                      }`}
                    >
                      {chartMode === mode && <div className="w-2 h-2 rounded-full bg-gray-900" />}
                    </div>
                    <span className="text-sm text-gray-600">{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bar chart */}
            <div className="flex gap-2 h-64">
              {/* Y axis */}
              <div className="flex flex-col justify-between text-right pr-2 pb-6">
                {yAxis.map((label) => (
                  <span key={label} className="text-xs text-gray-400">{label}</span>
                ))}
              </div>

              {/* Bars */}
              <div className="flex-1 flex flex-col">
                {/* Grid lines */}
                <div className="flex-1 relative">
                  {yAxis.slice(0, -1).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full border-t border-dashed border-gray-200"
                      style={{ top: `${(i / (yAxis.length - 1)) * 100}%` }}
                    />
                  ))}

                  {/* Bars row */}
                  <div className="absolute inset-0 flex items-end gap-3 px-2">
                    {data.map((item, i) => {
                      const height = (item.value / maxVal) * 100;
                      const isHovered = hoveredBar === i;
                      const isActive = item.active;
                      return (
                        <div
                          key={item.day}
                          className="flex-1 flex flex-col items-center justify-end h-full relative"
                          onMouseEnter={() => setHoveredBar(i)}
                          onMouseLeave={() => setHoveredBar(null)}
                        >
                          {/* Tooltip */}
                          {(isActive || isHovered) && (
                            <div className="absolute bottom-full mb-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap flex items-center gap-1 z-10">
                              <div className="w-2 h-2 rounded-full bg-teal-400" />
                              ${item.value.toLocaleString()}.00
                            </div>
                          )}
                          <div
                            className={`w-full rounded-t-md transition-all ${
                              isActive || isHovered ? "bg-gray-900" : "bg-gray-200"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* X axis labels */}
                <div className="flex gap-3 px-2 pt-2">
                  {data.map((item) => (
                    <div key={item.day} className="flex-1 text-center text-xs text-gray-400">{item.day}</div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}