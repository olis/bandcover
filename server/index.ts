import express from "express";

interface Song {
  title: string;
  group: string;
  key: string;
  bpm: number;
}

const songs: Song[] = [
  {
    title: "Jumpin' Jack Flash",
    group: "The Rolling Stones",
    key: "Bb",
    bpm: 137
  },
  {
    title: "Hard to Handle",
    group: "The Black Crows",
    key: "B",
    bpm: 103
  },
  {
    title: "Mustang Sally",
    group: "Wilson Pickett",
    key: "C",
    bpm: 110
  },
  {
    title: "Cocaine",
    group: "Eric Clapton",
    key: "A",
    bpm: 105
  },
  {
    title: "Ain't no Sunshine",
    group: "Bill Withers",
    key: "Em",
    bpm: 79
  },
  {
    title: "Whish You Were Here",
    group: "Pink Floyd",
    key: "G",
    bpm: 61
  }
];

const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hello World"));

app.get("/songs", (reag, res) => {
  res.send(songs);
});

app.listen(port, () =>
  // tslint:disable-next-line:no-console
  console.log(`SongCover server listening on port ${port}!`)
);
