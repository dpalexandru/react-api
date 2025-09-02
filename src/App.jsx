import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

function App() {

  const urlOne = "https://lanciweb.github.io/demo/api/actresses/"
  const urlTwo = "https://lanciweb.github.io/demo/api/actors/"
  const [cast, setCast] = useState([])
  const fetchedRef = useRef(false);


  //carico dati all' caricamento della pagina 
  useEffect(() => {
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    axios.get(urlOne).then(resp => {
      setCast(prev => {
        const merged = [...prev, ...resp.data];
        merged.sort((a, b) => a.name.localeCompare(b.name));
        return merged;
      });
    });

    axios.get(urlTwo).then(resp => {
      setCast(prev => {
        const merged = [...prev, ...resp.data];
        merged.sort((a, b) => a.name.localeCompare(b.name));
        return merged;
      });
    });
  }, []);

  return (
    <>
      <header className='app-header'>
        <h1>Wonderful Cast</h1>

      </header>
      <div className="container">
        <h2 className="text-center mt-3">Actors:</h2>

        <div className="row g-3">
          {cast.map((person) => (
            <div className="col-12 col-sm-6 col-md-4" key={`${person.id}-${person.name}`}>
              <div className="card h-100 shadow-sm">
                <img src={person.image} className="card-img-top" alt={person.name} />
                <div className="card-body">
                  <h5 className="card-title mb-2">{person.name}</h5>
                  <p className="card-text">{person.birth_year}</p>
                  <p className="card-text">{person.nationality}</p>
                  <p className="card-text">{person.biography}</p>
                  <p className="card-text"><strong>Awards:</strong><br />{person.awards}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>

    </>
  )
}

export default App
