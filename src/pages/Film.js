import React from "react";
import { Link } from "react-router-dom";
// JSON
import Catalog from "../catalog.json";

class Film extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    const pageID = this.props.match.params.id;

    const film = Catalog.find((film) => {
      return film.id.toString() === this.props.match.params.id.toString();
    });

    return (
      <article>
        <h1>Film</h1>
        <p>id: {pageID}</p>
        <div key={film.id}>
          <p>
            <span>Title:</span> {film.title}
          </p>
          <p>
            <span>Director:</span> {film.director}
          </p>
          <p>
            <span>Actors:</span>{" "}
          </p>
          <ul>
            {film.stars.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </ul>
          <img src={film.image} alt="film poster" />
          <p>
            <span>Description:</span> {film.description}
          </p>
        </div>
        <button>
          <Link to="/">Back to Homepage</Link>
        </button>
      </article>
    );
  }
}

export default Film;
