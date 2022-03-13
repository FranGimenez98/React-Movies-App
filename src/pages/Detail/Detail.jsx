import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ORIGINAL_IMAGE } from "../../config/api";
import { getMovieDetails } from "../../store/actions";
import {
  Container,
  DetailContainer,
  Genre,
  Genres,
  H3,
  Image,
  Info,
  Left,
  Overview,
  Right,
  Span,
  Tagline,
  Title,
  Wrapper,
} from "./StyledDetail";

const Detail = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  const detailArray = [];
  detailArray.push(details);

  console.log(detailArray);

  return (
    <>
      {detailArray ? (
        detailArray.map((el, i) => (
          <Container key={i} background={ORIGINAL_IMAGE + el.backdrop_path}>
            <DetailContainer>
              <Wrapper>
                <Left>
                  <Image
                    src={ORIGINAL_IMAGE + el.poster_path}
                    alt="poster_image"
                  />
                </Left>
                <Right>
                  <Title>{el.title}</Title>
                  <Tagline>{el.tagline}</Tagline>

                  <Info>
                    <Overview>{el.overview}</Overview>
                    <Genres>
                      {el.genres?.map((g) => (
                        <Genre>{g.name}</Genre>
                      ))}
                    </Genres>
                    <H3>
                      Release: <Span>{el.release_date}</Span>
                    </H3>
                    <H3>
                      Duration: <Span>{el.runtime} minutes</Span>
                    </H3>
                  </Info>
                </Right>
              </Wrapper>
            </DetailContainer>
          </Container>
        ))
      ) : (
        <p>Hola</p>
      )}
    </>
  );
};

export default Detail;
