import Link from "next/link";

const Header = () => {
  return (
    <header className="container mx-auto px-6 py-6 relative z-10">
      <nav className="flex items-center justify-between">
        {/* Logo + Caption */}
        <div className="flex flex-col leading-tight">
          <Link href="/" className="text-3xl font-bold">
            <span className="text-gray-900">Dream</span>
            <span className="text-orange-500">lytix</span>
          </Link>
          <span className="text-xs text-center text-gray-400 tracking-wide">
            You Dream, We Build.
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-12 text-base font-medium">
          <li>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About Us
            </a>
          </li>
          <li>
            {/* <Link
              href="/services"
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </Link> */}

            <a href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900">
              Portfolio
            </a>
          </li>
          <li>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-gray-700 hover:text-gray-900">
              Team
            </Link>
          </li>
        </ul>

        {/* Let's Chat Button */}
        <Link
          href="/contact"
          className="px-8 py-2.5 border-2 border-gray-900 rounded-md text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
        >
          Let’s Chat
        </Link>
      </nav>
    </header>
  );
};

export default Header;
