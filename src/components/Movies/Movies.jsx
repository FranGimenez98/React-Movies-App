import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Container,
  Image,
  Popular,
  Title,
  Wrapper,
} from "../../components/Movies/StyledMovies";
import { W500_IMAGE } from "../../config/api";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../store/actions";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popular);
  const upcomingMovies = useSelector((state) => state.upcoming);
  const topRatedMovies = useSelector((state) => state.topRated);

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, [dispatch]);

  return (
    <Container id="movies">
      <Wrapper>
        <Popular>Popular Movies </Popular>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: "free",
            perPage: 6,
            gap: "2rem",
            breakpoints: {
              640: {
                perPage: 2,
                gap: "10px",
              },
            },
          }}
        >
          {popularMovies?.map((el, i) => (
            <SplideSlide key={i}>
              <Card>
                <Link to={`/movie/${el.id}`}>
                  <Image src={W500_IMAGE + el.poster_path} />
                </Link>
                <Title>{el.title}</Title>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
        <Popular>Upcoming Movies</Popular>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: "free",
            perPage: 6,
            gap: "2rem",
            breakpoints: {
              640: {
                perPage: 2,
                gap: "10px",
              },
            },
          }}
        >
          {upcomingMovies?.map((el, index) => (
            <SplideSlide key={index}>
              <Card>
                <Link to={`/movie/${el.id}`}>
                  <Image src={W500_IMAGE + el.poster_path} />
                </Link>
                <Title>{el.title}</Title>
              </Card>
            </SplideSlide>
          ))}
        </Splide>

        <Popular>Top Rated Movies</Popular>
        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: "free",
            perPage: 6,
            gap: "2rem",
            breakpoints: {
              640: {
                perPage: 2,
                gap: "10px",
              },
            },
          }}
        >
          {topRatedMovies?.map((el, index) => (
            <SplideSlide key={index}>
              <Card>
                <Link to={`/movie/${el.id}`}>
                  <Image src={W500_IMAGE + el.poster_path} />
                </Link>
                <Title>{el.title}</Title>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </Container>
  );
};

export default Movies;
