import styled, { css } from "styled-components";

interface ButtonTextProps {
  $isActive?: boolean;
}

/** Verificar se é um button ou um link (a) */
export const Wrapper = styled.button<ButtonTextProps>`
  padding: 0.5rem;

  ${({ theme, $isActive }) => css`
    color: ${theme.colors.gray[200]};

    ${$isActive &&
    css`
      color: ${theme.colors.orange};
    `}
  `}
`;
