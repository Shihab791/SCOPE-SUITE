"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const templates = [
  {
    title: "Customer Feedback",
    description: "Collecting and analyzing user responses to improve product features...",
    tags: ["Development", "UX/UI", "Marketing"],
  },
  {
    title: "Market Analysis",
    description: "A thorough examination of current market trends and competitor strategies...",
    tags: ["Development", "UX/UI", "Marketing"],
  },
  {
    title: "Marketing Campaign",
    description: "Launching targeted advertising to increase brand visibility and engagement...",
    tags: ["Development", "UX/UI", "Marketing"],
  },
  {
    title: "Sales Strategy",
    description: "Implementing plans to optimize revenue streams and customer acquisition...",
    tags: ["Development", "UX/UI", "Marketing"],
  },
  {
    title: "Sales Strategy",
    description: "Implementing plans to optimize revenue streams and customer acquisition...",
    tags: ["Development", "UX/UI", "Marketing"],
  },
  {
    title: "Product Development",
    description: "Advancing the design and functionality based on initial testing and insights...",
    tags: ["Development", "UX/UI", "Marketing"],
  },
  {
    title: "Campaign Kickoff",
    description: "Launching a targeted campaign to boost audience engageme...",
    tags: ["Advertising", "Analytics", "Content"],
  },
  {
    title: "Product Reveal",
    description: "Unveiling the new product line with exciting innovatio...",
    tags: ["Design", "Research", "Sales"],
  },
  {
    title: "User Feedback Round",
    description: "Collecting insights from early adopters to refine featu...",
    tags: ["Customer Service", "Testing", "Product Management"],
  },
];

export default function TemplatesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const filtered = templates.filter(
    (t) =>
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleClose = () => {
    setShowModal(false);
    setTemplateName("");
    setTag("");
    setDescription("");
  };

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
                onClick={() => {
                  if (item === "Proposals") router.push("/proposals");
                  if (item === "Templates") router.push("/templates");
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  item === "Templates"
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
        {/* Header row */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-lg font-bold text-gray-900">Templates Collections</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search template"
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
              Create template
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4">
          {filtered.map((t, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition cursor-pointer">
              <h3 className="text-sm font-bold text-gray-900 mb-2">{t.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{t.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal box */}
          <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <h2 className="text-base font-bold text-gray-900">Create new template</h2>
              <button
                onClick={handleClose}
                className="text-red-400 hover:text-red-500 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-4 flex flex-col gap-4">
              {/* Template name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Template name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your template name"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Tag */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Tag</label>
                <input
                  type="text"
                  placeholder="Write tag name"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Description</label>
                <textarea
                  placeholder="Briefly describe about template..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 resize-none"
                />
              </div>
            </div>

            {/* Footer button */}
            <div className="px-6 pb-6">
              <button
                onClick={handleClose}
                className="w-full py-3 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition"
              >
                Create template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}