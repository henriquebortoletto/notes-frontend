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
