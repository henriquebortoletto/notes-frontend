import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.larger};
    font-weight: ${theme.font.weight.regular};
    color: ${theme.colors.gray[200]};
    border-bottom: 1px solid ${theme.colors.gray[700]};
  `}
`;
