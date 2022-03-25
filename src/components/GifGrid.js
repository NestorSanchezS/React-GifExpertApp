import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


  const { data:images, loading} = useFetchGifs(category);

  
  return (

    <>
      <h3 className="title__category animate__rubberBand">{category}</h3> 

      {loading ? 'Loading' : null}

      <div className="container__card">
        {
          images.map( img => (
            <GifGridItem 
              key = {img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
     
  )
}
