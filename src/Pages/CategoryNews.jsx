import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  const [categoryName, setCategoryName] = useState("All News");

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((categories) => {
        if (id === "0") {
          setCategoryName("All News");
        } else {
          const matchedCategory = categories.find(
            (cat) => cat.id === parseInt(id)
          );
          setCategoryName(matchedCategory?.name || "Unknown Category");
        }
      });

    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredData);
      return;
    }
    const filteredData = data.filter((news) => news.category_id == id);
    setCategoryNews(filteredData);
  }, [id, data]);

  return (
    <div>
      <h2 className="text-xl font-semibold text-accent">
        {categoryName}({categoryNews.length})
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard news={news} key={news.id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
