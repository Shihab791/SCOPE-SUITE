"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const proposals = [
  { status: "Draft",   client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Sent",    client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Pending", client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Pending", client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Pending", client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Signed",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Cancel",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
];

const statusStyle = {
  Draft:   "bg-gray-100 text-gray-600",
  Sent:    "bg-blue-100 text-blue-600",
  Pending: "bg-yellow-100 text-yellow-700",
  Signed:  "bg-green-100 text-green-700",
  Cancel:  "bg-red-100 text-red-500",
};

const filters = ["All", "Draft", "Sent", "Pending", "Signed", "Cancel"];

export default function page() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? proposals
    : proposals.filter((p) => p.status === activeFilter);

  const handleNavClick = (item) => {
    if (item === "Proposals")  router.push("/proposals");
    if (item === "Templates")  router.push("/templates");
    if (item === "Line-items") router.push("/line-items");
    if (item === "Clients")    router.push("/clients");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 px-6 py-6 max-w-6xl mx-auto w-full">

        {/* Navbar */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-black tracking-widest text-gray-900 uppercase">Pricing Playground</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 gap-1">
              {["Proposals", "Templates", "Line-items", "Clients"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-1.5 rounded-full text-sm text-gray-600 hover:bg-white hover:shadow-sm transition font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Bell */}
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>
            {/* ✅ User button — profile route added */}
            <button
              onClick={() => router.push("/profile")}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Welcome + Buttons */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome, Sourov</h1>
            <p className="text-sm text-gray-500 mt-0.5">Here is your proposal overview.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => router.push("/meetings")}
              className="px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition">
              New meeting
            </button>
            <button onClick={() => router.push("/create-proposal")}
              className="px-4 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition">
              + Create proposal
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Proposals Sent</p>
            <p className="text-3xl font-bold text-gray-900">598562</p>
            <p className="text-xs text-gray-400 mt-1">This month</p>
            <p className="text-xs text-green-500 font-medium mt-0.5">+12% from last month</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Pending Value</p>
            <p className="text-3xl font-bold text-gray-900">$8741</p>
            <p className="text-xs text-gray-400 mt-1">This month</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Awaiting Signature</p>
            <p className="text-3xl font-bold text-gray-900">65</p>
            <p className="text-xs text-gray-400 mt-1">Awaiting signature: 1</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Won Value</p>
            <p className="text-3xl font-bold text-gray-900">$3658.00</p>
            <p className="text-xs text-gray-400 mt-1">This month</p>
            <p className="text-xs text-green-500 font-medium mt-0.5">+12% from last month</p>
          </div>
        </div>

        {/* Recent Proposals Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">Recent proposals</h2>
            <div className="flex items-center gap-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1 text-sm rounded-md font-medium transition ${
                    activeFilter === f
                      ? "text-gray-900 font-semibold underline underline-offset-4"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 w-32">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Client</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Proposal</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">One time</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Monthly</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Created</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-6 py-3">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${statusStyle[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{row.client}</td>
                  <td className="px-4 py-3 text-gray-600">{row.proposal}</td>
                  <td className="px-4 py-3 text-gray-600">{row.oneTime}</td>
                  <td className="px-4 py-3 text-gray-600">{row.monthly}</td>
                  <td className="px-4 py-3 text-gray-400">{row.created}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="5" r="1" fill="currentColor" />
                          <circle cx="12" cy="12" r="1" fill="currentColor" />
                          <circle cx="12" cy="19" r="1" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-sm text-gray-500">Total: 70</span>
            <button
              onClick={() => router.push("/proposals")}
              className="px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              View all proposals
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}