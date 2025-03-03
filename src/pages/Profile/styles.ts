import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const Header = styled.header`
  padding: 4rem 14.4rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[900]};
  `}
`;

export const ToBack = styled(Link)`
  line-height: 0;
  padding: 1.4rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    color: ${theme.colors.gray[200]};
  `}
`;

export const Form = styled.form`
  --gutter: 1.6rem;

  width: 100%;
  max-width: calc(34rem + var(--gutter) * 2);

  padding-inline: var(--gutter);
  margin-inline: auto;
`;

export const Avatar = styled.div`
  --dimension: 18.6rem;

  position: relative;
  width: var(--dimension);
  height: var(--dimension);
  margin: calc(var(--dimension) / 2 * -1) auto 6.4rem;
`;

export const Placeholder = styled.div`
  --dimension: 18.6rem;

  position: relative;
  width: var(--dimension);
  height: var(--dimension);

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray[700]};
  `}

  > svg {
    width: 100%;
    height: 100%;

    ${({ theme }) => css`
      color: ${theme.colors.gray[900]};
    `}
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const Label = styled.label`
  width: 4.8rem;
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 4px;
  right: 4px;

  border-radius: 50%;
  cursor: pointer;

  > input {
    display: none;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.orange};

    > svg {
      color: ${theme.colors.gray[800]};
    }
  `}
`;
