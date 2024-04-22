import ArticleTag from './ArticleTag'

export default function ArticleBody({ title, tags }) {
  return (
    <div className="article-body">
      <p className="article-title">{title}</p>
      <ul className="article-tags">
        {tags.map((tag) => (
          <ArticleTag key={tag} name={tag} />
        ))}
      </ul>
    </div>
  )
}
