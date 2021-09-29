import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const Destination = ({destination}) => {
 return (
       <div key={destination.id}>
          <p>{destination.destination}</p>
          <div>
            <img className="photo" src={destination.imgurl} alt={"picture of " + destination.destination} style={{maxWidth: "100%"}}></img>
          </div>
          <p>{destination.description}</p>
        </div>
 )
}

const CountryPage = ({countryName, destinations}) => {
  return (
    <div>
      <div className="countryPage">
        <h2>{countryName}</h2>
        <h3>{destinations[0].title}</h3>
        <p>{destinations[0].postdate}</p>
        <p>{destinations[0].overview}</p>
        <div>
          <img className="photo" src={destinations[0].imageurl} alt={"picture of " + countryName} style={{maxWidth: "100%"}}></img>
        </div>
        {destinations.map(destination => {
          return <Destination destination={destination}/>
        })}
      </div>
      <a className="more" href="#">Read more</a>
    </div>
  )
}

export default CountryPage;