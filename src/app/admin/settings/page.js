"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard",           path: "/admin/dashboard", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
  { label: "Users management",    path: "/admin/users",     icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { label: "Product management",  path: "/admin/proposals", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> },
  { label: "Settings",            path: "/admin/settings",  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg> },
];

const tabs = ["Personal Information", "Terms & Conditions", "Privacy Policy"];

export default function AdminSettingsPage() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("Settings");
  const [activeTab, setActiveTab] = useState("Personal Information");
  const [fullName, setFullName] = useState("");
  const [photo, setPhoto] = useState(null);
  const fileRef = useRef(null);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

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
          <h1 className="text-xl font-bold text-gray-900">Personal information</h1>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-600">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-8 py-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">

            {/* Tabs */}
            <div className="flex items-center gap-6 mb-8 border-b border-gray-100 pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium transition border-b-2 -mb-px ${
                    activeTab === tab
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Personal Information Tab */}
            {activeTab === "Personal Information" && (
              <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">

                {/* Photo upload */}
                <div
                  className="w-36 h-36 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition bg-gray-50 overflow-hidden"
                  onClick={() => fileRef.current?.click()}
                >
                  {photo ? (
                    <img src={photo} alt="profile" className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gray-300">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                    </>
                  )}
                  <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
                </div>
                <p className="text-sm font-semibold text-gray-700 -mt-3">Upload your photo</p>

                {/* Full Name */}
                <div className="relative w-full">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 bg-gray-50 outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-100 transition placeholder:text-gray-300"
                  />
                </div>

                {/* Update button */}
                <button className="w-full py-3.5 bg-gray-900 hover:bg-gray-700 text-white font-semibold rounded-xl text-sm transition">
                  Update
                </button>
              </div>
            )}

            {/* Terms & Conditions Tab */}
            {activeTab === "Terms & Conditions" && (
              <div className="max-w-xl mx-auto text-sm text-gray-500 leading-7">
                <p className="font-semibold text-gray-800 mb-3">Terms & Conditions</p>
                <p>By using this platform, you agree to abide by all applicable laws and regulations. Unauthorized use of the admin panel is strictly prohibited. All data accessed through this system is confidential and must not be shared without authorization.</p>
                <p className="mt-4">We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of any changes made.</p>
              </div>
            )}

            {/* Privacy Policy Tab */}
            {activeTab === "Privacy Policy" && (
              <div className="max-w-xl mx-auto text-sm text-gray-500 leading-7">
                <p className="font-semibold text-gray-800 mb-3">Privacy Policy</p>
                <p>We are committed to protecting your personal information. Any data collected through this admin panel is used solely for operational purposes and is never sold to third parties.</p>
                <p className="mt-4">All information is stored securely and access is restricted to authorized personnel only. You have the right to request deletion of your data at any time by contacting the system administrator.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}