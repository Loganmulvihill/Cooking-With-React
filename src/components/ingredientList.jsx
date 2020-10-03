import React from 'react';
import Ingredient from './ingredient';

export default function ingredientList( { ingredients }) {
const ingredientElements = ingredients.map(ingredient => {
  return <Ingredient key={ingredient.id}  {...ingredient} />
})
  return (
    <div>
        {ingredientElements}
    </div>
  )
}
