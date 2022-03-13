import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { ORIGINAL_IMAGE, W500_IMAGE } from "../../config/api";
import {
  ButtonWatch,
  Buttons,
  ButtonTrailer,
  Image,
  ImageContainer,
  InfoContainer,
  Left,
  Overview,
  Right,
  Title,
  Wrapper,
} from "./StyledHero";

const Hero = ({ trending }) => {
  return (
    <>
      <Splide
        options={{
          perPage: 1,
          arrows: false,
          pagination: false,
          gap: 0,
          height: "100vh",
          // autoplay: true,
          interval: 3000,
          speed: 500,
          start: 4,
          rewind: true,
          rewindSpeed: 1000,
          breakpoints: {
            680: {
              width: '100vw',
            },
          },
        }}
      >
        {trending?.map((el, i) => (
          <SplideSlide key={el.id}>
            <Wrapper background={ORIGINAL_IMAGE + el.backdrop_path} >
              <InfoContainer id="home">
                <Left>
                  <Title>{el.title}</Title>
                  <Overview>{el.overview}</Overview>
                  <Buttons>
                    <Link to={`/movie/${el.id}`}>
                      <ButtonWatch className="btn">WATCH NOW</ButtonWatch>
                    </Link>
                    <ButtonTrailer className="btn">WATCH TRAILER</ButtonTrailer>
                  </Buttons>
                </Left>
                <Right>
                  <ImageContainer>
                    <Image src={W500_IMAGE + el.poster_path} />
                    {/* <Button>More Info</Button> */}
                  </ImageContainer>
                </Right>
              </InfoContainer>
            </Wrapper>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Hero;
