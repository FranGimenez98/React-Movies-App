import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../../components/Card/Cards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { API_KEY2, ORIGINAL_IMAGE } from "../../config/api";
import { Container, Grid, Image } from "./StyledSearchedMovies";

const SearchedMovies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const params = useParams();

  const getSearched = async (name) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${name}&${API_KEY2}`
    );
    setSearchedMovies(res.data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  console.log(searchedMovies);

  return (
    <Container>
      <Grid>
        {searchedMovies?.map((el) => (
          <Cards
            image={ORIGINAL_IMAGE + el.poster_path}
            title={el.title}
            key={el.id}
            id={el.id}
          />
        ))}
      </Grid>
      <Footer />
    </Container>
  );
};

export default SearchedMovies;

{
  /* <Image src={ORIGINAL_IMAGE + el.poster_path} alt={el.title} />
            <span>{el.title}</span>
          </Card> */
}
