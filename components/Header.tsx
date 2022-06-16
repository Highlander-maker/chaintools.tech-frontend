import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/public/chaintools-logo-black.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="hidden md:inline-flex items-center space-x-5">
        <h3 className="border px-4 py-1 rounded-full">Networks</h3>
        <h3 className="border px-4 py-1 rounded-full">Services</h3>
        <h3 className="border px-4 py-1 rounded-full">Education</h3>
        <h3 className="border px-4 py-1 rounded-full">Contact Us</h3>
      </div>

      <div className="flex items-center space-x-5 text-slate-400">
        <h3 className="border px-4 py-1 rounded-full">Sign In</h3>
      </div>
    </header>
  );
}

export default Header;
