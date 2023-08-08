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
                <h3>${jsonData.price}<span style={{fontSize:"17px", color:"gray"}}>/month</span></h3>
                <h1>{jsonData.propName}</h1>
            </div> 
            <Fav/>
        </div>
        <div style={{paddingLeft:"20px", paddingBottom:"10px"}}><p>{jsonData.address}</p></div>
        <hr/>
        <div className="add-ons">
            <Rooms/>
            <hr style={{height:"25px"}}/>
            <Bathrooms/>
            <hr style={{height:"25px"}}/>
            <Meter/>
        </div>
        </div>
    </div>
  )
}

export default Card