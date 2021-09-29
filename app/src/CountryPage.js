import * as React from "react";

import "./App.css";

const Destination = ({destination}) => {
 return (
       <div key={destination.id}>
          <p>{destination.destination}</p>
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
        {destinations.map(destination => {
          return <Destination destination={destination}/>
        })}
      </div>
      <a className="more" href="#">Read more</a>
    </div>
  )
}

export default CountryPage;