import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./index.css"
import CardFilm from '../CardProps';
function CardForFilm() {
    const [data, setData] = useState([]);
            const baseUrl = "http://localhost:5000/"
    
            const datalar = async () => {
                try {
                    const response = await axios(baseUrl)
    
                    setData(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            
        useEffect(() => {
    
    datalar()
            
        }, [])
  return (
    <>
        <div className="row"> 
        {
     (data && data.map((item) => 
     
     <CardFilm image={item.image} title={item.title} description={item.description} category={item.category} />

   
               ))
               }
   </div>

    </>
  )
}

export default CardForFilm