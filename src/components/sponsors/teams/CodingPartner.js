import React, { useState } from 'react'
import Card from './Card'
import CodingPartnerdata from "./CodingPartner.json";
import './card_container.css'
function CodingPartner() {

  const [cards, setcard] = useState("");
  
  return (
    <div>
      <div className ="main_sponsors">
      <div className="flex_container_sponsors">
        {CodingPartnerdata.map((card) =>(
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

export default CodingPartner
