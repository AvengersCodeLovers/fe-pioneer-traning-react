import { useState } from 'react';

function Header({ onSearch }: { onSearch: (value: string) => void }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    onSearch(inputValue);
  };

  return (
    <header className="header">
      <div className="search">
        <input 
          type="text" 
          className="search-input" 
          value={inputValue}
          onChange={handleInputChange} 
        />
        <button className="btn-search">
          <span 
            className="material-symbols-outlined search__icon"
            onClick={handleButtonClick}
          >search</span>
        </button>
      </div>
    </header>
  );
};

export default Header;