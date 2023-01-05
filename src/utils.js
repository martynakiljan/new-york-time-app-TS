
const getArticlesFromAPI = async () => {
  const keyNews = "deaf2793187d47c196a034b6922fb51c";
  const API_URL_NEWS = `https://newsapi.org/v2/everything?sources=bbc-news&apiKey=${keyNews}`;

  return await fetch(API_URL_NEWS)
    .then((res) => res.json())
    .then((res) => {
      return res.articles;
    })
    .catch((error) => console.warn(error));
};

export default getArticlesFromAPI;
