import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const urlOne = "https://lanciweb.github.io/demo/api/actresses/"
  const urlTwo = "https://lanciweb.github.io/demo/api/actors/"
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);



  //carico dati all' caricamento della pagina 
  useEffect(() => {
    axios.get(urlOne)
      .then((resp) => {
        setActresses(resp.data);
        console.log(resp.data);
      })
    axios.get(urlTwo)
      .then((resp) => {
        setActors(resp.data);
        console.log(resp.data);
      })
  }, []);

  return (
    <>
      <header className='app-header'>
        <h1>Wonderful Cast</h1>

      </header>
      <div className="container">
        <h2 className="text-center mt-3">Actress:</h2>

        <div className="row">

          <div className="row g-3">
            {actresses.map((actress) => (
              <div className="col-4" key={actress.id}>
                <div className="card h-100 shadow-sm">
                  <img src={actress.image} className="card-img-top" alt={actress.name} />
                  <div className="card-body">
                    <h5 className="card-title mb-2">{actress.name}</h5>
                    <p className="card-text">{actress.birth_year}</p>
                    <p className="card-text">{actress.nationality}</p>
                    <p className="card-text">{actress.biography}</p>
                    <p className="card-text">Awards: <br />{actress.awards}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-center mt-3">actors:</h2>
        <div className="row">

          <div className="row g-3">
            {actors.map((actress) => (
              <div className="col-4" key={actress.id}>
                <div className="card h-100 shadow-sm">
                  <img src={actress.image} className="card-img-top" alt={actress.name} />
                  <div className="card-body">
                    <h5 className="card-title mb-2">{actress.name}</h5>
                    <p className="card-text">{actress.birth_year}</p>
                    <p className="card-text">{actress.nationality}</p>
                    <p className="card-text">{actress.biography}</p>
                    <p className="card-text">Awards: <br />{actress.awards}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
