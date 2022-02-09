import styled from "styled-components";

export interface IArticle {
  width: string;
}
const ArticleStyled = styled.article<IArticle>`
  background: var(--red-2);
  color: var(--red-1);
  width: 100%;
  height: fit-content;
  @media (min-width: 768px) {
    grid-column: ${(props) => props.width && `span ${props.width}`};
  }
`;

const ArticleLink = styled.a`
  display: flex;
  flex-direction: column;
`;

const ArticleImage = styled.img`
  object-fit: contain;
`;

const ArticleTitleContainer = styled.div`
  padding: 2rem 1rem;
`;

export { ArticleStyled, ArticleLink, ArticleImage, ArticleTitleContainer };
