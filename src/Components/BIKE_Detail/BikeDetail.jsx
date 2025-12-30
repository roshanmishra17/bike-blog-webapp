import '..//..//CSS/BikeDetail.css'
import Detail from './DETAILS'
export default function BikeDetails({bike,goBack}){

return (
    <section className="bike-detail">
      <button className="back-btn" onClick={goBack}>← Back</button>
      <div className="bike-image">
        <img src={bike.image} alt={bike.name} />
      </div>

      <div className="bike-info">
        <h2>{bike.name}</h2>
        <h4>{bike.brand}</h4>
        <p className="description">{bike.description}</p>

        <ul>
          <li><strong>Engine:</strong> {bike.engine}</li>
          <li><strong>Power:</strong> {bike.power}</li>
          <li><strong>Torque:</strong> {bike.torque}</li>
          <li><strong>Top Speed:</strong> {bike.topSpeed}</li>
          <li><strong>Mileage:</strong> {bike.mileage}</li>
          <li><strong>Weight:</strong> {bike.weight}</li>
          <li><strong>Seat Height:</strong> {bike.seatHeight}</li>
          <li><strong>Fuel Tank:</strong> {bike.fuelTankCapacity}</li>
          <li><strong>Braking:</strong> {bike.braking}</li>
          <li><strong>Price:</strong> {bike.price}</li>
        </ul>
      </div>
    </section>
  )
}