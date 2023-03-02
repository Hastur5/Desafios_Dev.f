import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Juego } from './components/Juego';

function App() {
  const [ juegos, setJuegos] = useState([]);

  useEffect(() => {

     axios
     .get('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=aoLiOh6bw1')
     .then(response => {
      setJuegos(response.data.games);
     })
  

  },[]);

  console.log(juegos)

  //el array vacio de arriba se agrega para evitar que la funcion se siga ejecutando.

  return (
    <div className="column">
     <div className="columns is-mobile is-multiline is-centered">
      {
        juegos.map ((juego) => {
          return (<Juego key={juego.id} name={juego.name} image={juego.images.small}></Juego>)
        })
      }
     </div>
    </div>
  )
}

export default App
