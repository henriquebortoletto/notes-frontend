import { Link } from "react-router-dom";
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
  overflow-y: auto;
  padding-block: 3.8rem;
`;

export const Container = styled.div`
  --gutter: 1.6rem;

  width: 100%;
  max-width: calc(55rem + var(--gutter) * 2);
  padding-inline: var(--gutter);
  margin-inline: auto;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 3.6rem;
`;

export const HeadingTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const HeadingLink = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.larger};
    color: ${theme.colors.gray[200]};
    transition: color 0.2s;

    &:hover {
      text-decoration: underline;
      color: ${theme.colors.gray[100]};
    }
  `}
`;

export const Form = styled.form`
  > *:first-child {
    margin-bottom: 1.6rem;
  }
`;

export const SectionShared = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SectionLinks = styled(SectionShared)`
  flex-direction: column;
`;

export const SectionMarkers = styled(SectionShared)`
  flex-wrap: wrap;
  > * {
    flex: 1;
  }
`;
