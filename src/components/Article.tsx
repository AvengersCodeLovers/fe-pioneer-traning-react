const Article = ({ article }) => {
  return (
    <div className="article">
			<div className="article-header">
				<div className="author">
					<img
						src={article.avatar}
						alt="Author avatar"
						className="author-avatar"
					/>
					<div className="author-info">
						<p className="author-name">{article.username}</p>
						<p className="author-published">{article.publishedAt}</p>
					</div>
				</div>
			</div>
			<div className="article-body">
				<p className="article-title">{article.title}</p>
				<ul className="article-tags">
					{ article.tags.map((tag, index) => (
						<li key={index} className="article-tag">
							<a href="#" className="tag">#{tag}</a>
						</li>
					))}
				</ul>
			</div>
			<div className="article-footer">
				<div className="article-social">
					<span className="social">
						<span className="article-icon material-symbols-outlined"
							>add_reaction</span
						>
						<span>{article.reactions} reactions</span>
					</span>
					<span className="social">
						<span className="article-icon material-symbols-outlined"
							>chat_bubble</span
						>
						<span>{article.comments} comments</span>
					</span>
				</div>
				<div className="article-bookmark">
					<span className="article-icon material-symbols-outlined"
						>bookmark</span
					>
				</div>
			</div>
		</div>
  );
};

export default Article;