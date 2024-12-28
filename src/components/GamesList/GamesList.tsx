import React from 'react'
import { Game } from '@/utils/endpoint'
import { GameCard, Loader } from '../index';

import styles from "./styles.module.css";

type GamesListProps = {
  games: Game[];
}

export const GamesList = ({ games }: GamesListProps) => {
  if(games?.length === 0) return <Loader />

  return (
    <div className={styles.list} data-testid="gamesList">
      {games?.map((game) => (
        <GameCard game={{...game}} key={game.id}/>
      ))}
    </div>
  )
}
