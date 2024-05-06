import {useEffect, useState} from 'react'
import './App.css'
import {fetchArticles} from './api.ts'

function App() {
  const ENTER_KEY = 'Enter'
  const [tag, setTag] = useState('')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => { fetchArticlesByTag() }, [])

  function fetchArticlesByTag() {
    setLoading(true);
    fetchArticles(`tag=${tag}`).then((articles) => {
      setArticles(articles)
      setLoading(false);
    })
  }

  function handleSearchInputChange(e: any) {
    setTag(e.target.value)
  }

  function handleSearchButtonClick() {
    ! loading && fetchArticlesByTag()
  }

  function handleSearchInputKeyDown(e: any) {
    ! loading && e.key === ENTER_KEY && fetchArticlesByTag()
  }

  return (
    <>
      <header className="header">
        <div className="search">
          <input type="text" className="search-input"
                 onChange={handleSearchInputChange}
                 onKeyDown={handleSearchInputKeyDown}
          />
          <button className="btn-search">
            <span className="material-symbols-outlined search__icon" onClick={handleSearchButtonClick}>search</span>
          </button>
        </div>
      </header>
      <div className="container">
        <div className="list-article">
          {articles.map((article: any) =>
            <div key={article.id} className="article">
              <div className="article-header">
                <div className="author">
                  <img
                      src={article?.user?.profile_image}
                      alt="Author avatar"
                      className="author-avatar"
                  />
                  <div className="author-info">
                    <p className="author-name">{article?.user?.username}</p>
                    <p className="author-published">{formatDate(article?.published_at)}</p>
                  </div>
                </div>
              </div>
              <div className="article-body">
                <p className="article-title">{article?.title}</p>
                <ul className="article-tags">
                  {article.tag_list && article.tag_list.map((tag: string, id: any) =>
                      <li key={id} className="article-tag">
                        <a href="#" className="tag">
                          #{tag}
                        </a>
                      </li>
                  )}
                </ul>
              </div>
              <div className="article-footer">
                <div className="article-social">
                  <span className="social">
                    <span className="article-icon material-symbols-outlined">
                      add_reaction
                    </span>
                    <span>{article?.public_reactions_count} reactions</span>
                  </span>
                  <span className="social">
                  <span className="article-icon material-symbols-outlined">
                    chat_bubble
                  </span>
                  <span>{article?.comments_count} comments</span>
                  </span>
                </div>
                <div className="article-bookmark">
                  <span className="article-icon material-symbols-outlined">
                    bookmark
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}


function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {year: '2-digit', month: 'short', day: '2-digit'});
}

export default App
