import Header from "./components/Header.tsx";
import ListArticle from "./components/Article/ListArticle.tsx";
import './exercise_1.css';

export default function Exercise_1() {
  return (
    <>
      <Header/>
      <div className="container">
        <ListArticle/>
      </div>
    </>
  )
}
