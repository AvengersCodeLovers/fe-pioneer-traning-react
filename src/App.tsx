import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';
import Article from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dev.to/api/articles?tag=${searchKeyword}`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [searchKeyword]);

  return (
    <>
      <Header onSearch={setSearchKeyword} />
      <div className="container">
        {isLoading ? (
          <div>Loading...</div>
        ) : articles.length === 0 ? (
          <div>No articles found</div>
        ) : (
          <div className="list-article">
            {articles.map((article: { id: number }) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
