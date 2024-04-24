import { useEffect, useState } from 'react'
import Article from '../components/articles/Article'
import { getArticles } from '../api/articles'

export default function ArticleList() {
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const articles = await getArticles()
      setArticles(articles)
    } catch (err) {}
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <div className="list-article">
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  )
}
