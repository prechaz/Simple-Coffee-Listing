import React, { useEffect, useState } from 'react'
import Card from '../../comonent/card/Card.jsx'
import style from './available.module.css'
import Loader from '../../comonent/loader/Loader.jsx'

function Available() {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true);
  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        const data = await res.json();
        console.log(data);
        setdata(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setloading(false);
      }
    }
    fetchdata();
  }, []);
    const availableProduct = data.filter((item)=> item.available)
    return (
        <>
        <div className={style.products}>
        {loading ? (
          <Loader/>
        ) : (
          availableProduct.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
       
            
        </>
    )
}

export default Available
