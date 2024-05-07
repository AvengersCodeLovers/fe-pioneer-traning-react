function Header({ inputSearch, onChange }) {
  return (
    <header className="header">
      <div className="search">
        <input type="text" className="search-input" value={inputSearch} onChange={onChange} />
        <button className="btn-search">
          <span className="material-symbols-outlined search__icon">search</span>
        </button>
      </div>
    </header>
  )
}

export default Header
