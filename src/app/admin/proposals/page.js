"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const allProposals = [
  { owner: "Abir Hossain",  proposal: "EcoSmart Water Bottle",       client: "Abir Hossain" },
  { owner: "Arif Biswas",   proposal: "UltraComfort Yoga Mat",       client: "Arif Biswas" },
  { owner: "Maksud",        proposal: "PowerBoost Portable Charger", client: "Maksud" },
  { owner: "Noda",          proposal: "Gourmet Coffee Maker",        client: "Noda" },
  { owner: "Abid",          proposal: "SmartHome Security System",   client: "Abid" },
  { owner: "Julfiqer",      proposal: "AllWeather Hiking Boots",     client: "Julfiqer" },
  { owner: "Madhob",        proposal: "QuickCook Air Fryer",         client: "Madhob" },
  { owner: "Sazzat",        proposal: "SleekTech Laptop Stand",      client: "Sazzat" },
  { owner: "Sammo",         proposal: "VibrantArt Paint Set",        client: "Sammo" },
  { owner: "Rubayet",       proposal: "TravelEase Luggage Set",      client: "Rubayet" },
  { owner: "Rubayet",       proposal: "FitTrack Smart Scale",        client: "Rubayet" },
  { owner: "Tanvir",        proposal: "ProSound Wireless Earbuds",   client: "Tanvir" },
  { owner: "Rafi",          proposal: "CoolBreeze Portable Fan",     client: "Rafi" },
  { owner: "Sumaiya",       proposal: "GlowSkin LED Face Mask",      client: "Sumaiya" },
  { owner: "Farhan",        proposal: "AutoClean Robot Vacuum",      client: "Farhan" },
  { owner: "Mehedi",        proposal: "SwiftCharge Power Bank",      client: "Mehedi" },
  { owner: "Sadia",         proposal: "AquaPure Water Filter",       client: "Sadia" },
  { owner: "Imran",         proposal: "SmartLock Door System",       client: "Imran" },
  { owner: "Lamia",         proposal: "ZenSleep White Noise Machine",client: "Lamia" },
  { owner: "Nabil",         proposal: "FreshBrew Coffee Grinder",    client: "Nabil" },
  { owner: "Bristy",        proposal: "TechDesk Monitor Stand",      client: "Bristy" },
  { owner: "Zahid",         proposal: "EcoCharge Solar Panel Kit",   client: "Zahid" },
];

const PER_PAGE = 11;

const navItems = [
  { label: "Dashboard",           path: "/admin/dashboard", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
  { label: "Users management",    path: "/admin/users",     icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { label: "Proposal management", path: "/admin/proposals", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { label: "Settings",            path: "/admin/settings",  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg> },
];

function Avatar({ name }) {
  const colors = ["bg-blue-200","bg-green-200","bg-yellow-200","bg-pink-200","bg-purple-200","bg-orange-200","bg-teal-200"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-xs font-bold text-gray-700 flex-shrink-0`}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default function page() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("Proposal management");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = allProposals.filter((p) =>
    p.owner.toLowerCase().includes(search.toLowerCase()) ||
    p.client.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <div className="w-52 bg-white border-r border-gray-100 flex flex-col fixed h-full">
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

        <div className="p-3 border-t border-gray-100">
          <button
            onClick={() => router.push("/admin/signin")}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition"
          >
            Log out
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="ml-52 flex-1 flex flex-col">

        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-900">Proposal Management</h1>
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3 text-gray-400">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search by email"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 bg-gray-50 outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-100 transition w-64 placeholder:text-gray-400"
              />
            </div>
            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 01-3.46 0"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 px-8 py-6 flex flex-col">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex-1 flex flex-col overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 w-56">Proposal Owner</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-gray-700">Proposal name</th>
                  <th className="text-left px-4 py-4 text-sm font-semibold text-gray-700 w-56">Clients</th>
                  <th className="text-left px-4 py-4 text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={row.owner} />
                        <span className="text-sm font-medium text-gray-800">{row.owner}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-center">{row.proposal}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Avatar name={row.client} />
                        <span className="text-sm text-gray-700">{row.client}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-gray-400 hover:text-gray-600 transition">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-end px-6 py-4 gap-1 border-t border-gray-100 mt-auto">
              <button onClick={() => setPage(1)} disabled={page === 1} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 disabled:opacity-30 transition text-xs">«</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition ${
                    page === p ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button onClick={() => setPage(totalPages)} disabled={page === totalPages} className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 disabled:opacity-30 transition text-xs">»</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}