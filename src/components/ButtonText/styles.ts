import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const modifiers = {
  isActive: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
  `,
};

export const Wrapper = styled.button<{ $isActive?: boolean }>`
  padding: 0.5rem;

  ${({ theme, $isActive }) => css`
    color: ${theme.colors.gray[200]};

    ${$isActive && modifiers.isActive(theme)}
  `}
`;
