import { useState } from 'react';
import Header from './components/Header.tsx'
import ListActicle from './components/ListActicle.tsx'
import './assets/index.css'

function App() {
  const [searchTag, setSearchTag] = useState('');

  const handleSearchChange = (e: any) => {
    setSearchTag(e.target.value);
  };

  return (
    <>
      <Header searchTag={searchTag} handleSearchChange={handleSearchChange}/>
      <div className="container">
        <ListActicle searchTag={searchTag}/>
      </div>
    </>
  )
}

export default App
