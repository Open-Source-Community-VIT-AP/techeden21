import React, { useState } from 'react'
import Card from './Card'
import PlatinumSponsorsdata from "./PlatinumSponsors.json";
import './card_container.css'
function PlatinumSponsors() {

  const [cards, setcard] = useState("");
  
  return (
    <div>
      <div className ="main_sponsors">
      <div className="flex_container_sponsors">
        {PlatinumSponsorsdata.map((card) =>(
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

export default PlatinumSponsors
