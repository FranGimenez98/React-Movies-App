import styled from "styled-components";

export const Container = styled.div`
  border-radius: 2rem;
  min-height: 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 13rem;

  @media(max-width: 680px){
    width: 10rem;
  }
`;
export const Image = styled.img`
  border-radius: 2rem;
  height: 20rem;
  margin-bottom: 10px;
  cursor: pointer;

  @media(max-width: 680px){
    height: 16rem;
  }
`;

export const Title = styled.span`
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
