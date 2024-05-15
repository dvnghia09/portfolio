import { NextPage } from "next"
import React from 'react';
import Heading from '../components/game/Heading/Heading';
import Board from '../components/game/Board/Board';
import { useSelector } from "react-redux";
import { rootState } from '../interface';
import Navbar from '@/components/Navbar'

const Game: NextPage = () => {
    const board = useSelector((state: rootState) => state.board.board)  
  return (
    <>
        <Navbar />
        <div className="app-game pt-24">
          <Heading type="h1" text="Game Wordiee" />
          <Heading type="subtitle" text="Anorther Wordle Clone"/>
          <div className="board-container">
              <Board board={board} />
          </div>
        </div>
    </>
  )
}

export default Game;
