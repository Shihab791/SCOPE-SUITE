"use client";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-lg">

        {/* Header */}
        <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#3d2a4e] px-7 py-8 text-center">
          <h1 className="text-xl font-bold text-white mb-2">Forgot your password?</h1>
          <p className="text-sm text-white/60">Enter correct email address for get OTP code.</p>
        </div>

        {/* Form */}
        <div className="px-7 py-7 flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 8l10 6 10-6" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Write your email address"
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-gray-50 outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-100 focus:bg-white transition placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Done button */}
          <button className="w-full py-3 mt-2 bg-gray-900 hover:bg-gray-800 active:scale-[0.99] text-white font-semibold rounded-lg text-sm transition">
            Done
          </button>

          {/* Back to sign in */}
          <a
            href="/signin"
            className="w-full py-3 flex items-center justify-center border border-teal-400 text-teal-400 font-semibold rounded-lg text-sm hover:bg-teal-50 transition"
          >
            Back to sign in
          </a>

        </div>
      </div>
    </div>
  );
}