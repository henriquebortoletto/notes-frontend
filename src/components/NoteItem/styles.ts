import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

const modifiers = {
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray[900]};
    > button {
      color: ${theme.colors.red};
    }
  `,
  enabled: (theme: DefaultTheme) => css`
    border: 2px dashed ${theme.colors.gray[300]};
    > button {
      color: ${theme.colors.orange};
    }
  `,
};

export const Wrapper = styled.div<{ $isNewItem?: boolean }>`
  display: flex;
  align-items: center;

  border-radius: 10px;
  padding-inline: 2rem 1.5rem;

  ${({ theme, $isNewItem }) => css`
    ${!$isNewItem && modifiers.disabled(theme)};
    ${$isNewItem && modifiers.enabled(theme)};
  `}
`;

export const Input = styled.input`
  border: none;
  background: transparent;

  flex: 1;
  padding-block: 2rem;

  &:focus {
    box-shadow: none;
  }

  ${({ theme }) => css`
    font-family: ${theme.font.family.secondary};
    color: ${theme.colors.white};

    &::placeholder {
      font-family: ${theme.font.family.primary};
      color: ${theme.colors.gray[300]};
    }
  `}
`;

export const Button = styled.button`
  line-height: 0;
  padding: 0.5rem;
`;
