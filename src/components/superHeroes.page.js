import axios from "axios";
import { useEffect, useState } from "react"

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/superHeroes').then((res) => {
      setData(res.data);
      setIsLoading(false);
    })
  }, [])

  if(isLoading) {
    return <h2>Loading...</h2>
  }

    return (
      <>
        <h2>Super Heros Page</h2>
        {
          data.map((hero, index) => {
            return <div key={index}>{hero.name}</div>
          })
        }
      </>
    )
  }
  