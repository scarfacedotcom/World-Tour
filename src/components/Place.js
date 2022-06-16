import React, { useState } from "react";

function Place(props) {
  const image = props.place.image;
  const info = props.place.info;
  const price = props.place.price;
  const name = props.place.name;
  const id = props.place.id;
  const filteredTours = props.filteredTours;

  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="tour">
      <div className="tour-up">
        <img src={image} alt={name} />
      </div>
      <div className="tour-down">
        <h2>{name}</h2>
        <h3>{price}</h3>
        {showInfo ? (
          <p>
            {info}
            <span
              className="info"
              onClick={() => {
                setShowInfo(!showInfo);
                console.log(showInfo);
              }}
            >
              Show less
            </span>
          </p>
        ) : (
          <p>
            {info.slice(0, 199)}...
            <span
              className="info"
              onClick={() => {
                setShowInfo(!showInfo);
                console.log(showInfo);
              }}
            >
              Show more
            </span>
          </p>
        )}
        <button onClick={() => filteredTours(id)}>Not Interested</button>
      </div>
      
    </div>

  );

}


export default Place;
