import "../Styles/rent.css"
import Card from "../Components/Card"
import infoData from "../data/info.json"
import { useState } from "react";
import Filter from "../Components/Filter";

const Rent = () => {
  const maxData = 42;
  const data = infoData.slice(0, maxData);
  
  const [showFilter, setShowFilter] = useState(false);
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredData, setFilteredData] = useState(infoData);

  const handleLocationInputChange = (event) => {
    setLocationFilter(event.target.value);
    const filtered = infoData.filter((info) =>
      info.citi.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="m_compo">
      <div className="compo">
        <div className="top">
          <h2>Search Properties To Rent</h2>
        </div>
        <Filter
          locationFilter={locationFilter}
          handleLocationInputChange={handleLocationInputChange}
          toggleFilter={toggleFilter}
        />
        <div className="property">
            {
              showFilter? (filteredData.map((info, index)=>(
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
              ))):(data.map((info, index)=>(
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
              )))
            }
        </div>
      </div>
    </div>
  )
}

export default Rent