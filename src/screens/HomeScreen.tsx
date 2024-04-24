import { FC } from "react";
import { samplePosts } from "../mocks/data";
import { IPostDetail } from "../types/post";
import PostDetail from "../components/PostDetail";

const HomeScreen: FC = () => {
  return (
    <div className="container">
      <div className="list-article">
        {samplePosts.map((post: IPostDetail) => (
          <PostDetail key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
