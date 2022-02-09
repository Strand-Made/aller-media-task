import { useEffect, useState } from "react";
import { apiUrl } from "./api/api";
import axios from "axios";
import GlobalStyles from "./styles/GlobalStyles";
import Article, { TArticle } from "./components/organism/Article/Article";
import ArticleGrid from "./components/layout/ArticleGrid/ArticleGrid";
import Container from "./components/layout/Container/Container";
import Navbar from "./components/layout/Navbar/Navbar";
import findArticleId from "./utils/findArticleId";
import { clearStorage, getFromStorage } from "./utils/localStorage";
import Button from "./components/atom/Button/Button";

function App() {
  const [articles, setArticles] = useState<TArticle[]>([]);
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "ERROR">("IDLE");
  useEffect(() => {
    const getData = async () => {
      setStatus("LOADING");
      try {
        const res = await axios.get(apiUrl);
        const { data } = res;
        if (!data) {
          setStatus("ERROR");
        }

        setStatus("IDLE");
        const articleArray = processArticleArray(data);

        setArticles(articleArray);
      } catch (err: unknown) {
        console.log(err);

        setStatus("ERROR");
      }
    };
    getData();
    const processArticleArray = (data: []) => {
      let articleArray: TArticle[] = [];
      const storage = getFromStorage("editedArticles");

      data.flat().forEach((row: any) => {
        const { columns } = row;
        columns.forEach((column: any) => {
          let newCol = { ...column, id: findArticleId(column.url) };
          const findIfExist = storage.find(
            (article: TArticle) => article.id === newCol.id
          );
          if (findIfExist) {
            newCol = findIfExist;
          }
          articleArray.push(newCol);
        });
      });
      return articleArray;
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Container>
        <h1>Aller Media Interview Task by Stian</h1>
        {status === "ERROR" && <p>An error has occured</p>}
        {status === "LOADING" && <p>Loading articles....</p>}
        <Button
          onClick={(e) => {
            clearStorage("editedArticles");
          }}
          variant="primary"
          type="button"
        >
          Clear storage
        </Button>
        <ArticleGrid>
          {articles.map((article: any) => {
            const { url, title, imageUrl, width } = article;

            let id = findArticleId(url);
            let modifiedImage = `${imageUrl}&width=600&height=600`;
            return (
              <Article
                key={id}
                id={id}
                title={title}
                link={url}
                image={modifiedImage}
                width={width}
              />
            );
          })}
        </ArticleGrid>
      </Container>
    </>
  );
}

export default App;
