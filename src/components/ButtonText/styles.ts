import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

import { ButtonTextProps } from ".";

const modifiers = {
  isActive: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
  `,
};

export const Wrapper = styled.button<Omit<ButtonTextProps, "$title">>`
  padding: 0.5rem;

  ${({ theme, $isActive }) => css`
    color: ${theme.colors.gray[200]};

    ${$isActive && modifiers.isActive(theme)}
  `}
`;
