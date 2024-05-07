import formatDate from "../../Helpers.tsx";

export function ItemArticle(props) {
  const article = props.article;

  return <div className="article" key={article.id}>
    <div className="article-header">
      <div className="author">
        <img
          src={article.cover_image}
          alt="Author avatar"
          className="author-avatar"
        />
        <div className="author-info">
          <p className="author-name">{article.user.username}</p>
          <p className="author-published">{formatDate(article.published_at)}</p>
        </div>
      </div>
    </div>
    <div className="article-body">
      <p className="article-title">{article.title}</p>
      <ul className="article-tags">
        {article.tag_list.map((tag, index) => <li className="article-tag" key={index}><a href="#" className="tag">#{tag}</a></li>)}
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
}
