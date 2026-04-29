"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const lineItems = [
  { name: "Content creation workshop",              tags: ["Monitoring", "Performance", "Enhancement"], price: "$5463.00" },
  { name: "Creative content brainstorming session", tags: ["Resource", "Allocation", "Efficiency"],     price: "$5463.00" },
  { name: "Content strategy meeting",               tags: ["Team", "Collaboration", "Enhancement"],     price: "$5463.00" },
  { name: "Collaborative content planning session", tags: ["Market", "Research", "Expansion"],          price: "$5463.00" },
  { name: "Content development roundtable",         tags: ["Customer", "Feedback", "Integration"],      price: "$5463.00" },
  { name: "Content review and feedback session",    tags: ["Content", "Creation", "Streamlining"],      price: "$5463.00" },
  { name: "Content editing workshop",               tags: ["Software", "Testing", "Automation"],        price: "$5463.00" },
  { name: "Content optimization seminar",           tags: ["System", "Security", "Upgrade"],            price: "$5463.00" },
  { name: "Content alignment discussion",           tags: ["Network", "Infrastructure", "Upgrade"],     price: "$5463.00" },
  { name: "Content performance analysis meeting",   tags: ["Data", "Analysis", "Optimization"],         price: "$5463.00" },
  { name: "Content innovation session",             tags: ["Service", "Quality", "Assurance"],          price: "$5463.00" },
  { name: "Content distribution strategy session",  tags: ["User", "Engagement", "Growth"],             price: "$5463.00" },
  { name: "Content engagement workshop",            tags: ["Product", "Development", "Acceleration"],   price: "$5463.00" },
];

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative inline-flex w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none flex-shrink-0 ${
        value ? "bg-gray-900" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 mt-0.5 ${
          value ? "translate-x-6" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default function LineItemsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Modal fields
  const [itemName, setItemName]         = useState("");
  const [itemTag, setItemTag]           = useState("");
  const [itemDesc, setItemDesc]         = useState("");
  const [optional, setOptional]         = useState(true);
  const [recurring, setRecurring]       = useState(true);
  const [allowQty, setAllowQty]         = useState(true);
  const [feeCalc, setFeeCalc]           = useState("Fixed rate");
  const [fixedCost, setFixedCost]       = useState("$100.00");

  const handleClose = () => {
    setShowModal(false);
    setItemName(""); setItemTag(""); setItemDesc("");
  };

  const handleNavClick = (item) => {
    if (item === "Proposals")  router.push("/proposals");
    if (item === "Templates")  router.push("/templates");
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
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold text-gray-900">Line Items Library</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search line items"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100 w-52"
              />
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-1.5 px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              Create line item
            </button>
          </div>
        </div>

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
                    <div className="flex items-center">
                      {row.tags.map((tag, j) => (
                        <span key={j} className="text-gray-500 text-sm">
                          {tag}{j < row.tags.length - 1 && <span className="mx-2 text-gray-300">|</span>}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-3.5 text-gray-600 text-sm">{row.price}</td>
                  <td className="px-6 py-3.5">
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

      {/* ── Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={handleClose} />

          {/* Modal card */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col max-h-[95vh]">

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 flex-shrink-0">
              <h2 className="text-base font-bold text-gray-900">Create new line item</h2>
              <button onClick={handleClose} className="text-red-400 hover:text-red-500 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 px-6 flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Line item name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0"
                />
              </div>

              {/* Line item tag */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">Line item tag</label>
                <input
                  type="text"
                  placeholder="Write tag name.."
                  value={itemTag}
                  onChange={(e) => setItemTag(e.target.value)}
                  className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0"
                />
              </div>

              {/* Descriptions */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">Descriptions</label>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  {/* Rich text toolbar */}
                  <div className="flex items-center gap-0.5 px-3 py-2 border-b border-gray-100 bg-white flex-wrap">
                    {/* B I U S */}
                    <button className="w-7 h-7 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-gray-100 rounded">B</button>
                    <button className="w-7 h-7 flex items-center justify-center text-xs italic text-gray-600 hover:bg-gray-100 rounded">I</button>
                    <button className="w-7 h-7 flex items-center justify-center text-xs underline text-gray-600 hover:bg-gray-100 rounded">U</button>
                    <button className="w-7 h-7 flex items-center justify-center text-xs line-through text-gray-600 hover:bg-gray-100 rounded">S</button>
                    {/* Color swatch */}
                    <div className="flex items-center mx-1">
                      <div className="w-5 h-5 rounded bg-blue-600 cursor-pointer" />
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500 ml-0.5"><path d="M6 9l6 6 6-6" strokeLinecap="round" /></svg>
                    </div>
                    {/* Font color A */}
                    <button className="w-7 h-7 flex items-center justify-center text-xs text-gray-600 hover:bg-gray-100 rounded font-semibold">A</button>
                    <div className="w-px h-4 bg-gray-200 mx-1" />
                    {/* Link */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" strokeLinecap="round" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" strokeLinecap="round" /></svg>
                    </button>
                    {/* Image */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" strokeLinecap="round" /></svg>
                    </button>
                    <div className="w-px h-4 bg-gray-200 mx-1" />
                    {/* List */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6h11M9 12h11M9 18h11" strokeLinecap="round" /><circle cx="4" cy="6" r="1" fill="currentColor" /><circle cx="4" cy="12" r="1" fill="currentColor" /><circle cx="4" cy="18" r="1" fill="currentColor" /></svg>
                    </button>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-500"><path d="M6 9l6 6 6-6" strokeLinecap="round" /></svg>
                    <div className="w-px h-4 bg-gray-200 mx-1" />
                    {/* Align left */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h12M3 18h15" strokeLinecap="round" /></svg>
                    </button>
                    {/* Align center */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M6 12h12M4 18h16" strokeLinecap="round" /></svg>
                    </button>
                    {/* Align right */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M9 12h12M6 18h15" strokeLinecap="round" /></svg>
                    </button>
                    {/* Justify */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" /></svg>
                    </button>
                    <div className="w-px h-4 bg-gray-200 mx-1" />
                    {/* Indent / outdent */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h12M3 18h18" strokeLinecap="round" /><path d="M17 9l3 3-3 3" strokeLinecap="round" /></svg>
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M9 12h12M3 18h18" strokeLinecap="round" /><path d="M7 9L4 12l3 3" strokeLinecap="round" /></svg>
                    </button>
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18" strokeLinecap="round" /><path d="M9 18h6" strokeLinecap="round" /></svg>
                    </button>
                    {/* Clear format */}
                    <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500 text-xs">✕</button>
                  </div>
                  {/* Text area */}
                  <textarea
                    placeholder="Write about line item..."
                    value={itemDesc}
                    onChange={(e) => setItemDesc(e.target.value)}
                    rows={5}
                    className="w-full bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="flex flex-col gap-4 py-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-800">Optional line item</span>
                  <Toggle value={optional} onChange={setOptional} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-800">Recurring</span>
                  <Toggle value={recurring} onChange={setRecurring} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-800">Allow clients for select quantity</span>
                  <Toggle value={allowQty} onChange={setAllowQty} />
                </div>
              </div>

              {/* Fee calculation + Fixed cost */}
              <div className="grid grid-cols-2 gap-4 pb-2">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">Fee calculation</label>
                  <div className="relative">
                    <select
                      value={feeCalc}
                      onChange={(e) => setFeeCalc(e.target.value)}
                      className="w-full appearance-none bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none pr-8 border-0"
                    >
                      <option>Fixed rate</option>
                      <option>Hourly rate</option>
                      <option>Percentage</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">Fixed cost</label>
                  <input
                    type="text"
                    value={fixedCost}
                    onChange={(e) => setFixedCost(e.target.value)}
                    className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none border-0"
                  />
                </div>
              </div>
            </div>

            {/* Add button — fixed at bottom */}
            <div className="px-6 py-5 flex-shrink-0">
              <button
                onClick={handleClose}
                className="w-full py-3.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl transition"
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