import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const DetailContainer = styled.div`
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5802696078431373) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  padding-top: 4rem;

  @media(max-width: 680px){
    flex-flow: column nowrap;
  }
`;

export const Left = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-start;

  @media(max-width: 680px){
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Right = styled.div`
  flex: 3;

  @media(max-width: 680px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    text-align: center;
  }
`;

export const Image = styled.img`
  height: 30rem;
  border-radius: 20px;

  @media(max-width: 680px){
    display: none;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media(max-width: 680px){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 3.2rem;
`;

export const Tagline = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
`;

export const H3 = styled.h3`
  color: white;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Span = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: white;
`;

export const Overview = styled.p`
  margin: 0.5rem 0 0.5rem 0;
  color: #fff;

  @media(max-width: 680px){
    margin: 1rem;
  }
`;

export const Genres = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0.5rem;
`;

export const Genre = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;
