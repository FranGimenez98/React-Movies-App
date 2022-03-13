import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const InfoContainer = styled.div`
  /* width: 100%; */
  min-width: 1200px;
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

  @media(max-width: 680px){
    flex-direction: column-reverse;
    min-width: auto;
  }
`;

export const Left = styled.div`
  flex: 4;
  display: flex;
  flex-flow: column nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;

  @media(max-width: 680px){
    flex: 4;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 11rem;
  margin-bottom: 15px;

  @media (max-width: 680px) {
    margin: 1rem 1rem;
    text-align: center;
  }
`;
export const Overview = styled.p`
  color: ${(props) => props.theme.colors.black};
  margin-left: 11rem;
  transform: translateY(0);

  @media (max-width: 680px) {
    margin: 1rem 1rem;
    text-align: center;
    font-size: 1.3rem;
  }
`;

export const Right = styled.div`
  flex: 4;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 680px){
    flex: none;
  }
`;

export const Image = styled.img`
  height: 25rem;
  border-radius: 20px;
  margin-right: 18rem;
  /* position: relative; */
  @media (max-width: 680px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  @media(max-width: 680px){
    
  }
`;
// export const Button = styled.button`
//   padding: 5px;
//   width: 6rem;
//   height: 2.5rem;
//   background-color: ${props => props.theme.colors.secondary};
//   border: none;
//   border-radius: 20px;
//   color: white;
//   cursor: pointer;
//   transition: 0.2s ease-in-out;
//   position: absolute;
//   margin-top: 23.5rem;
//   margin-left: 5.1rem;
//   font-weight: 700;

//   &:hover{
//     background-color: ${props => props.theme.colors.primary};
//   }
// `

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 11rem;
  margin-top: 0.8rem;
  gap: 0.8rem;

  @media (max-width: 680px) {
    margin: 1rem 1rem;
    justify-content: center;
  }
`;

export const ButtonWatch = styled.button`
  padding: 5px;
  width: 7rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: ${(props) => props.theme.colors.secondary};
    transition: all 500ms ease;
    z-index: -1;
  }

  &.btn:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    box-shadow: 0 0 5px ${(props) => props.theme.colors.secondary},
      0 0 5px ${(props) => props.theme.colors.secondary};
  }
`;

export const ButtonTrailer = styled.button`
  padding: 5px;
  width: 7.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: ${(props) => props.theme.colors.primary};
    transition: all 500ms ease;
    z-index: -1;
  }

  &.btn:hover {
    background-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 5px ${(props) => props.theme.colors.primary},
      0 0 5px ${(props) => props.theme.colors.primary};
  }
`;
