import "../Styles/Filter.css"

const Filter = ({ streetFilter, handleStreetInputChange, toggleFilter, handleCityInputChange, cityFilter, handleMinPriceChange, handleMaxPriceChange, minPrice, maxPrice, bedsFilter, handleBedsInputChange}) => {
  return (
    <div className="filter-it">
        <div>
            <h4> Street Location:</h4>
            <input
                type="text"
                placeholder="Enter Street location"
                value={streetFilter}
                onChange={handleStreetInputChange}
            />
        </div>
        <hr style={{height:"35px"}}/>
        <div>
            <h4>City Location:</h4>
            <input
                type="text"
                placeholder="Enter City location"
                value={cityFilter}
                onChange={handleCityInputChange}
            />
        </div>
        <hr style={{height:"35px"}}/>
        <div>
            <h4>Price:</h4>
            <input 
                style={{width:"100px"}}
                type="number" 
                placeholder="Min Price" 
                value={minPrice} 
                onChange={handleMinPriceChange} 
            />
            ⋯
            <input 
                style={{width:"100px"}}
                type="number" 
                placeholder="Max Price" 
                value={maxPrice} 
                onChange={handleMaxPriceChange} 
            />
        </div>
        <hr style={{height:"35px"}}/>
        <div>
            <h4>Bed Rooms:</h4>
            <input
                style={{width:"100px"}}
                type="number" 
                placeholder="No. of bedrooms" 
                value={bedsFilter} 
                onChange={handleBedsInputChange} 
            />
        </div>
        <hr style={{height:"35px"}}/>
        <button onClick={toggleFilter}>Submit</button>
        </div>
  )
}

export default Filter