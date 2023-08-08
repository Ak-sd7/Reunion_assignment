import "../Styles/rent.css"
import Card from "../Components/Card"
import infoData from "../data/info.json"
import { useState } from "react";

const Rent = () => {
  const maxData = 42;
  const data = infoData.slice(0, maxData);
  
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="m_compo">
      <div className="compo">
        <div className="top">
          <h2>Search Properties To Rent</h2>
        </div>
        <div className="filter-it">
          <h3>Location</h3>
          <h3>When</h3>
          <h3>Price</h3>
          <h3>Property Type</h3>
          <button onClick={toggleFilter}>Submit</button>
        </div>
        <div className="property">
            {
              data.map((info, index)=>(
                <Card
                  key={index}
                  showFilter={showFilter}
                  toggleFilter={toggleFilter}
                  street={info.street}
                  image_id={info.image_id}
                  bed={info.bed}
                  bath={info.bath}
                  citi={info.citi}
                  sqft={info.sqft}
                  price = {info.price}
                />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Rent