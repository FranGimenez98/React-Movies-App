import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding-top: 6rem;
`;

export const Grid = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  grid-gap: 2rem;

  @media(max-width:680px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;