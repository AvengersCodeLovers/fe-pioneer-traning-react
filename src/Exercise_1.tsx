import Header from "./components/Header.tsx";
import ListArticle from "./components/Article/ListArticle.tsx";
import './exercise_1.css';
import {useState} from "react";

export default function Exercise_1() {
  const [inputSearch, setInputSearch] = useState('');
  const handleInputSearchChange = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <>
      <Header inputSearch={inputSearch} onChange={handleInputSearchChange} />
      <div className="container">
        <ListArticle inputSearch={inputSearch} />
      </div>
    </>
  )
}
