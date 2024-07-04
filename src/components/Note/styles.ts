import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  text-align: left;

  width: 100%;
  border-radius: 10px;
  padding: 1.6rem 2rem;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[700]};
  `}
`;

export const Heading = styled.h3`
  margin-bottom: 2.4rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.big};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.gray[100]};
  `}
`;
