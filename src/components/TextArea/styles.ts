import styled, { css } from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  resize: none;

  border-radius: 10px;
  min-height: 15rem;

  padding: 2rem;
  margin-bottom: 3.4rem;

  ${({ theme }) => css`
    color: ${theme.colors.gray[100]};
    background-color: ${theme.colors.gray[900]};
  `}
`;
