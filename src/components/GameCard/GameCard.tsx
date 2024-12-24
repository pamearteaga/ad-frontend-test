import React from 'react'

export const GameCard = ({game}: any) => {
  const {name, id} = game;
 
  return (
    <div>
      <p key={id}>{name}</p>
    </div>
  )
}
