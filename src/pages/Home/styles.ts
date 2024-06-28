import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "header"
    "content";
`;
