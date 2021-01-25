import React, { useEffect, useState } from 'react';
import Meme from '../components/meme'

export default function App(){

  const [memes, setMemes] = useState([])
  
  useEffect(() => {
    fetch("http://jdm-meme-flask-api.herokuapp.com/memes")
      .then(res => res.json())
      .then(data => setMemes(data))
      .catch(err => console.error(err))
  }, [])

  const renderMemes = () => {
    return memes.map((meme) => {
     return (
       <Meme key={meme.id} {...meme} />
     )
    })
  }
  return (
      <div className='app'>
       {renderMemes()}
      </div>
    );
  
}
