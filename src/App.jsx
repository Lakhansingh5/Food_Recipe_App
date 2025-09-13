import { useEffect, useState } from 'react'
import './App.css'
import FoodItem from './Component/FoodItem'

function App() {

    const [search,setSearch] = useState("")
    const[MyMeal,setMyMeal] = useState()

    useEffect(() => {
        fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=a`)
            .then(res => res.json())
            .then(data => {
                setMyMeal(data.meals);
            })
            .catch(error => {
                console.error("Error fetching initial meals:", error);
            });
    }, []); 


    const searchMeal = (e)=>{
      if(e.key=="Enter")
        {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json())
        .then(data=>{
            setMyMeal(data.meals)
            setSearch("")
        })
    }
}
  return (
    <>
    <div className='main' >
        <div className='heading'>
          <h1>Search Your Food Recipe</h1>
          <h4>Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish</h4>
          <div className='searchBox'>
            <input type="search" className='search-bar' placeholder='Search Your Food' onChange={(e)=>setSearch(e.target.value)} value={search} onKeyUp={searchMeal} />
          </div>
          <div className='container'> 
            {
                (MyMeal == null) ? <p className='notFound'>Not Found</p> : MyMeal.map((res)=>{ return(<FoodItem data={res}/>)})
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
