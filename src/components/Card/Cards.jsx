import React from "react";
import { Link } from "react-router-dom";
import { Container, Image, Title } from "./StyledCard";


const Cards = ({ image, title, id }) => {
  return (
    <Container>
      <Link to={`/movie/${id}`}>
        <Image src={image} alt="image_dog" />
      </Link>
      <Title>{title}</Title>
    </Container>
  );
};

export default Cards;
