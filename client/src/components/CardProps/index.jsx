import React from 'react'
import "./index.css"
function CardFilm({image,title,description,category}) {
  return (
   

<div className="card-film col-lg-3 col-md-4 col-12 ">
    <div className="img-filcard">
        <img src={image} alt="" />
    </div>
    <p className="price-carfil">{category.join(" ")}</p>
<h3 className="title-carfil">{title}</h3>
<span className="price-carfil">{description}</span>

</div>

   
  )
}

export default CardFilm