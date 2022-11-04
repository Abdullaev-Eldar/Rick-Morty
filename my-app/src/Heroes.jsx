import React, { useState } from 'react';
import './App.css';



export default function Heroes() {
  const [value, setValue] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const btnHandler = (e) => {
    e.preventDefault();

    fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
      .then((response) => response.json())
      .then((data) => setValue(data.results))
      .catch((err) => console.error(err));
  };

  // useEffect(() => () => mp3(), [value]);
  return (
    <div>
      <form onSubmit={btnHandler} action="">
        <div className="input-group mb-3">
          <input value={input} onChange={inputHandler} type="text" style={{ background: 'none', color: 'white' }} className="form-control" placeholder="Введите имя героя" aria-label="Введите имя героя" aria-describedby="button-addon2" />
          <button onClick={btnHandler} className="btn btn-outline-secondary" type="button" id="button-addon2">Показать</button>
        </div>
      </form>
      <div className="container">
        <div className="row w-100">
          {value.map((el) => (
            <div className="col-3">
              <div key={el.id} className="card">
                <img src={el.image} className="card-img-mine" alt="..." />
                <div className="card-body">
                  <p className="card-text">{el.name}</p>
                  <p className={el.status === 'Alive' ? 'Alive' : 'Dead'}>{el.status}</p>
                  <p className="card-text">{el.species}</p>
                  <p className="card-text">{el.location.name}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
