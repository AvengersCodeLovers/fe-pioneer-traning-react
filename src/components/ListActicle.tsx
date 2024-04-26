import { useState, useEffect } from 'react';
import { Article } from "./Article.tsx";

interface ListArticleProps {
  searchTag: string;
}

function ListArticle({ searchTag }: ListArticleProps) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?tag=${searchTag}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTag]);

  const apiData = data ? data : [];
  const items = apiData.map((item: any) => <Article key={item.id} article={item}/>)
    return (
      <>
        <div className="list-article">{items}</div>
      </>
    )
}

export default ListArticle;
