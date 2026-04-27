"use client";

import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

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
          {/* Bell */}
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          {/* User */}
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-8 py-4">
        <div className="flex items-center gap-2 mb-1">
          <button
            onClick={() => router.push("/dashboard")}
            className="text-teal-500 hover:text-teal-600 transition"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>
          <h1 className="text-lg font-bold text-gray-900">Meetings</h1>
        </div>
        <p className="text-sm text-gray-400 ml-7">Create & manage your meeting notes.</p>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 pb-20">
        {/* Calendar Icon */}
        <div className="text-gray-400">
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </div>

        <div className="text-center">
          <p className="text-base font-semibold text-gray-700">No meetings yet</p>
          <p className="text-sm text-gray-400 mt-1">Create your first meeting to start taking notes</p>
        </div>

        <button onClick={() => router.push("/create-meeting")}
        className="mt-2 flex items-center gap-2 px-6 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-full transition">
          + Create meeting
        </button>
      </div>

    </div>
  );
}