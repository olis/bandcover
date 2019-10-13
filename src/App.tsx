import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Backend from "./domain/Backend";
import Song from "./domain/Song";
import SongList from "./components/SongList";

const App: React.FC = () => {
  const [songList, setSongList] = useState<Song[]>([]);

  useEffect(() => {
    fetch(`${Backend.getURL()}/songs`).then(response => {
      response.json().then(json => {
        console.log("useEffect");
        setSongList(json);
      });
    });
  }, []);

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
