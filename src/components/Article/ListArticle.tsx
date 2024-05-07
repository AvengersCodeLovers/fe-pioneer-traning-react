import {ItemArticle} from "./ItemArticle.tsx";
import {useEffect, useState} from "react";
export default function ListArticle({ inputSearch }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get data from API
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?tag=${inputSearch}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [inputSearch]);

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    )
  }

  if (data.length === 0) {
    return (
      <>
        <div className="list-article">No Data</div>
      </>
    )
  }

  const items = data.map((item, index) => <ItemArticle key={item.id} article={item}/>)
  return (
    <>
      <div className="list-article">{items}</div>
    </>
  )
}
