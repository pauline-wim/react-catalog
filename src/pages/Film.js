import React from "react";
// JSON
import Catalog from "../catalog.json";

class Film extends React.Component {
  constructor() {
    super();

    // this.getFilm = this.getFilm.bind(this);
  }

  render() {
    return (
      <article>
        <h1>Film</h1>
        <p>id: {this.props.match.params.id}</p>
        <p>
          <span>Title:</span>{" "}
          {Catalog.map((film) => {
            return (
              <div>
                <p>id: {this.props.match.params.id}</p>
                <p>title: {film.title}</p>
              </div>
            );
          })}
        </p>
      </article>
    );
  }
}

export default Film;
