import React from "react";
import {
  Container,
  Copyright,
  GitHub,
  Left,
  LI,
  LinkedIn,
  Right,
  SocialsWrapper,
  Title,
  UL,
  Wrapper,
} from "./StyledFooter";

const Footer = () => {
  return (
    <Container id="footer">
      <Wrapper>
        {/* 
        <SocialsWrapper>
          
        </SocialsWrapper>

        */}
        <Left>
          <Title>Movies</Title>
        </Left>
        <Right>
          <UL>
            <LI>
              GitHub{" "}
              <a href="https://github.com/FranGimenez98">
                <GitHub />
              </a>
            </LI>
            <LI>
              LinkedIn{""}
              <a href="https://www.linkedin.com/in/francisco-gimenez-5419b3218/">
                <LinkedIn />
              </a>
            </LI>
          </UL>
        </Right>
      </Wrapper>
      {/* <Copyright>Copuright </Copyright>  */}
    </Container>
  );
};

export default Footer;
