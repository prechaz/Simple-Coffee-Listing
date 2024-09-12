import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import Card from "../../comonent/card/Card";
import Loader from "../../comonent/loader/Loader";
function Home() {

  const [data, setdata] = useState([]);
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

  return (
    <>
      <div className={style.products}>
        {loading ? (
          <Loader />
        ) : (
          data.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </>
  );
}

export default Home;
