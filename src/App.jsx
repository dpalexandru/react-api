import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const urlOne = "https://lanciweb.github.io/demo/api/actresses/"
  const urlTwo = "https://lanciweb.github.io/demo/api/actors/"
  const [actresses, setActresses] = useState([]);

  //chiamata axios per recuperare data
  const fatchData = () =>
    axios.get(urlOne).then((resp) => {
      setActresses(resp.data)
      console.log(actresses);
    })

  //carico dati all' caricamento della pagina 
  useEffect(() => {
    axios.get(urlOne)
      .then((resp) => {
        setActresses(resp.data);
        console.log(resp.data);
      })

  }, []);

  return (
    <>
      <h1>Hello World</h1>

    </>
  )
}

export default App
