import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: min-content 128px 1fr 8rem;
  grid-template-areas:
    "brand header"
    "menu search"
    "menu content"
    "note content";
`;

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[900]};
    border-bottom: 1px solid ${theme.colors.gray[700]};
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.big};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.orange};
  `}
`;

export const Aside = styled.aside`
  grid-area: menu;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[900]};
  `}
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 6.4rem 1.6rem;
`;

export const Item = styled.li`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

export const Search = styled.div`
  grid-area: search;
`;

export const Content = styled.div`
  grid-area: content;
`;

export const NewNote = styled.button`
  grid-area: note;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.larger};
    color: ${theme.colors.gray[900]};
    background-color: ${theme.colors.orange};

    > svg {
      color: ${theme.colors.gray[900]};
    }
  `};
`;
