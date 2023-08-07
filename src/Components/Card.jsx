import jsonData from "../data/data.json"
import "../Styles/Card.css"
import { Fav } from "./additional"
import Bed from '@mui/icons-material/BedOutlined';
import Bath from '@mui/icons-material/BathtubOutlined';
import Area from '@mui/icons-material/CropOriginalOutlined';

const Card = () => {
  return (
    <div>
        <div className="card">
        <img src={jsonData.imgurl}/>
        <div className="details">
            <div>
                <h1>${jsonData.price}/<span style={{fontSize:"20px"}}>month</span></h1>
                <p>{jsonData.address}</p>
            </div> 
            <Fav/>
        </div>
        <hr/>
        <div className="add-ons">
            <div><Bed/> {jsonData.bed} beds</div>
            <div><Bath/> {jsonData.bathrooms} bathrooms</div>
            <div><Area/> {jsonData.area} m²</div>
        </div>
        </div>
    </div>
  )
}

export default Card