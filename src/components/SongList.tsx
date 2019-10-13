import React from "react";
import Song from "../domain/Song";

interface Props {
  songs: Song[];
}

const MessageList: React.FunctionComponent<Props> = ({ songs }) => {
  const cards = songs.map(song => {
    return (
      <div key={song.id} className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{song.title}</h5>
            <h6 className="card-subtitle">as performed by {song.artist}</h6>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Key: <span>{song.key}</span>
            </li>
            <li className="list-group-item">BPM: {song.bpm}</li>
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
  });

  console.log(cards);
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </div>
  );
};

export default MessageList;
