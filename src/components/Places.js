import { useEffect, useState } from "react";
import Place from "./Place";
import Loading from "./Loading";

const Places = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  
  function fetchTours() {
    setLoading(true)
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      setLoading(false)
      .then((data) => setData(data));
      
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

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
