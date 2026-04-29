"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const clients = [
  { name: "Jusef Gomez",  company: "Tech Innovations Inc.",     email: "hello@creativehub.com",          proposal: 7,  won: "$7.00",   pending: "$123.00" },
  { name: "Dona Kynn",    company: "Green Solutions LLC",       email: "support@dynamicworkshop.com",    proposal: 9,  won: "$9.00",   pending: "$456.00" },
  { name: "Kiva Jasper",  company: "Future Dynamics Corp.",     email: "join@vibrantcommunity.com",      proposal: 0,  won: "$0.00",   pending: "$789.00" },
  { name: "Kiel Reide",   company: "Creative Ventures Ltd.",    email: "info@contentcreators.com",       proposal: 6,  won: "$6.00",   pending: "$234.00" },
  { name: "Zoya Marks",   company: "Global Enterprises Co.",    email: "connect@teamwork.com",           proposal: 2,  won: "$2.00",   pending: "$678.00" },
  { name: "Hugh Jass",    company: "NextGen Technologies",      email: "join@creativeideas.com",         proposal: 8,  won: "$8.00",   pending: "$890.00" },
  { name: "Anya Calin",   company: "Synergy Systems",           email: "contact@engagingevents.com",     proposal: 0,  won: "$0.00",   pending: "$345.00" },
  { name: "Otto Matic",   company: "Pinnacle Services Group",   email: "info@communityevents.com",       proposal: 5,  won: "$5.00",   pending: "$567.00" },
  { name: "Cole Sisco",   company: "Visionary Concepts Inc.",   email: "lively@communitygathering.com",  proposal: 12, won: "$12.00",  pending: "$910.00" },
  { name: "Ty Chronis",   company: "Dynamic Solutions Corp.",   email: "connect@excitingevents.com",     proposal: 9,  won: "$9.00",   pending: "$112.00" },
  { name: "Pamela Jones", company: "Innovative Strategies LLC", email: "unique@contenthub.com",          proposal: 4,  won: "$4.00",   pending: "$314.00" },
  { name: "Grant Stone",  company: "Elite Enterprises Ltd.",    email: "creative@designerspace.com",     proposal: 6,  won: "$6.00",   pending: "$415.00" },
  { name: "Elle Woods",   company: "Catalyst Technologies Co.", email: "vibrant@communityspace.com",     proposal: 2,  won: "$2.00",   pending: "$617.00" },
];

export default function page() {
  const router = useRouter();
  const [search, setSearch]           = useState("");
  const [companyFilter, setCompanyFilter] = useState("All companies");
  const [showModal, setShowModal]     = useState(false);
  const [newName, setNewName]         = useState("");
  const [newCompany, setNewCompany]   = useState("");
  const [newEmail, setNewEmail]       = useState("");

  const handleClose = () => {
    setShowModal(false);
    setNewName(""); setNewCompany(""); setNewEmail("");
  };

  const handleNavClick = (item) => {
    if (item === "Proposals")  router.push("/proposals");
    if (item === "Templates")  router.push("/templates");
    if (item === "Line-items") router.push("/line-items");
    if (item === "Clients")    router.push("/clients");
  };

  const filtered = clients.filter((c) =>
    search === "" ||
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
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
                  item === "Clients"
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
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-500">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 px-8 pb-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold text-gray-900">Clients</h1>
          <div className="flex items-center gap-3">
            {/* All companies dropdown */}
            <div className="relative">
              <select
                value={companyFilter}
                onChange={(e) => setCompanyFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-8 py-2 text-sm text-gray-600 focus:outline-none cursor-pointer"
              >
                <option>All companies</option>
                {[...new Set(clients.map((c) => c.company))].map((co) => (
                  <option key={co}>{co}</option>
                ))}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* Search */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search client"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100 w-44"
              />
            </div>
            {/* Add client */}
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1.5 px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              Add client
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-800">Name</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-800">Company name</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-800">Email</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-800">Proposal</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-800">Won value</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-800">Pending value</th>
                <th className="text-left px-4 py-4 text-sm font-semibold text-gray-800">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="px-6 py-3.5 text-gray-700 text-sm font-medium">{row.name}</td>
                  <td className="px-4 py-3.5 text-gray-500 text-sm">{row.company}</td>
                  <td className="px-4 py-3.5 text-gray-500 text-sm">{row.email}</td>
                  <td className="px-4 py-3.5 text-gray-500 text-sm">{row.proposal}</td>
                  <td className="px-4 py-3.5 text-gray-500 text-sm">{row.won}</td>
                  <td className="px-4 py-3.5 text-gray-500 text-sm">{row.pending}</td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <button className="text-gray-400 hover:text-gray-600 transition">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
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

      {/* ── Add new client Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={handleClose} />

          {/* Modal card */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <h2 className="text-base font-bold text-gray-900">Add new client</h2>
              <button onClick={handleClose} className="text-red-400 hover:text-red-500 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-4 flex flex-col gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter client name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0"
                />
              </div>

              {/* Company name */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">Company name</label>
                <input
                  type="text"
                  placeholder="Enter company name of client"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter client email address"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0"
                />
              </div>
            </div>

            {/* Add button */}
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={handleClose}
                className="w-full py-3 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}