import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

function App() {

  const urlOne = "https://lanciweb.github.io/demo/api/actresses/"
  const urlTwo = "https://lanciweb.github.io/demo/api/actors/"
  const [cast, setCast] = useState([])
  const [search, setSearch] = useState("")
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

      {/* * S E A R C H * */}
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
          <h2 className="mb-0">Actors:</h2>

          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search by name"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>

        {/* * L I S T  * */}
        <div className="row g-3">
          {cast
            .filter(person =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
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
