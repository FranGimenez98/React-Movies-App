import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Container = styled.div`
  height: 15rem;
  width: 100%;
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;
export const Wrapper = styled.div`
  text-align: center;
  min-width: 400px;
  display:flex;
  

  @media(max-width: 680px){
    min-width: 400px;
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-flow: column;
`

export const UL = styled.ul`
  margin-bottom: 10px;
  list-style: none
`;

export const LI = styled.li`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 1.3rem
`;

export const GitHub = styled(BsGithub)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
`;

export const LinkedIn = styled(BsLinkedin)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
  margin-left: 10px;
`;

export const Copyright = styled.span`
    color: ${(props) => props.theme.colors.primary};
`

export const Left = styled.div`
  flex: 3;
`
export const Right = styled.div`
  flex: 3;
`