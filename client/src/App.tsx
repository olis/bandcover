import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Song from "./domain/Song";
import SongList from "./components/SongList";

const fetchSongs = async () => {
  const response = await fetch("http://localhost:8080/songs");
  const json = await response.json();

  return Array.of(json);
};

const App: React.FC = () => {
  const [songList, setSongList] = useState<Song[]>([]);

  useEffect(() => {
    fetchSongs().then(songs => setSongList(() => songs));
  });

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Song * Cover</h1>
          </div>
        </section>
        <SongList songs={songList}></SongList>
      </main>
      <footer className="page-footer text-muted bg-light">
        <div className="footer-copyright pt-4 pl-4">
          <p>(C) 2019 Oliver Schemmel</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
