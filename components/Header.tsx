import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between bg-black p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 h-16 object-contain cursor-pointer"
            src="/chaintools-logo-clear.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="hidden md:inline-flex items-center space-x-5">
        <h3 className="border px-4 py-1 bg-slate-400 rounded-full object-contain cursor-pointer">Networks</h3>
        <h3 className="border px-4 py-1 bg-slate-400 rounded-full object-contain cursor-pointer">Services</h3>
        <h3 className="border px-4 py-1 bg-slate-400 rounded-full object-contain cursor-pointer">Education</h3>
        <h3 className="border px-4 py-1 bg-slate-400 rounded-full object-contain cursor-pointer">Contact Us</h3>
      </div>

      <div className="flex items-center space-x-5 text-slate-400">
        <h3 className="border px-4 py-1 rounded-full object-contain cursor-pointer">Sign In</h3>
      </div>
    </header>
  );
}

export default Header;
