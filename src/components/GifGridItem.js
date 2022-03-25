import React from 'react'

export const GifGridItem = ({id, title,url}) => {

    console.log(id, title,url)
  return (
    <div className="card animate__rubberBand">
        <img className="card__img" src={url} alt={title}/>
        <p className="card__title animate__flash">{title}</p>
    </div>
  )
}
