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
    return (
      <article>
        <h1>Film</h1>
        <p>id: {pageID}</p>
        <div key={Catalog[pageID - 1].id}>
          <p>
            <span>Title:</span> {Catalog[pageID - 1].title}
          </p>
          <p>
            <span>Director:</span> {Catalog[pageID - 1].director}
          </p>
          <p>
            <span>Actors:</span>{" "}
          </p>
          <ul>
            {Catalog[pageID - 1].stars.map((el, i) => {
              return <li key={i}>{el}</li>;
            })}
          </ul>
          <img src={Catalog[pageID - 1].image} alt="film poster" />
          <p>
            <span>Description:</span> {Catalog[pageID - 1].description}
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
