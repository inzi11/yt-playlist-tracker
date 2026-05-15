import { useEffect, useState } from "react";

type AuthFormProps = {
  variant: "signin" | "signup";
  onSubmit?: (data: Record<string, string>) => void;
  onVariantChange?: (v: "signin" | "signup") => void;
};



const AuthForm = ({ variant, onSubmit, onVariantChange }: AuthFormProps) => {
  
  const isSignup = variant === "signup";
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((val, key) => { data[key] = String(val); });
    onSubmit?.(data);
  };


  useEffect(() => {
    
  }, [isSignup])

  return (
    <div className="relative w-full max-w-105 mx-auto rounded-2xl">
      {/* Card */}
      <div className="relative bg-(--c-sidebar) border border-(--c-border) p-8 shadow-2xl shadow-black/60 overflow-hidden">

        {/* Subtle top gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-[px] bg-linear-to-r from-transparent via-white/20 to-transparent" />

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold tracking-tight text-(--c-text)" style={{fontSize: "var(--text-title)"}}>
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>
          <p className="text-micro text-white/40 mt-1">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => onVariantChange?.("signin")}
                  className="text-[#e07b6a] hover:text-[#e8907f] transition-colors font-medium"
                >
                  Sign in →
                </button>
              </>
            ) : (
              <>
                No account yet?{" "}
                <button
                  type="button"
                  onClick={() => onVariantChange?.("signup")}
                  className="text-[#e07b6a] hover:text-[#e8907f] transition-colors font-medium"
                >
                  Create one →
                </button>
              </>
            )}
          </p>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 bg-(--c-inputs) hover:bg-(--c-hover) border border-(--c-border) text-white/90 text-sm py-2 text-micro font-semibold rounded-lg transition-all duration-200 hover:border-(--c-borderH) group"
        >
          <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
            <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
            <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-3">
          <div className="flex-1 h-px bg-(--c-border)" />
          <span className=" text-(--c-textS) tracking-wide text-micro">or with email</span>
          <div className="flex-1 h-px bg-(--c-border)]" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.25">

          {isSignup && (
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm text-(--c-textS) font-semibold tracking-wide">First name</label>
                <input
                  name="firstName"
                  placeholder="Aryan"
                  className="w-full bg-(--c-inputs) hover:bg-(--c-hover) border border-(--c-border) rounded-md px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-(--c-accentB) focus:bg-white/6 transition-all duration-200"
                  
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm text-(--c-textS) font-semibold tracking-wide">Last name</label>
                <input
                  name="lastName"
                  placeholder="Kumar"
                  className="w-full bg-(--c-inputs) hover:bg-(--c-hover) border border-(--c-border) rounded-md px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-(--c-accentB) focus:bg-white/6 transition-all duration-200"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <label className="text-sm text-(--c-textS) font-semibold tracking-wide">Email address</label>
            <input
              name="email"
              type="email"
              placeholder="aryan@example.com"
              required
              className="w-88.5 bg-(--c-inputs) hover:bg-(--c-hover) border border-(--c-border) rounded-md px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-(--c-accentB) focus:bg-white/6 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-sm text-(--c-textS) font-semibold tracking-wide">Password</label>
              {!isSignup && (
                <button type="button" className="text-xs text-[#e07b6a] hover:text-[#e8907f] transition-colors">
                  Forgot password?
                </button>
              )}
            </div>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder={isSignup ? "Min. 8 characters" : "••••••••"}
                required
                minLength={isSignup ? 8 : undefined}
                className="bg-(--c-inputs) hover:bg-(--c-hover) w-88.5 border border-(--c-border) rounded-md px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-(--c-accentB) focus:bg-white/6 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(p => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-(--c-text) hover:text-white/60 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-1 bg-(--c-accent) hover:bg-[#d46d5c] text-white text-sm font-semibold py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#e07b6a]/20 active:scale-[0.99]"
          >
            {isSignup ? "Create account →" : "Sign in →"}
          </button>
        </form>

        {/* Footer */}
        <p className={`text-micro text-(--c-textS) text-center mt-3 leading-relaxed ${isSignup ? "" : "mb-[3.56rem]"}`}>
          {isSignup ? (
            <>By signing up you agree to our <span className="text-white/40 hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span> and <span className="text-white/40 hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span></>
          ) : (
            <>Protected by reCAPTCHA · <span className="text-white/40 hover:text-white/60  cursor-pointer transition-colors">Privacy</span> · <span className="text-white/40 hover:text-white/60 cursor-pointer transition-colors">Terms</span></>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;