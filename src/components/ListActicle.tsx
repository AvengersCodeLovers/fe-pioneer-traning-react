import sampleData from "./../api/data.ts"
import { Article } from "./Article.tsx";

export default function ListArticle() {
  const items = sampleData.map((item) => <Article key={item.id} article={item}/>)
  return (
    <>
      <div className="list-article">{items}</div>
    </>
  )
}
