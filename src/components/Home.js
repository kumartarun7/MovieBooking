import React from 'react'
import { useEffect, useState } from "react";
import Card from './Card';

const Home = () => {
    const [Data, setData] = useState([]); //array to store the data fetch
    useEffect(() => {
      const fetchdata = async () => {
        const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const data = await res.json();
        console.log(data);
        setData(data);
      };
      fetchdata();
    }, []);


  return (
    <>
    <div className="cardcontainer">
    {Data.map((item) => {
      if (item.show.image != null) {
        return (
          <Card
            name={item.show.name}
            image={item.show.image.medium}
            rating={item.show.rating.average}
          />
        );
      } else {
        return null;
      }
    })}
  </div>
</>
  )
}

export default Home
