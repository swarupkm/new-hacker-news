import { Link } from 'react-router';

function Header() {
  return (
    <header className="bg-[#ff6600] py-1.5">
      <nav className="max-w-4xl mx-auto px-2 flex items-center space-x-2">
        <Link to="/">
          <img src='src/assets/logo.svg' className='border'/>
        </Link>
        <Link to="/" className="font-bold text-[13.3px] text-black hover:text-gray-800">
          Hacker News
        </Link>
        <span className="text-black">|</span>
        <Link to="/newest" className="text-[13.3px] text-black hover:text-gray-800">
          new
        </Link>
        <span className="text-black">|</span>
        <Link to="/best" className="text-[13.3px] text-black hover:text-gray-800">
          best
        </Link>
        <span className="text-black">|</span>
        <Link to="/ask" className="text-[13.3px] text-black hover:text-gray-800">
          ask
        </Link>
        <span className="text-black">|</span>
        <Link to="/show" className="text-[13.3px] text-black hover:text-gray-800">
          show
        </Link>
      </nav>
    </header>
  );
}

export default Header;