import React from 'react'

function Search() {

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ddc8e8efd9mshe24f8b64a35e505p1814a3jsne16af56ffe4f',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
      };
      
      fetch('https://shazam.p.rapidapi.com/auto-complete?term=kiss%20the&locale=en-US', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  return (
    <div>
        <input type="text"  />

 jfjfjfjfj
      
    </div>
  )
}

export default Search
