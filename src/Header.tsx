import { Link } from 'react-router';

function Header() {
  return (
    <header className="bg-[#ff6600] py-1.5">
      <nav className="max-w-4xl mx-auto px-2">
        <Link to="/" className="inline-block font-bold text-[13.3px] text-black hover:text-gray-800">
          Hacker News
        </Link> |
        <Link to="/newest">
          new
        </Link>
      </nav>
    </header>
  );
}

export default Header;