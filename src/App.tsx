import './App.css'
import sampleData from './data.ts'

export default function App() {
  const listArticles = sampleData.map(article =>
    <div className="article" key={article.id}>
      <div className="article-header">
        <div className="author">
          <img
            src={article.avatar}
            alt="Author avatar"
            className="author-avatar"
          />
          <div className="author-info">
            <p className="author-name">{article.username}</p>
            <p className="author-published">{
              new Intl.DateTimeFormat("en", {
                day: "2-digit",
                month: "short",
                year: "2-digit"
              }).format(Date.parse(article.publishedAt))
            }</p>
          </div>
        </div>
      </div>
      <div className="article-body">
        <p className="article-title">{article.title}</p>
        <ul className="article-tags">
          {article.tags.map((tag, index) =>
            <li className="article-tag" key={index}>
              <a href="#" className="tag">#{tag}</a>
            </li>
          )}
        </ul>
      </div>
      <div className="article-footer">
        <div className="article-social">
          <span className="social">
            <span className="article-icon material-symbols-outlined">add_reaction</span>
            <span>{article.reactions} reactions</span>
          </span>
          <span className="social">
            <span className="article-icon material-symbols-outlined">chat_bubble</span>
            <span>{article.comments} comments</span>
          </span>
        </div>
        <div className="article-bookmark">
          <span className="article-icon material-symbols-outlined">bookmark</span>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <header className="header">
        <div className="search">
          <input type="text" className="search-input" />
          <button className="btn-search">
            <span className="material-symbols-outlined search__icon">search</span>
          </button>
        </div>
      </header>
      <div className="container">
        <div className="list-article">
          {listArticles}
        </div>
      </div>
    </>
  )
}
