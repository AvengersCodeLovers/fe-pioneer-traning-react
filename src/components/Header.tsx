interface HeaderProps {
  searchTag: string;
  handleSearchChange: (e: any) => void;
}

function Header({ searchTag, handleSearchChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="search">
        <input type="text" className="search-input" value={searchTag} onChange={handleSearchChange} />
        <button className="btn-search">
          <span className="material-symbols-outlined search__icon">search</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
