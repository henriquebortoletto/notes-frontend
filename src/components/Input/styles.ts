import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding-inline: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[900]};

    &:focus-within {
      box-shadow: 0 0 0 2px ${theme.colors.gray[100]},
        0 0 0 6px rgba(255, 144, 0, 0.5);
    }

    > svg {
      color: ${theme.colors.gray[300]};
    }
  `}
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  padding-block: 2rem;

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    background-color: transparent;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      font-size: ${theme.font.sizes.small}
      color: ${theme.colors.gray[300]}
    }
  `}
`;
