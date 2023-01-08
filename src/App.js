import React from "react";
import { Container } from "@material-ui/core";
import Content from "./Components/Content.tsx";
import Context from "./context.tsx";
import Topbar from "./Components/Topbar.tsx";
import getArticlesFromAPI from "./utils";
import FooterWrapper from "./Components/Footer.tsx";
import Header from "./Components/Header.tsx";
import "./App.css";

const App = () => {
  const [data, setData] = React.useState(null);
  const [fetchedData, setFetchedData] = React.useState(null);

  const getFetch = async () => {
    const articles = await getArticlesFromAPI();
    setData(articles);
    setFetchedData(articles);
  };

  React.useEffect(() => {
    getFetch();
  }, []);

  return (
    <Context.Provider value={data}>
      <Topbar setData={setData} data={fetchedData} />
      <Container sx={{ minHeight: "100vh" }}>
        <Header />
        <Content />
      </Container>
      <FooterWrapper />
    </Context.Provider>
  );
};

export default App;
