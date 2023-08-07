import "../Styles/rent.css"
import Card from "../Components/Card"
 
const Rent = () => {
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
          <button>Submit</button>
        </div>
        <div className="property">
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default Rent