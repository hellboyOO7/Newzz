import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import useStore from "@/hooks/useStore";
import ProgressBar from "../ProgressBar/ProgressBar";

const NewsCard = () => {
  const { articles, error } = useStore();

  const readMore = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  if (error) {
    return <div className="text-center text-red-600">Error: {error}</div>;
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <ProgressBar />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="w-[300px] h-[26.5rem] flex flex-col justify-between items-center"
          >
            <CardHeader>
              <div className="w-[280px] h-[180px] rounded-md overflow-hidden mt-[-15px]">
                <img
                  src={article.urlToImage}
                  alt={article.author || "News Image"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardTitle className="mt-3 h-[3rem] line-clamp-2">
                {article.title}
              </CardTitle>
              <CardDescription className="mt-3 h-[5rem] line-clamp-3">
                {article.description}
              </CardDescription>
            </CardHeader>
            <div className="w-full flex justify-end items-end p-2">
              <Button
                onClick={() => readMore(article.url)}
                className="w-[130px]"
              >
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
