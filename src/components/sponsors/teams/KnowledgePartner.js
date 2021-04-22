import React, { useState } from 'react'
import Card from './Card'
import KnowledgePartnerdata from "./KnowledgePartner.json";
import './card_container.css'
function KnowledgePartner() {

  const [cards, setcard] = useState("");
  
  return (
    <div>
      <div className ="main_sponsors">
      <div className="flex_container_sponsors">
        {KnowledgePartnerdata.map((card) =>(
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

export default KnowledgePartner
