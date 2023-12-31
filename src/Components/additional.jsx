import { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Bed from '@mui/icons-material/BedOutlined';
import Bath from '@mui/icons-material/BathtubOutlined';
import Area from '@mui/icons-material/CropOriginalOutlined';

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

  export const Rooms = ({bed})=>{
    return(
        <div className='cc'>
            <Bed/> 
            <div style={{paddingLeft:"3px"}}>{bed} beds</div>
        </div>
    );
  }
  export const Bathrooms = ({bath})=>{
    return(
        <div className='cc'>
            <Bath/> 
            <div style={{paddingLeft:"3px"}}>{bath} bathrooms</div>
        </div>
    );
  }
  export const Meter = ({sqft})=>{
    return(
        <div className='cc'>
            <Area/> 
            <div style={{paddingLeft:"3px"}}>{sqft} m²</div>
        </div>
    );
  }
  
