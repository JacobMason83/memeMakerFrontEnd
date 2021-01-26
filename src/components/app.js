import React, { useEffect, useState } from 'react';
import Meme from '../components/meme'
import axios from 'axios'

export default function App(){

  const [memes, setMemes] = useState([])
  
  useEffect(() => {
    fetch("https://jdm-meme-flask-api.herokuapp.com/memes")
      .then(res => res.json())
      .then(data => setMemes(data))
      .catch(err => console.error(err))
  }, [])

  const deleteMeme = id => {
    axios 
    .delete(`https://jdm-meme-flask-api.herokuapp.com/delete-meme/${id}`)    
    .then(() => setMemes(memes.filter((meme)=> meme.id !== id)))
    .catch(err => console.error(err))
  }

  const renderMemes = () => {
    return memes.map((meme) => {
     return (
       <Meme key={meme.id} {...meme} deleteMeme={deleteMeme} />
     )
    })
  }
  return (
      <div className='app'>
       {renderMemes()}
      </div>
    );
  
}
