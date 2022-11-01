import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "./CustomCard";

export const MovieList = ({ movieList }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
    console.log("loading 2.....");
  }, [movieList]);

  const selectCategory = (cat) => {
    cat === "all" && setDisplayMovie(movieList);
    cat === "happy" &&
      setDisplayMovie(movieList.filter((item) => item.type === "happy"));

    cat === "lazy" &&
      setDisplayMovie(movieList.filter((item) => item.type === "lazy"));
  };
  return (
    <div className="bg-dark py-5 rounded p-2 mt-5">
      <Row>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => selectCategory("all")} variant="primary">
              All
            </Button>
            <Button onClick={() => selectCategory("happy")} variant="danger">
              Happy
            </Button>
            <Button onClick={() => selectCategory("lazy")} variant="info">
              lazzy
            </Button>
          </ButtonGroup>

          <p className="mt-3"> {displayMovie.length} Movies Found!</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap justify-content-around gap-2">
          {/* {displayMovie.map((item, i) => (
            <CustomCard movie={item} />
          ))} */}
          {movieList.map((item, i) => (
            <CustomCard movie={item} isDelete={true} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
