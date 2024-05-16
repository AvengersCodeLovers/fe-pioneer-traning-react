import {sampleData} from '../data/mockData'
import { IPostDetail } from "../types/post-detail";
import PostDetail from '../component/PostDetail'
const  Home = () => {
    return (
        <div className="container">
            <div className="list-article">
                {sampleData.map((post: IPostDetail) => (
                    <PostDetail key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Home