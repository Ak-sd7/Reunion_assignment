import "../Styles/rent.css"
import Card from "../Components/Card"
import infoData from "../data/info.json"
import { useState } from "react";
import Filter from "../Components/Filter";

const Rent = () => {
  const maxData = 100;
  const data = infoData.slice(0, maxData);

  const [showFilter, setShowFilter] = useState(false);
  const [streetFilter, setStreetFilter] = useState("");
  const [filteredData, setFilteredData] = useState(infoData);
  const [cityFilter, setCityFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedsFilter, setBedsFilter] = useState("");

  function removeNumbers(input) {
    if (typeof input !== 'string') {
      return '';
    }
      return input.replace(/[0-9]/g, '');
  }

  const handleStreetInputChange = (event) => {
    const newStreetFilter = event.target.value;
    setStreetFilter(event.target.value);
    const filtered = infoData.filter((info) =>
        removeNumbers(info.street).toLowerCase().includes(newStreetFilter.toLowerCase())
    );
    setFilteredData(filtered);
  };


  const handleCityInputChange = (event) => {
    setCityFilter(event.target.value);
    const filtered = infoData.filter((info) =>
      info.citi.toLowerCase().includes(cityFilter.toLowerCase())
    );
    setFilteredData(filtered);
  };


  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };
  
  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleBedsInputChange = (event) => {
    setBedsFilter(event.target.value);
  };

  const applyFilters = (info) => {
    let priceInRange = true;

    if (minPrice !== "" && maxPrice !== "") {
      priceInRange = parseInt(info.price) >= parseInt(minPrice) && parseInt(info.price) <= parseInt(maxPrice);
    }

    return (
      info.street.toLowerCase().includes(streetFilter.toLowerCase()) &&
      info.citi.toLowerCase().includes(cityFilter.toLowerCase()) && priceInRange
      &&
      (bedsFilter === "" || info.bed === bedsFilter)
    );
  };

  const filteredResults = filteredData.filter(applyFilters);
  const handleSubmit = () => {
    const filtered = infoData.filter(applyFilters);
    setFilteredData(filtered);
    setShowFilter(true); // Show filtered results after submit
  };

  return (
    <div className="m_compo">
      <div className="compo">
        <div className="top">
          <h2>Search Properties To Rent</h2>
        </div>
        <Filter
          streetFilter={streetFilter}
          cityFilter = {cityFilter}
          minPrice={minPrice}
          maxPrice={maxPrice}
          bedsFilter={bedsFilter}
          handleMinPriceChange={handleMinPriceChange}
          handleMaxPriceChange={handleMaxPriceChange}
          handleStreetInputChange={handleStreetInputChange}
          handleCityInputChange = {handleCityInputChange}
          handleBedsInputChange={handleBedsInputChange}
          toggleFilter={handleSubmit}
        />
        <div className="property">
            {
              showFilter? (filteredResults.map((info, index)=>(
                <Card
                  key={index}
                  street={info.street}
                  image_id={info.image_id}
                  bed={info.bed}
                  bath={info.bath}
                  citi={info.citi}
                  sqft={info.sqft}
                  price = {info.price}
                />
              ))
              ):(data.map((info, index)=>(
                <Card
                  key={index}
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
