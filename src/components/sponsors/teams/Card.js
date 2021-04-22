import React from "react";
import'./card.css'

function card({imgurl , name}) {
  return (
    <div>
      <div className="container_sponsors">
        <img
          // src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          src = {imgurl}
        />
      </div>
    </div>
  );
}

export default card;
