import styled, { css } from "styled-components";

export const Wrapper = styled.span`
  text-align: center;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 1.4rem;

  &:not(:last-child) {
    margin-right: 0.6rem;
  }

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.tiny};
    color: ${theme.colors.gray[900]};
    background-color: ${theme.colors.orange};
  `}
`;
