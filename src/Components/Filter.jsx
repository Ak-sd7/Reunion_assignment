import "../Styles/Filter.css"

const Filter = ({ locationFilter, handleLocationInputChange, toggleFilter}) => {
  return (
    <div className="filter-it">
        <div>
            <h4> Street Location:</h4>
            <input
                type="text"
                placeholder="Enter Street location"
                value={locationFilter}
                onChange={handleLocationInputChange}
            />
        </div>
        <hr/>
        <div>
            <h4>City Location:</h4>
            <input
                type="text"
                placeholder="Enter City location"
                value={locationFilter}
                onChange={handleLocationInputChange}
            />
        </div>
        <hr/>
        <div>
            <h4>Price:</h4>
            <input
                type="text"
                placeholder="Enter Price"
                value={locationFilter}
                onChange={handleLocationInputChange}
            />
        </div>
        <hr/>
        <div>
            <h4>Bed Rooms:</h4>
            <input
                type="text"
                placeholder="Enter no. of beds"
                value={locationFilter}
                onChange={handleLocationInputChange}
            />
        </div>
        <hr/>
        <button onClick={toggleFilter}>Submit</button>
        </div>
  )
}

export default Filter