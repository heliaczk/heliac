const Header = (): JSX.Element => {
  return (
    <header className="z-50 sticky top-0 bg-gray-800 shadow-md px-2">
      <div className="flex justify-between items-center shadow-sm h-12 container">
        <div className="flex">
        <img src="/favicon.svg" alt="" height={35} width={35} className="justify-start" />
        <h1 className="text-xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-200 animate-gradient-text">
          <a
            href="/"
            className="px-2.5 pb-2 text-xl font-bold text-center text-transparent bold-text bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-200 animate-gradient-text"
            aria-label="heliac.xyz"
          >
            heliac<span className="text-yellow-200">.</span>dev
          </a>
        </h1>
        </div>
        
        <nav>
          <ul className="flex justify-start gap-2 items-center text-md">
            <li>
              <a href="/blog" className="bg-gray-700 text-gray-300 px-5 py-1 rounded-2xl shadow-xl inset-full bg-gradient-to-r from-green-600 to-green-700 animate-gradient-text hidden"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
