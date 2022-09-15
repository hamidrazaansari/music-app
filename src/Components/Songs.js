import React from 'react'
import { useState, useEffect } from 'react';






function Songs() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getSong();
  }, [])

  function getSong() {

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ddc8e8efd9mshe24f8b64a35e505p1814a3jsne16af56ffe4f',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    fetch('https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US', options)
      .then(response => response.json())
      .then(response => {
console.log(response.tracks[6])
        setData(response.tracks)
      })
      .catch(err => console.error(err));
  }

  return (
    <div className='container float-end songs'>


      <h3 className='text'> RELEASED THIS WEAK  </h3><hr />

      <div className="d-flex  overflow">

        {
          data.map((item) => {

            return (
              <div className="card cardStyle " >
                <img src={item.images.background} className="card-img-top " alt="..." height="110px" />
                <div className="card-body p-0 text-center">
                  <p className="card-text ">{item.title}</p>
                </div>
              </div>

            )

          })
        }
      </div>







      <h3 className='text2'>  FEARURED  PLAYLIST </h3><hr className='hr2' />


      <div className="d-flex  overflow">

        {
          data.map((item) => {

            return (
              <div className="card cardStyle " >
                <img src={item.images.background} className="card-img-top " alt="..." height="110px" />
                <div className="card-body p-0 text-center">
                  <p className="card-text ">{item.title}</p>
                </div>
              </div>

            )

          })
        }
      </div>



    </div>






  )
}

export default Songs
