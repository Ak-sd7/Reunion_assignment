import jsonData from "../data/data.json"
import "../Styles/Card.css"
import { Fav, Bathrooms, Rooms, Meter } from "./additional"


const Card = () => {
  return (
    <div>
        <div className="card">
        <img src={jsonData.imgurl}/>
        <div className="details">
            <div className="intro">
                <h2>${jsonData.price}<span style={{fontSize:"20px", color:"gray"}}>/month</span></h2>
                <h1>{jsonData.propName}</h1>
            </div> 
            <Fav/>
        </div>
        <div><p>{jsonData.address}</p></div>
        <hr/>
        <div className="add-ons">
            <Rooms/>
            <hr/>
            <Bathrooms/>
            <hr/>
            <Meter/>
            <hr/>
        </div>
        </div>
    </div>
  )
}

export default Card