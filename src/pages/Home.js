import React from "react";
import { Link } from "react-router-dom";
import Catalog from "../catalog.json";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {Catalog.map((film, i) => {
          return (
            <div key={i}>
              <p>
                <Link to={`/film/${film.id}`}>
                  {film.id} {film.title}
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
