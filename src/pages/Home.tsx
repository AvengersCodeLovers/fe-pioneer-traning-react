import ArticleSearch from '../components/articles/ArticleSearch'
import ArticleList from '../containers/ArticleList'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <header className="header">
        <ArticleSearch />
      </header>
      <div className="container">
        <ArticleList />
      </div>
    </>
  )
}
