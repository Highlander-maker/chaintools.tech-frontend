import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between bg-gray-100 p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="/chaintool--header-logo.svg"
            alt=""
          />
        </Link>
      </div>

      <div className="hidden md:inline-flex items-center space-x-5">
        <a
          href="networks"
          className="border  px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200"
        >
          Networks
        </a>

        <a
          href="services"
          className="border  px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200"
        >
          Services
        </a>

        <a
          href="education"
          className="border px-4 py-1 rounded-full  hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200"
        >
          Education
        </a>

        <a
          href="tools"
          className="border px-4 py-1 rounded-full  hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200"
        >
          Tools
        </a>

        <a
          href="contact"
          className="border px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center space-x-5 text-slate-700">
       
      </div>
    </header>
  );
}

export default Header;
