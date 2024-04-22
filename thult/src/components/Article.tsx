
import "../index.css";

interface Props {
  username: string;
  publishedAt: Date;
  title: string;
  tags: string[];
  reactions: number;
  comments: number;
}[];


function Article(props: Props) {
    return (
        <div className="article">
            <div className="article-header">
                <div className="author">
                    <img
                        src={props.avatar}
                        alt="Author avatar"
                        className="author-avatar"
                    />
                    <div className="author-info">
                        <p className="author-name">{props.username}</p>
                        <p className="author-published">{props.publishedAt}</p>
                    </div>
                </div>
            </div>
            <div className="article-body">
                <p className="article-title">{props.title}</p>
                <ul className="article-tags">
                    <li className="article-tag">
                        <a href="#" className="tag">
                            {props.tags.map((item) => `#${item} `)}
                        </a>
                    </li>
                </ul>
            </div>
            <div className="article-footer">
                <div className="article-social">
                    <span className="social">
                        <span className="article-icon material-symbols-outlined">
                            add_reaction
                        </span>
                        <span>{props.reactions}</span>
                    </span>
                    <span className="social">
                        <span className="article-icon material-symbols-outlined">
                            chat_bubble
                        </span>
                        <span>{props.comments}</span>
                    </span>
                </div>
                <div className="article-bookmark">
                    <span className="article-icon material-symbols-outlined">bookmark</span>
                </div>
            </div>
        </div>
    );
}

export default Article;
