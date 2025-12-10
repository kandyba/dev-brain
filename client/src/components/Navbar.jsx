import { useSelector, useDispatch } from "react-redux";
import { logout } from './../store/userSlice';
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const name = currentUser?.name || "Guest";
  const surname = currentUser?.surname || "";
  const email = currentUser?.email || "";

  const initials = `${name.charAt() || ""}${surname.charAt() || ""}`.toUpperCase();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header className="w-full bg-white border-b border-slate-200 px-6 py-3">
      <div className="max-w-6xl mx-auto flex justify-end items-center">

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="font-medium text-slate-700">{name}</span>

            {currentUser?.avatar ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border border-slate-300"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
                {initials}
              </div>
            )}
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-xl border border-slate-200 z-50">

              <div className="flex flex-col items-center gap-3 p-3">
                {currentUser?.avatar ? (
                  <img
                    src={currentUser.avatar}
                    className="w-12 h-12 rounded-full object-cover border border-slate-300"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-lg font-semibold">
                    {initials}
                  </div>
                )}

                <div className="font-semibold text-slate-800">
                  {name} {surname}
                </div>
                <div className="text-sm text-slate-500">{email}</div>
              </div>

              <div className="border-t border-slate-200"></div>

              <button
                className="cursor-pointer w-full text-left text-slate-700 hover:bg-slate-100 py-3 px-3 transition"
              >
                Settings
              </button>

              <div className="border-t border-slate-200"></div>

              <button
                onClick={handleLogout}
                className="cursor-pointer w-full text-left text-red-600 hover:bg-red-50 py-3 px-3 transition font-medium"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
