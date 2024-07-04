import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Box = styled.section`
  text-align: center;
  padding-inline: 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.massive};
    color: ${theme.colors.orange};
  `}
`;

export const Text = styled.p`
  margin-bottom: 4.8rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray[200]};
  `}
`;

export const Login = styled.h2`
  margin-bottom: 4.8rem;

  ${({ theme }) => css`
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const Form = styled.form`
  div:not(:first-child) {
    margin-top: 0.8rem;
  }

  button {
    margin-top: 2.4rem;
  }
`;

export const Link = styled.a`
  margin-top: 12.4rem;

  ${({ theme }) => css`
    color: ${theme.colors.orange};
  `}
`;

export const Background = styled.section`
  flex: 1;
  background: url(/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
