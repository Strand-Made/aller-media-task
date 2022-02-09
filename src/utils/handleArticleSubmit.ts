import { getFromStorage, saveToStorage } from "../utils/localStorage";

const submitArticleChange = (
  input: string,
  width: string,
  image: string,
  id: string | undefined | null,
  link: string
) => {
  let storedArticles = getFromStorage("editedArticles");

  let findArticle = storedArticles.find((article: any) => article.id === id);

  if (!findArticle) {
    const articleToStore = {
      id,
      title: input,
      url: link,
      width,
      imageUrl: image,
    };
    storedArticles.push(articleToStore);
    saveToStorage(storedArticles, "editedArticles");
  } else {
    const index = storedArticles.indexOf(findArticle);
    console.log(index);

    if (index > -1) {
      storedArticles.splice(index, 1);
    }

    const articleToChange = {
      id,
      title: input,
      url: link,
      width,
      imageUrl: image,
    };
    storedArticles.push(articleToChange);

    saveToStorage(storedArticles, "editedArticles");
  }
};

export { submitArticleChange };
