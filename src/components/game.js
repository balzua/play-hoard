import React from 'react';
import './styles/game.css';
import Platform from './platform';

export default function Game(props) {
  const genres = props.genres.join(', ');
  const platforms = props.platforms.map((platform, index) => 
    <Platform name={platform} key={index} />
  );
                                             
  return (
    <React.Fragment>
      <div className="game-title">
        <h3>{props.title}</h3>
      </div>
      <div className="game-img">
        <img src={props.image} alt="Game Box Art" />
      </div>
      <div className="game-info">
        <p>
          {props.description}
        </p>
        <ul>
          <li><b>Rating:</b> {props.rating}</li>
          <li><b>Platform(s): {platforms}</b> </li>
          <li><b>Genre:</b> {genres}</li>
          <li><b>Released:</b> {props.releaseDate}</li>
        </ul>
      </div>
    </React.Fragment>
  );
};