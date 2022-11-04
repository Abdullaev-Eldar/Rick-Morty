import React from 'react';
import { Link } from 'react-router-dom';

const load = require('audio-loader');
const play = require('audio-play');

function Main() {
  const mp3 = async () => {
    const sound = await load('Ryan Elder - Rick and Morty Main Title Theme Song (1 сезон) (dizer.net).mp3');
    play(sound, {
      start: 0,
      end: 25,
    });
  };
  const clickHandler = () => {
    mp3();
  };
  return (
    <div className="wrap">
      <Link to="/heroes">
        <button onClick={clickHandler} type="button" className="button-main">Вошли и вышли</button>
        {' '}
      </Link>
    </div>
  );
}

export default Main;
