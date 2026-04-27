"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-lg">

        {/* Header */}
        <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#3d2a4e] px-7 py-8 text-center">
          <h1 className="text-xl font-bold text-white mb-2">Register</h1>
          <p className="text-sm text-white/60">Fill up with correct information to create an new account.</p>
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

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-gray-50 outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-100 focus:bg-white transition placeholder:text-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-teal-400 hover:text-teal-500 transition"
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Confirm Password</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </span>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••"
                className="w-full pl-9 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-gray-50 outline-none focus:border-teal-300 focus:ring-2 focus:ring-teal-100 focus:bg-white transition placeholder:text-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-teal-400 hover:text-teal-500 transition"
              >
                {showConfirmPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5 w-3.5 h-3.5 accent-teal-400 cursor-pointer shrink-0"
            />
            <span className="text-xs text-gray-500 leading-5">
              By creating this account, you are agree to our{" "}
              <a href="#" className="font-medium text-gray-800 hover:underline">terms & conditions</a>
              {" "}and{" "}
              <a href="#" className="font-medium text-gray-800 hover:underline">privacy policy</a>.
            </span>
          </label>

          {/* Register button */}
          <button className="w-full py-3 mt-1 bg-gray-900 hover:bg-gray-800 active:scale-[0.99] text-white font-semibold rounded-lg text-sm transition">
            Register
          </button>

          {/* Sign in link */}
          <p className="text-center text-xs text-gray-400">
            Have an account?{" "}
            <a
              href="/signin"
              className="text-teal-400 font-medium hover:underline"
            >
              Sign in
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}