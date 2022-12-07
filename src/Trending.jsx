import React from 'react'
import './Trending.css'

function Trending() {
  return (
    <div>
        <div className="header">
          <h3>Trending</h3>
          <h4>Here's what people are loving</h4>
        </div>
        <div className="card">
            <img src={"src/assets/ready-imgs/1.png"} alt="" />
            <div className="info">
                <h4>Boyfriend Jeans</h4>
                <h4>$59.99</h4>
            </div>
            <button>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default Trending