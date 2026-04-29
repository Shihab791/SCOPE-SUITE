"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const profileTabs = ["My Profile", "Company details", "Terms & Conditions", "Privacy Policy", "Support"];

export default function page() {
  const router = useRouter();
  const [activeTab, setActiveTab]         = useState("My Profile");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);

  // Edit profile state
  const [fullName, setFullName] = useState("Zeal Cayman");

  // Change password state
  const [currentPass, setCurrentPass]   = useState("");
  const [newPass, setNewPass]           = useState("");
  const [retypePass, setRetypePass]     = useState("");
  const [showCurrent, setShowCurrent]   = useState(false);
  const [showNew, setShowNew]           = useState(false);
  const [showRetype, setShowRetype]     = useState(false);

  const handleNavClick = (item) => {
    if (item === "Proposals")  router.push("/proposals");
    if (item === "Templates")  router.push("/templates");
    if (item === "Line-items") router.push("/line-items");
    if (item === "Clients")    router.push("/clients");
  };

  // Eye icon
  const EyeOff = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-400">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" strokeLinecap="round" />
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" strokeLinecap="round" />
      <path d="M1 1l22 22" strokeLinecap="round" />
    </svg>
  );
  const EyeOn = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-400">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
  const LockIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-400 flex-shrink-0">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f5f3ee" }}>
      {/* Navbar */}
      <div className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full">
        <span className="text-base font-black tracking-widest text-gray-900 uppercase">Pricing Playground</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {["Proposals", "Templates", "Line-items", "Clients"].map((item) => (
              <button key={item} onClick={() => handleNavClick(item)}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-500 hover:text-gray-800 transition">
                {item}
              </button>
            ))}
          </div>
          <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-500">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </button>
          <button onClick={() => router.push("/profile")}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-500">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sub-header */}
      <div className="flex items-center justify-between px-8 pb-4 max-w-6xl mx-auto w-full">
        <button onClick={() => router.back()}
          className="flex items-center gap-1.5 text-sm text-emerald-500 hover:text-emerald-600 font-medium transition">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <div className="flex items-center gap-6">
          {profileTabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium pb-1 transition border-b-2 ${
                activeTab === tab ? "border-gray-900 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
              }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 flex items-start justify-center px-8 pt-8 pb-16">
        {activeTab === "My Profile" && (
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Dark gradient header */}
              <div className="flex items-center justify-center py-5"
                style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e6e 40%, #7c3aed 80%, #a855f7 100%)" }}>
                <h2 className="text-white text-base font-semibold">My Profile</h2>
              </div>
              {/* Profile info */}
              <div className="flex items-center gap-5 px-6 py-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src="https://images.unsplash.com/photo-1528892952291-009c663ce843?w=200&h=200&fit=crop&crop=face"
                      alt="Zeal Cayman" className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-400 flex-shrink-0">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="text-sm text-gray-700 font-medium">{fullName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-400 flex-shrink-0">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-sm text-gray-500">zeal54@gmail.com</span>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="px-6 pb-4 flex gap-3">
                <button onClick={() => setShowPassModal(true)}
                  className="flex-1 py-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl transition">
                  Change password
                </button>
                <button onClick={() => setShowEditModal(true)}
                  className="flex-1 py-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold rounded-xl transition">
                  Edit Profile
                </button>
              </div>
              {/* Log out */}
              <div className="px-6 pb-6">
                <button className="w-full py-3 border border-emerald-400 text-emerald-500 hover:bg-emerald-50 text-sm font-semibold rounded-xl transition">
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
        {activeTab !== "My Profile" && (
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-400 text-sm">
            {activeTab} content coming soon.
          </div>
        )}
      </div>

      {/* ── Edit Profile Modal ── */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowEditModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <h2 className="text-base font-bold text-gray-900">Edit your profile</h2>
              <button onClick={() => setShowEditModal(false)} className="text-red-400 hover:text-red-500 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* Body */}
            <div className="px-6 py-4">
              <label className="block text-sm font-medium text-gray-800 mb-1.5">Full name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-gray-100 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0"
              />
            </div>
            {/* Save */}
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={() => setShowEditModal(false)}
                className="w-full py-3 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition"
              >
                Save changed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Change Password Modal ── */}
      {showPassModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowPassModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <h2 className="text-base font-bold text-gray-900">Change password</h2>
              <button onClick={() => setShowPassModal(false)} className="text-red-400 hover:text-red-500 transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* Body */}
            <div className="px-6 py-4 flex flex-col gap-4">
              {/* Current Password */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">Current Password</label>
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2.5 gap-2">
                  <LockIcon />
                  <input
                    type={showCurrent ? "text" : "password"}
                    placeholder="••••••"
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0 min-w-0"
                  />
                  <button onClick={() => setShowCurrent(!showCurrent)} className="flex-shrink-0">
                    {showCurrent ? <EyeOn /> : <EyeOff />}
                  </button>
                </div>
              </div>
              {/* New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">New Password</label>
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2.5 gap-2">
                  <LockIcon />
                  <input
                    type={showNew ? "text" : "password"}
                    placeholder="••••••"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0 min-w-0"
                  />
                  <button onClick={() => setShowNew(!showNew)} className="flex-shrink-0">
                    {showNew ? <EyeOn /> : <EyeOff />}
                  </button>
                </div>
              </div>
              {/* Retype New Password */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1.5">Retype New Password</label>
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2.5 gap-2">
                  <LockIcon />
                  <input
                    type={showRetype ? "text" : "password"}
                    placeholder="••••••"
                    value={retypePass}
                    onChange={(e) => setRetypePass(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none border-0 min-w-0"
                  />
                  <button onClick={() => setShowRetype(!showRetype)} className="flex-shrink-0">
                    {showRetype ? <EyeOn /> : <EyeOff />}
                  </button>
                </div>
              </div>
            </div>
            {/* Save */}
            <div className="px-6 pb-6 pt-2">
              <button
                onClick={() => setShowPassModal(false)}
                className="w-full py-3 bg-emerald-400 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition"
              >
                Save changed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}