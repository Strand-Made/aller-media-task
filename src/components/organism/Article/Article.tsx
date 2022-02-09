import { useState } from "react";
import { submitArticleChange } from "../../../utils/handleArticleSubmit";

import Button from "../../atom/Button/Button";
import Form from "../../atom/Form/Form";
import { Input } from "../../atom/Input/Input";
import {
  ArticleImage,
  ArticleLink,
  ArticleStyled,
  ArticleTitleContainer,
} from "./Article.style";

export type TArticle = {
  image: string;
  title: string;
  width: string;
  id: string | undefined | null;
  link: string;
};

const Article = ({ title, width, image, id, link }: TArticle) => {
  const [titleVal, setTitleVal] = useState(title);
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    console.log(showInput);

    setShowInput(!showInput);
  };

  const inputHandler = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <ArticleStyled width={width}>
      <ArticleLink title={link} href={link}>
        <ArticleImage loading="lazy" src={image} alt={title} />
      </ArticleLink>
      <ArticleTitleContainer>
        {showInput ? (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <p>Previous title: {titleVal}</p>
            {input.length < 5 && (
              <p>title should be longer than 5 characters</p>
            )}
            <label htmlFor="title">
              Article title
              <Input
                name="title"
                type="text"
                value={input}
                onChange={inputHandler}
              />
            </label>
            <Button
              type="submit"
              onClick={(e) => {
                if (input.length > 5) {
                  setTitleVal(input);
                  toggleInput();
                }
                submitArticleChange(input, width, image, id, link);
              }}
              variant="primary"
            >
              Save
            </Button>
            <Button type="button" variant="secondary" onClick={toggleInput}>
              Cancel
            </Button>
          </Form>
        ) : (
          <h3>{titleVal}</h3>
        )}
      </ArticleTitleContainer>

      {!showInput && (
        <Button type="button" variant="secondary" onClick={toggleInput}>
          Edit title
        </Button>
      )}
    </ArticleStyled>
  );
};

export default Article;
