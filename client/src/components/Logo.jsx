const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <svg
        className="block"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mc-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4f5d75" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
        </defs>

        <circle cx="20" cy="20" r="18" fill="url(#mc-gradient)" />

        <path
          d="M13 23c0-2.2 1.8-4 4-4 .2 0 .4 0 .6.1.6-1.7 2.2-2.9 4.1-2.9 2.4 0 4.3 1.9 4.3 4.3 1.5.3 2.7 1.7 2.7 3.3 0 1.9-1.6 3.5-3.5 3.5H15.5C14.1 27.3 13 25.9 13 24.3V23z"
          fill="#e5e7eb"
        />

        <path
          d="M16 24.5v-4h1.3l1 2.3 1-2.3h1.3v4h-1v-2.3l-1 2.3h-.6l-1-2.3v2.3H16z"
          fill="#111827"
        />
      </svg>

      <span className="text-lg font-semibold tracking-wide text-slate-800">
        MERN CLOUD
      </span>
    </div>
  );
};

export default Logo;
