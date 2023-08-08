import { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Bed from '@mui/icons-material/BedOutlined';
import Bath from '@mui/icons-material/BathtubOutlined';
import Area from '@mui/icons-material/CropOriginalOutlined';
import jsonData from "../data/data.json"

export const Fav = () => {
    const [isFavorited, setIsFavorited] = useState(false);
  
    const favHandler = () => {
      setIsFavorited(!isFavorited);
    };
  
    return (
        <div className="favButton">
            <button onClick={favHandler} >
                {isFavorited ? <FavoriteOutlinedIcon style={{fontSize:"35px"}} /> : <FavoriteBorderOutlinedIcon style={{fontSize:"35px"}}/>}
            </button>
        </div>
      
    );
  };

  export const Rooms = ()=>{
    return(
        <div className='cc'>
            <Bed/> 
            <div style={{paddingLeft:"3px"}}>{jsonData.bed} beds</div>
        </div>
    );
  }
  export const Bathrooms = ()=>{
    return(
        <div className='cc'>
            <Bath/> 
            <div style={{paddingLeft:"3px"}}>{jsonData.bathrooms} bathrooms</div>
        </div>
    );
  }
  export const Meter = ()=>{
    return(
        <div className='cc'>
            <Area/> 
            <div style={{paddingLeft:"3px"}}>{jsonData.area} m²</div>
        </div>
    );
  }
  
// "imgurl":"https://img.freepik.com/free-vector/cute-house_23-2147512078.jpg?q=10&h=200",
