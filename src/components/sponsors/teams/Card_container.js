import React, { useState } from 'react'
import Card from './Card'
import Sponsors from "./sponsors.json";
import './card_container.css'
function Card_container() {

  const [cards, setcard] = useState("");
  
  return (
    <div>
      <div className ="main_sponsors">
      <div className="flex_container_sponsors">
        {Sponsors.map((card) =>(
          <Card
          imgurl = {card.imgurl}
          redirect = {card.redirect}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Card_container
