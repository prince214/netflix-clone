import React from "react";
import "./App.css";
import Row from "./Row.js";
import Banner from "./Banner.js";
import requests from "./request.js";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        playing={false}
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        playing={false}
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        playing={false}
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        playing={false}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        playing={false}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        playing={false}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        playing={false}
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
