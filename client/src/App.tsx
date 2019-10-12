import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const cards = [];

  for (let i = 1; i <= 10; i++) {
    cards.push(
      <div key={i} className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Song {i}</h5>
            <h6 className="card-subtitle">as performed by Group{i}</h6>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Key: <span>C#</span>
            </li>
            <li className="list-group-item">BPM: 120</li>
          </ul>
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              nesciunt iusto pariatur assumenda, suscipit repellat molestias,
              quasi porro distinctio voluptatum impedit repellendus fugiat vel!
              Cumque libero odit quo dolorum laborum!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Song * Cover</h1>
          </div>
        </section>
        <div className="py-5">
          <div className="container">
            <div className="row">{cards}</div>
          </div>
        </div>
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
