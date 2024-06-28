import styled, { css } from "styled-components";

/** Verificar se é um button ou um link (a) */
export const Wrapper = styled.button`
  padding: 0.5rem;

  ${({ theme }) => css`
    color: ${theme.colors.orange};
  `}
`;
