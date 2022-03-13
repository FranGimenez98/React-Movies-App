import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* background-color: ${(props) => props.theme.colors.white}; */
`;

export const Popular = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;

  @media(max-width: 680px){
    margin-top: 3rem;
  }
`;

export const Wrapper = styled.div`
  padding: 3rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 54%
  );

  @media(max-width: 680px){
    padding: 0.5rem;
  }
`;

export const Card = styled.div`
  border-radius: 2rem;
  min-height: 20rem;
  margin-bottom: 4rem;
  
  @media(max-width: 680px){
    margin-bottom: 2rem;
  }
`;
export const Image = styled.img`
  border-radius: 2rem;
  height: 17rem;
  margin-bottom: 10px;
  cursor: pointer;

  @media(max-width: 680px){
    height: 15rem;
    font-size: 1.5rem;
  }
`;

export const Title = styled.span`
  margin-top: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-left: 1px;
  @media(max-width: 680px){
    font-size: 1.3rem;

  }
`;
