import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  border-radius: 10px;
  padding: 1.6rem;
  transition: all 0.2s;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.gray[800]};
    background-color: ${theme.colors.orange};
  `}

  &:not(:disabled):hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
