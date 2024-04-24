import { ComponentProps, FC } from "react";
import { IPostDetail } from "../types/post";

interface IPostDetailProps extends ComponentProps<"div"> {
  post: IPostDetail;
}

const PostDetail: FC<IPostDetailProps> = ({ post, ...props }) => {
  return (
    <div className="article" {...props}>
      <div className="article-header">
        <div className="author">
          <img src={post.avatar} alt={post.title} className="author-avatar" />
          <div className="author-info">
            <p className="author-name">{post.username}</p>
            <p className="author-published">{post.publishedAt}</p>
          </div>
        </div>
      </div>
      <div className="article-body">
        <p className="article-title">{post.title}"</p>
        <ul className="article-tags">
          {post.tags.map((tag: string) => (
            <li key={tag} className="article-tag">
              <a href={tag} className="tag">
                {`#${tag}`}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="article-footer">
        <div className="article-social">
          <span className="social">
            <span className="article-icon material-symbols-outlined">
              add_reaction
            </span>
            <span>{post.reactions} reactions</span>
          </span>
          <span className="social">
            <span className="article-icon material-symbols-outlined">
              chat_bubble
            </span>
            <span>{post.comments} comments</span>
          </span>
        </div>
        <div className="article-bookmark">
          <span className="article-icon material-symbols-outlined">
            bookmark
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
