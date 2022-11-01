import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie, func, isDelete, removeMovie }) => {
  return (
    <Card style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>

        <Card.Text>
          Rating: {movie?.imdbRating}
          <br />
          Year: {movie?.Year}
        </Card.Text>

        {isDelete ? (
          <div className="d-grid">
            <Button varient="danger" onClick={() => func(movie.imdbID)}>
              {" "}
              Delete{" "}
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <Button
              onClick={() => func({ ...movie, type: "happy" })}
              variant="danger"
            >
              Happy
            </Button>
            <Button onClick={removeMovie} variant="danger">
              Delete
            </Button>

            <Button
              onClick={() => func({ ...movie, type: "lazzy" })}
              variant="info"
            >
              Lazy
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
