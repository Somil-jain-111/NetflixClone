
import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";

export default function Slider({movies}) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider title="trending" data={getMoviesFromRange(0,10)} />
      <CardSlider title="New Realeases" data={getMoviesFromRange(10,20)} />
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20,30)} />
      <CardSlider title="Popular on netflix" data={getMoviesFromRange(30,40)} />
      <CardSlider title="Actions movies" data={getMoviesFromRange(40,50)} />
      <CardSlider title="Epics" data={getMoviesFromRange(50,60)} />
    </Container>
    // <>
    // hey</>
  )
}

const Container = styled.div``;