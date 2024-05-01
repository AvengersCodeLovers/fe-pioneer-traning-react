import './App.css'
import 'material-symbols'
import { useState, useEffect } from 'react'

interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    user_id: number;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
  flare_tag: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  };
  organization: {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
  };
}

export default function App() {
  const [data, setData] = useState([])
  const fetchData = (filterTag: string) => {
    return fetch(`https://dev.to/api/articles?tag=${filterTag}`)
      .then(res => res.json())
      .then(d => setData(d))
  }

  useEffect(() => {
    fetchData('')
  }, [])

  const listArticles = data.map((article: Article) =>
    <div className="article" key={article.id}>
      <div className="article-header">
        <div className="author">
          <img
            src={article.user.profile_image}
            alt="Author avatar"
            className="author-avatar"
          />
          <div className="author-info">
            <p className="author-name">{article.user.username}</p>
            <p className="author-published">{
              new Intl.DateTimeFormat("en", {
                day: "2-digit",
                month: "short",
                year: "2-digit"
              }).format(Date.parse(article.published_at))
            }</p>
          </div>
        </div>
      </div>
      <div className="article-body">
        <p className="article-title">{article.title}</p>
        <ul className="article-tags">
          {article.tag_list.map((tag, index) =>
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
            <span>{article.public_reactions_count} reactions</span>
          </span>
          <span className="social">
            <span className="article-icon material-symbols-outlined">chat_bubble</span>
            <span>{article.comments_count} comments</span>
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
          <input type="text" className="search-input" onChange={(e) => fetchData(e.target.value)} />
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
