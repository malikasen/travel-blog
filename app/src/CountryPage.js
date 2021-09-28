import * as React from "react";

const Destination = ({destination}) => {
 return (
       <div key={destination.id}>
          <p>{destination.destination}</p>
        </div>
 )
}

const CountryPage = ({countryName, destinations}) => {
  console.log("country name", countryName)
  console.log("destinations", destinations)
  return (
    <div>
      <h2>{countryName}</h2>
      <h3>{destinations[0].title}</h3>
      <p>{destinations[0].postdate}</p>
      <p>{destinations[0].overview}</p>
      {destinations.map(destination => {
        return <Destination destination={destination}/>
      })}
    </div>
  )
}

export default CountryPage;