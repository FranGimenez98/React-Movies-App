import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { ORIGINAL_IMAGE, W500_IMAGE } from "../../config/api";
import { getTrendingMovies } from "../../store/actions";
import { Card, Wrapper, Image, Container } from "./StyledHome";

const Home = () => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.trending);

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
    <Container>
        <Hero trending={trending} />
        <Movies />
        <Footer />
    </Container>
  );
};

export default Home;
