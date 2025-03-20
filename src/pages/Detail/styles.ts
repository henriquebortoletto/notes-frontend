import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Main = styled.main`
  grid-area: content;
  overflow-y: scroll;
  padding-block: 6.4rem;
`;

export const Container = styled.div`
  --gutter: 1.6rem;
  width: 100%;
  max-width: calc(55.4rem + var(--gutter) * 2);
  padding-inline: var(--gutter);
  margin-inline: auto;

  display: flex;
  flex-direction: column;

  > button {
    align-self: end;
  }
`;

export const Heading = styled.section`
  margin: 6.4rem 0 5rem;
`;

export const HeadingTitle = styled.h1`
  margin-bottom: 1.6rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const HeadingText = styled.p`
  line-height: 130%;
  text-align: justify;

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
  `}
`;

export const Links = styled.ul`
  list-style: none;
`;

export const Link = styled.li`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const Item = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
  `}
`;

export const EmptyContainer = styled.div`
  width: 100%;
  max-width: calc(55.4rem + var(--gutter) * 2);
  padding-inline: var(--gutter);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.p`
  margin-bottom: 3.2rem;

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.regular};
  `}
`;
