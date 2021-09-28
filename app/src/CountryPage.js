import * as React from "react";

const CountryPage = ({countryName, destinations}) => {
  return (
    <div>
      <h2>{countryName}</h2>
      {destinations.map(destination => {
        return destination.destination;
      })}
    </div>
  )
}

export default CountryPage;