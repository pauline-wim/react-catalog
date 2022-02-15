import React from "react";
// import { Link } from "react-router-dom";
import Catalog from "../catalog.json";

class Home extends React.Component {
  constructor() {
    super();

    // this.getFilm = this.getFilm.bind(this);
  }

  // getFilm() {
  //   Catalog.map((film) => {
  //     return (
  //       <div>
  //         <p>id: {this.props.match.params.id}</p>
  //         <p>title: {film.title}</p>
  //       </div>
  //     );
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Home</h1>
        {Catalog.map((film) => {
          return (
            <div>
              <p>id: {film.id}</p>
              <p>title: {film.title}</p>
            </div>
          );
        })}
        {/* <Link to="/film/:id">{this.getFilm}</Link> */}
      </div>
    );
  }
}

export default Home;
