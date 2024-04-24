export default function ArticleFooter({ reactions, comments }) {
  return (
    <div className="article-footer">
      <div className="article-social">
        <span className="social">
          <span className="article-icon material-symbols-outlined">
            add_reaction
          </span>
          <span>{reactions} reactions</span>
        </span>
        <span className="social">
          <span className="article-icon material-symbols-outlined">
            chat_bubble
          </span>
          <span>{comments} comments</span>
        </span>
      </div>
      <div className="article-bookmark">
        <span className="article-icon material-symbols-outlined">bookmark</span>
      </div>
    </div>
  )
}
