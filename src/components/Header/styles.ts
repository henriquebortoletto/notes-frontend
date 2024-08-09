import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  grid-area: header;
  width: 100%;
  padding: 1.7rem 6.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray[700]};
  `}
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:focus {
    box-shadow: none;
  }
`;

export const Avatar = styled.div`
  width: 7rem;
  height: 7rem;
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
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray[200]};
  `}
`;

export const UserName = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.gray[100]};
  `}
`;

export const Logout = styled.button`
  line-height: 0;
  padding: 1rem;

  > svg {
    ${({ theme }) => css`
      font-size: ${theme.font.sizes.bigger};
      color: ${theme.colors.gray[200]};
    `}
  }
`;
