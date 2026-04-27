"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateProposalPage() {
  const router = useRouter();
  const [paymentType, setPaymentType] = useState("Percentage");
  const [enablePayment, setEnablePayment] = useState(true);
  const [coverImage, setCoverImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto w-full">
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

      {/* Page Content */}
      <div className="flex-1 px-6 py-4 max-w-5xl mx-auto w-full">
        {/* Back button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition mb-6 font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Create a new proposal
        </button>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
          {/* Template */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Template <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10">
                <option value="">Start from scratch or select a template</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Proposal Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Proposal name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g: Website Design + SEO"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Client Name + Select from saved */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Client name</label>
              <input
                type="text"
                placeholder="e.g: John Doe"
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Select from saved client</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10">
                  <option value="">Select</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Company Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Company name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Email */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
            <input
              type="email"
              placeholder="Enter client email address"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Save client checkbox */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 accent-gray-700" />
              Save the client for future proposals
            </label>
          </div>

          {/* Payment type + Enable payment toggle */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium text-gray-700">Payment type</label>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                Enable payment
                <button
                  onClick={() => setEnablePayment(!enablePayment)}
                  className={`relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${enablePayment ? "bg-emerald-400" : "bg-gray-300"}`}
                >
                  <span
                    className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 mt-0.5 ${enablePayment ? "translate-x-5" : "translate-x-0.5"}`}
                  />
                </button>
              </label>
            </div>
            <div className="flex gap-2">
              {["Percentage", "Fixed amount"].map((type) => (
                <button
                  key={type}
                  onClick={() => setPaymentType(type)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition ${
                    paymentType === type
                      ? "bg-emerald-400 text-white border-emerald-400"
                      : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {type === "Percentage" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="9" r="2" /><circle cx="15" cy="15" r="2" />
                      <path d="M5 19L19 5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 10v4M8 12h8" strokeLinecap="round" />
                    </svg>
                  )}
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Deposit % + Frequency */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Deposit percentage <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  defaultValue="0.00"
                  step="0.01"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Frequency</label>
              <div className="relative">
                <select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 pr-10">
                  <option>One time</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Cover page background */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Cover page background <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <label className="flex flex-col items-center justify-center w-32 h-24 bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition overflow-hidden">
              {coverImage ? (
                <img src={coverImage} alt="cover" className="w-full h-full object-cover" />
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-gray-400 mb-1">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="17 8 12 3 7 8" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="12" y1="3" x2="12" y2="15" strokeLinecap="round" />
                  </svg>
                  <span className="text-xs text-gray-400">Upload image</span>
                </>
              )}
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>

          {/* Submit */}
          <button className="w-full py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-700 transition">
            Create proposal
          </button>
        </div>
      </div>
    </div>
  );
}