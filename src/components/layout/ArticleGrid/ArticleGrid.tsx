import { ReactNode } from "react";
import styled from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

const ArticleGridStyled = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  grid-auto-flow: dense;
  gap: 1rem;
  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

interface IArticleGrid {
  children: ReactNode;
}

const ArticleGrid = ({ children }: IArticleGrid) => {
  return <ArticleGridStyled>{children}</ArticleGridStyled>;
};

export default ArticleGrid;
