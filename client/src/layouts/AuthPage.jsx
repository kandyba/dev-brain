import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/AuthForm/LoginForm.jsx";
import RegisterForm from "../components/AuthForm/RegisterForm.jsx";

const AuthPage = ({ mode = "login" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";

  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* LEFT IMAGE BLOCK */}
      <div className="hidden w-1/2 md:block">
        <img
          src="/assets/banner.png"
          alt="Cloud Storage"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT FORM BLOCK */}
      <div className="flex w-full md:w-1/2 flex-col justify-center bg-white px-8 md:px-16 shadow-xl">
        <div className="w-full max-w-sm">
          {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>

        <div className="mt-6 text-sm text-slate-600 flex items-center gap-2">
          {isLogin ? (
            <>
              <span>Don't have an account?</span>
              <button
                onClick={() => navigate("/register")}
                className="general-link underline-animate cursor-pointer text-[var(--color-purple-1000)] hover:text-[var(--color-red-1000)] transition"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <span>Already have an account?</span>
              <button
                onClick={() => navigate("/login")}
                className="general-link underline-animate cursor-pointer text-[var(--color-purple-1000)] hover:text-[var(--color-red-1000)] transition"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
