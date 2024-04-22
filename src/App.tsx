import './App.css'
import Header from './components/Header';
import Article from './components/Article';
import sampleData from '../exercise/data.js';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="list-article">
          {  sampleData.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
