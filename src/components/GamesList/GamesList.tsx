import React from 'react'
import { Game } from '@/utils/endpoint'
import { GameCard } from '../index';

type GamesListProps = {
  games: Game[];
}

export const GamesList = ({ games }: GamesListProps) => {
  return (
    <div data-testid="gameList">
      {games.map((game) => (
        <GameCard game={{...game}} />
      ))}
    </div>
  )
}
