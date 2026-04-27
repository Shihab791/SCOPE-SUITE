"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

const tags = ["Favorite", "Commercial", "Web design", "Events", "Marketing", "Consulting"];

export default function page() {
  const router = useRouter();
  const [activeTag, setActiveTag] = useState(null);
  const editorRef = useRef(null);

  const execCmd = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] flex flex-col">

      {/* Navbar */}
      <div className="px-8 py-4 flex items-center justify-between">
        <span className="text-sm font-black tracking-widest text-gray-900 uppercase">Pricing Playground</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 gap-1">
            {["Proposals", "Templates", "Line-items", "Clients"].map((item) => (
              <button
                key={item}
                className="px-4 py-1.5 rounded-full text-sm text-gray-600 hover:bg-white hover:shadow-sm transition font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/meetings")}
            className="text-teal-500 hover:text-teal-600 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-900">Create meeting</h1>
        </div>

        {/* Right action buttons */}
        <div className="flex items-center gap-2">
          {/* Settings */}
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </button>
          {/* Mic */}
          <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="9" y="2" width="6" height="11" rx="3" />
              <path d="M5 10a7 7 0 0014 0M12 19v3M8 22h8" />
            </svg>
          </button>
          {/* Generate */}
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            Generate
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="py-2 flex items-center justify-center gap-2 flex-wrap">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
              activeTag === tag
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            } ${tag === "Favorite" ? "flex items-center gap-1" : ""}`}
          >
            {tag === "Favorite" && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill={activeTag === tag ? "white" : "none"} stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            )}
            {tag}
          </button>
        ))}
      </div>

      {/* Editor */}
      <div className="px-8 py-3 flex-1 flex flex-col">
        <div className="bg-gray-50 rounded-xl border border-gray-200 flex-1 flex flex-col overflow-hidden">

          {/* Toolbar */}
          <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-200 flex-wrap">
            {/* Paragraph dropdown */}
            <span className="text-xs text-gray-500 pr-2">Paragraph</span>
            <div className="w-px h-4 bg-gray-300 mx-1" />

            {/* Bold */}
            <button
              onMouseDown={(e) => { e.preventDefault(); execCmd("bold"); }}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200 transition text-gray-700 font-bold text-sm"
            >B</button>

            {/* Italic */}
            <button
              onMouseDown={(e) => { e.preventDefault(); execCmd("italic"); }}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200 transition text-gray-700 italic text-sm"
            >I</button>

            {/* Underline */}
            <button
              onMouseDown={(e) => { e.preventDefault(); execCmd("underline"); }}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200 transition text-gray-700 underline text-sm"
            >U</button>

            <div className="w-px h-4 bg-gray-300 mx-1" />

            {/* Bullet list */}
            <button
              onMouseDown={(e) => { e.preventDefault(); execCmd("insertUnorderedList"); }}
              className="flex items-center gap-0.5 px-2 h-7 rounded hover:bg-gray-200 transition text-gray-600 text-xs"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" />
                <circle cx="4" cy="6" r="1.5" fill="currentColor" /><circle cx="4" cy="12" r="1.5" fill="currentColor" /><circle cx="4" cy="18" r="1.5" fill="currentColor" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>

            {/* Ordered list */}
            <button
              onMouseDown={(e) => { e.preventDefault(); execCmd("insertOrderedList"); }}
              className="flex items-center gap-0.5 px-2 h-7 rounded hover:bg-gray-200 transition text-gray-600 text-xs"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
                <path d="M4 6h1v4M4 10h2M4 15h1.5a.5.5 0 010 1H4a.5.5 0 000 1h2" strokeLinecap="round"/>
              </svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
            </button>

            <div className="w-px h-4 bg-gray-300 mx-1" />

            {/* Link */}
            <button
              onMouseDown={(e) => { e.preventDefault(); const url = prompt("URL:"); if (url) execCmd("createLink", url); }}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200 transition text-gray-600"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </button>

            <div className="w-px h-4 bg-gray-300 mx-1" />

            {/* Undo */}
            <button
              onMouseDown={(e) => { e.preventDefault(); execCmd("undo"); }}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200 transition text-gray-600"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7v6h6" /><path d="M3 13A9 9 0 1021 12" />
              </svg>
            </button>

            {/* Redo */}
            <button
              onMouseDown={(e) => { e.preventDefault(); execCmd("redo"); }}
              className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-200 transition text-gray-600"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 7v6h-6" /><path d="M21 13A9 9 0 113 12" />
              </svg>
            </button>
          </div>

          {/* Editable area */}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            className="flex-1 p-4 text-sm text-gray-700 outline-none min-h-[400px]"
          />
        </div>
      </div>

    </div>
  );
}