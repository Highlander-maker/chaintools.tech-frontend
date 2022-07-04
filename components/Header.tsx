import { useState } from "react";

function NavLink({ to, children }: any) {
  return (
    <a href={to} className={`mx-4`}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <a className="text-xl font-semibold" href="/">
          MENU
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-medium my-4"
          href="/networks"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Networks
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/services"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Services
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/education"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Education
        </a>
        <a
          className="text-xl font-normal my-4"
          href="/tools"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Tools
        </a>
        <a
          className="text-xl font-normal my-4"
          href="contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between filter drop-shadow-md bg-white px-4 py-4 h-25">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-44 object-contain cursor-pointer">
        <a href="/">
          <img src="/chaintool--header-logo.svg" alt="" />
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex space-x-2">
          <button className="border  px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200">
            <NavLink to="/networks">Networks</NavLink>
          </button>

          <button className="border  px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200">
            <NavLink to="/services">Services</NavLink>
          </button>

          <button className="border  px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200">
            <NavLink to="/education">Education</NavLink>
          </button>

          <button className="border  px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200">
            <NavLink to="/tools">Tools</NavLink>
          </button>
          <button className="border  px-4 py-1 rounded-full hover:bg-gray-300 object-contain cursor-pointer transition-all duration-200">
            <NavLink to="/contact">Contact Us</NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}
