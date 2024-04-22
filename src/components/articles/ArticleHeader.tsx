export default function ArticleHeader({ avatar, username, publishedAt }) {
  return (
    <div className="article-header">
      <div className="author">
        <img src={avatar} alt="Author avatar" className="author-avatar" />
        <div className="author-info">
          <p className="author-name">{username}</p>
          <p className="author-published">
            {new Date(publishedAt).toLocaleDateString('en-us', {
              weekday: undefined,
              year: '2-digit',
              month: 'short',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </div>
  )
}
