import { Link, useLocation } from 'react-router';

function Header() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `text-[13.3px] ${isActive ? 'text-white' : 'text-black'} hover:text-gray-800`;
  };

  return (
    <header className="bg-[#ff6600] py-1.5">
      <nav className="max-w-4xl mx-auto px-2 flex items-center space-x-2">
        <Link to="/">
          <img src='src/assets/logo.svg' className='border'/>
        </Link>
        <Link to="/" className={`font-bold ${getLinkClass('/')}`}>
          Hacker News
        </Link>
        <span className="text-black">|</span>
        <Link to="/newest" className={getLinkClass('/newest')}>
          new
        </Link>
        <span className="text-black">|</span>
        <Link to="/best" className={getLinkClass('/best')}>
          best
        </Link>
        <span className="text-black">|</span>
        <Link to="/ask" className={getLinkClass('/ask')}>
          ask
        </Link>
        <span className="text-black">|</span>
        <Link to="/show" className={getLinkClass('/show')}>
          show
        </Link>
        <span className="text-black">|</span>
        <Link to="/jobs" className={getLinkClass('/jobs')}>
          jobs
        </Link>
      </nav>
    </header>
  );
}

export default Header;