"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const lineItems = [
  { name: "Content creation workshop",           tags: ["Monitoring", "Performance", "Enhancement"], price: "$5463.00" },
  { name: "Creative content brainstorming session", tags: ["Resource", "Allocation", "Efficiency"],   price: "$5463.00" },
  { name: "Content strategy meeting",            tags: ["Team", "Collaboration", "Enhancement"],      price: "$5463.00" },
  { name: "Collaborative content planning session", tags: ["Market", "Research", "Expansion"],        price: "$5463.00" },
  { name: "Content development roundtable",      tags: ["Customer", "Feedback", "Integration"],       price: "$5463.00" },
  { name: "Content review and feedback session", tags: ["Content", "Creation", "Streamlining"],       price: "$5463.00" },
  { name: "Content editing workshop",            tags: ["Software", "Testing", "Automation"],         price: "$5463.00" },
  { name: "Content optimization seminar",        tags: ["System", "Security", "Upgrade"],             price: "$5463.00" },
  { name: "Content alignment discussion",        tags: ["Network", "Infrastructure", "Upgrade"],      price: "$5463.00" },
  { name: "Content performance analysis meeting",tags: ["Data", "Analysis", "Optimization"],          price: "$5463.00" },
  { name: "Content innovation session",          tags: ["Service", "Quality", "Assurance"],           price: "$5463.00" },
  { name: "Content distribution strategy session", tags: ["User", "Engagement", "Growth"],            price: "$5463.00" },
  { name: "Content engagement workshop",         tags: ["Product", "Development", "Acceleration"],    price: "$5463.00" },
];

export default function page() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleNavClick = (item) => {
    if (item === "Proposals") router.push("/proposals");
    if (item === "Templates") router.push("/templates");
    if (item === "Line-items") router.push("/line-items");
  };

  const filtered = lineItems.filter(
    (item) =>
      search === "" ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

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
                onClick={() => handleNavClick(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  item === "Line-items"
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
      <div className="flex-1 px-8 pb-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold text-gray-900">Line Items Library</h1>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search line items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100 w-52"
              />
            </div>
            {/* Create line item */}
            <button className="flex items-center gap-1.5 px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              Create line item
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Tag</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Price</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-6 py-3.5 text-gray-600 text-sm">{row.name}</td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-0">
                      {row.tags.map((tag, j) => (
                        <span key={j} className="text-gray-500 text-sm">
                          {tag}
                          {j < row.tags.length - 1 && (
                            <span className="mx-2 text-gray-300">|</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-gray-600 text-sm">{row.price}</td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      {/* Edit icon */}
                      <button className="text-gray-400 hover:text-gray-600 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {/* Delete icon */}
                      <button className="text-red-400 hover:text-red-500 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <polyline points="3 6 5 6 21 6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 11v6M14 11v6" strokeLinecap="round" />
                          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}