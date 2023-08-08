import jsonData from "../data/data.json"
import "../Styles/Card.css"
import { Fav, Bathrooms, Rooms, Meter } from "./additional"


const Card = ({image_id, street, citi, bed, bath, sqft, price}) => {
  function removeNumbers(inputString) {
    if (typeof inputString !== 'string') {
      return ''; // Handle non-string input
  }
    return inputString.replace(/[0-9]/g, '');
}
  return (
    <div className="card-container">
        <div className="card">
        <img src={image_id}/>
        <div className="details">
            <div className="intro">
                <h3>${price}<span style={{fontSize:"17px", color:"gray"}}>/month</span></h3>
                <h1>{removeNumbers(street)}</h1>
                {/* <h1>Hello</h1> */}
            </div> 
            <Fav/>
        </div>
        <div className="para"><p>{citi}</p></div>
        <hr/>
        <div className="add-ons">
            <Rooms
              bed = {bed}
            />
            <hr style={{height:"25px"}}/>
            <Bathrooms
              bath = {bath}
            />
            <hr style={{height:"25px"}}/>
            <Meter
              sqft = {sqft}
            />
        </div>
        </div>
    </div>
  )
}

export default Card