import React from 'react'
import { Game } from '@/utils/endpoint'
import { GameCard } from '../index';

import styles from "./styles.module.css";

type GamesListProps = {
  games: Game[];
}

export const GamesList = ({ games }: GamesListProps) => {
  return (
    <div className={styles.list} data-testid="gameList">
      {games.map((game) => (
        <GameCard game={{...game}} key={game.id}/>
      ))}
    </div>
  )
}
