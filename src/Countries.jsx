import React, { useEffect, useState } from 'react'
import styles from "./Countries.module.css"

export default function Countries() {

    const [data, setData] = useState([]);

    const getCountriesData = async () => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const countries = await res.json();
            setData(countries);

        } catch(err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCountriesData();
    }, [])

  return (
    <div className={styles.flag}>
      {data.map((item => {
        return (
            <div className={styles.image}>
                <img src={item.flags.png} alt={item.name.common} width={300} height={200}/>
                <p>{item.name.common}</p>
            </div>
        )
      }))}
    </div>
  )
}
