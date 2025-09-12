import React from 'react'

const FoodItem = (getFood) => {
    console.log(getFood.data)
  return (
    <>
    <div className='card'>
        <img src={getFood.data.strMealThumb} alt="food" />
        <div className='info'>
            <h2>{getFood.data.strMeal}</h2>
            <p>{getFood.data.strArea} food</p>
           
        </div>
        <div className='recipe'>
            <h2>Recipe</h2>
             <p>{getFood.data.strInstructions}</p>
            <img src={getFood.data.strMealThumb} alt="" />
            <a href={getFood.data.strSource}>Watch Video </a>
        </div>
    </div>
    </>
  )
}

export default FoodItem