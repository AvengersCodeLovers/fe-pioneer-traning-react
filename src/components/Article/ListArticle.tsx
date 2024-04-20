import data from '../../data.js'
import {ItemArticle} from "./ItemArticle.tsx";
export default function ListArticle() {
  const items = data.map((item, index) => <ItemArticle key={item.id} article={item}/>)
  return (
    <>
      <div className="list-article">{items}</div>
    </>
  )
}
