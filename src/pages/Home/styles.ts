import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: min-content min-content 1fr 8rem;
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

export const Search = styled.section`
  grid-area: search;
  padding: 6.4rem 6.4rem 8.4rem;
`;

export const Content = styled.section`
  grid-area: content;
  padding-inline: 6.4rem;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
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
