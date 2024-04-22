import ArticleBody from './ArticleBody'
import ArticleFooter from './ArticleFooter'
import ArticleHeader from './ArticleHeader'

export default function Article(props) {
  const { avatar, username, publishedAt, title, tags, reactions, comments } =
    props

  return (
    <div className="article">
      <ArticleHeader
        avatar={avatar}
        username={username}
        publishedAt={publishedAt}
      />
      <ArticleBody title={title} tags={tags} />
      <ArticleFooter reactions={reactions} comments={comments} />
    </div>
  )
}
