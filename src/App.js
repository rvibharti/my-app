import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Component/Cards'


function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [finalResult, setfinalResult] = useState("");
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime?q=&sfw')
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
  }, [])


  const filterCards = data.filter((ele) => {
    return (ele.title.toLowerCase().includes(search.toLowerCase()))
  }).map((ele) => <Cards
    key={ele.mal_id}
    url={ele.url}
    title={ele.title}
    images={ele.images.jpg.image_url}

  />)
  const MapResult = data.map((ele) => <Cards
    key={ele.mal_id}
    url={ele.url}
    title={ele.title}
    images={ele.images.jpg.image_url}

  />)

  function showResult() {
    if (search === "") {
      alert('plz enter correct search')
      setfinalResult(MapResult)
    } else {
      setfinalResult(filterCards);
    }
  }
  return (
    <>
      <div className="input-group mb-3 d-flex justify-content-center">
        <input type='text' className="form-control-sm" placeholder='Search here,  eg.Naruto' value={search} onChange={e => setSearch(e.target.value)} />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={showResult}>search</button>
        </div>
      </div>
      <div className='d-flex justify-content-center'  >
        Search your favorite anime!
      </div>
      <div className='container my-3' >
        <div className='row'>
          {finalResult}
        </div>

      </div>
    </>

  )
}

export default App
