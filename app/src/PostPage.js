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

const PostPage = ({countryName, destinations}) => {
  return (
    <div>
      <div className="postPage">
        <h3>{destinations[0].title}</h3>
        <h3>{countryName}</h3>
        <p>{destinations[0].postdate.substring(0,10)}</p>
        <p>{destinations[0].overview}</p>
        <div>
          <img className="photo" src={destinations[0].imageurl} alt={"picture of " + countryName} style={{maxWidth: "100%"}}></img>
        </div>
        {destinations.map(destination => {
          return <Destination destination={destination}/>
        })}
      </div>
    </div>
  )
}

export default PostPage;