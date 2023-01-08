import React from "react";

type SourceType = {
  id: string;
  name: string;
};

export type ArticlesType = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: SourceType;
};

const Context = React.createContext<ArticlesType[]>(null);

export default Context;
