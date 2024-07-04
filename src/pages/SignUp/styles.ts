import { Link } from "react-router-dom";
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

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.massive};
    color: ${theme.colors.orange};
  `}
`;

export const Description = styled.p`
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

export const SignInLink = styled(Link)`
  margin: 12.4rem auto 0;
  width: fit-content;

  ${({ theme }) => css`
    color: ${theme.colors.orange};

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const Background = styled.section`
  flex: 1;
  background: url(/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
