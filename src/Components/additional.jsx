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
                {isFavorited ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            </button>
        </div>
      
    );
  };

  export const bed = ()=>{
    return(
        <div>
            <div><Bed/> {jsonData.bed} beds</div>
            <div><Bath/> {jsonData.bathrooms} bathrooms</div>
            <div><Area/> {jsonData.area} m²</div>
        </div>
    );
  }
