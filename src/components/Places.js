import { useEffect, useState } from "react";
import Place from "./Place";

const Places = () => {
  const [data, setData] = useState(null);
  
  function fetchTours() {
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const filteredTours = (id) => {
    const newTours = data.filter((place) => place.id !== id)
    setData(newTours);
  }
  
  if (data.length == 0) {
    return(
      <div>
      <h1>No More Tours</h1>
      <button onClick={() => fetchTours()}>Refresh</button>
    </div>
    )
  }

  return (
    <div>
      <h1>Our Tours</h1>
      {data &&
        data.map((place) => {
          return <Place key={place.id} place={place} filteredTours={filteredTours}/>;
        })}
        
    </div>
  );
};

export default Places;
