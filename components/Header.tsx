import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between bg-gray-200 p-5 max-w-7xl mx-auto">
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
        <a href="networks"
        className="border  px-4 py-1 rounded-full object-contain cursor-pointer">
          Networks
        </a>

        <a href="services"
        className="border px-4 py-1 rounded-full object-contain cursor-pointer">
          Services
        </a>

        <a href="education"
         className="border px-4 py-1 rounded-full object-contain cursor-pointer">
          Education
        </a>

        <a href="contact"
        className="border px-4 py-1 rounded-full object-contain cursor-pointer">
          Contact Us
        </a>
      </div>

      <div className="flex items-center space-x-5 text-slate-700">
        <a className="border px-4 py-1 rounded-full object-contain cursor-pointer">
          Sign In
        </a>
      </div>
    </header>
  );
}

export default Header;
