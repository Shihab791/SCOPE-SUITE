"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const allProposals = [
  { status: "Draft",   client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Sent",    client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Signed",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Cancel",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Sent",    client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Pending", client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Signed",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Sent",    client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Signed",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Cancel",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Draft",   client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Cancel",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Pending", client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Draft",   client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Sent",    client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
  { status: "Signed",  client: "Client name 1", proposal: "Proposal name 1", oneTime: "$0.00", monthly: "$0.00", created: "DD/MM/YYYY" },
];

const statusStyle = {
  Draft:   "bg-gray-100 text-gray-500",
  Sent:    "bg-purple-100 text-purple-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Signed:  "bg-emerald-100 text-emerald-600",
  Cancel:  "bg-red-100 text-red-500",
};

const filters = ["Draft", "Sent", "Pending", "Signed", "Canceled"];
const PAGE_SIZE = 12;

export default function page() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("Draft");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = allProposals.filter((p) => {
    const matchSearch =
      search === "" ||
      p.client.toLowerCase().includes(search.toLowerCase()) ||
      p.proposal.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f8f7f4" }}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full">
        <span className="text-base font-black tracking-widest text-gray-900 uppercase">Pricing Playground</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {["Proposals", "Templates", "Line-items", "Clients"].map((item) => (
              <button
                key={item}
                onClick={() => item === "Proposals" && router.push("/proposals")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  item === "Proposals"
                    ? "bg-emerald-400 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-500">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-500">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 px-8 pb-8 max-w-6xl mx-auto w-full">
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition font-medium"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Proposals list
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search proposals"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className="pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100 w-52"
              />
            </div>
            <button
              onClick={() => router.push("/create-proposal")}
              className="flex items-center gap-1.5 px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              Create proposal
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-8 border-b border-gray-200 mb-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setCurrentPage(1); }}
              className={`pb-2.5 text-sm font-medium transition border-b-2 -mb-px ${
                activeFilter === f
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-b-2xl rounded-tr-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 w-36">Status</th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">Client</th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">Proposal</th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">One time</th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">Monthly</th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">Created</th>
                <th className="text-left px-4 py-4 text-xs font-semibold text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-gray-400 text-sm">No proposals found.</td>
                </tr>
              ) : (
                paginated.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="px-6 py-3.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[row.status]}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-gray-500 text-sm">{row.client}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-sm">{row.proposal}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-sm">{row.oneTime}</td>
                    <td className="px-4 py-3.5 text-gray-500 text-sm">{row.monthly}</td>
                    <td className="px-4 py-3.5 text-gray-400 text-sm">{row.created}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-3">
                        <button className="text-gray-400 hover:text-gray-600 transition">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 transition">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="5" r="1.2" fill="currentColor" />
                            <circle cx="12" cy="12" r="1.2" fill="currentColor" />
                            <circle cx="12" cy="19" r="1.2" fill="currentColor" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-sm text-gray-500">Total: {filtered.length}</span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-medium"
              >
                «
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition ${
                    currentPage === page
                      ? "bg-gray-900 text-white"
                      : "border border-gray-200 text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition text-xs font-medium"
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}