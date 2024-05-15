import React from 'react'
import Square from '../Square/Square'
import Keyboard from '../Keyboard/Keyboard'

interface BoardProps {
    board: string[]
}

const Board: React.FC<BoardProps> = (props) => {
  const { board } = props  
  return (
    <>
      <div className="__board">
        {board.map((item, index) => {
            return (
                <div key={index}>
                  <Square val={item} squareIdx={index} />
                </div>
            )
        })}
      </div>
      <div className="keyboard">
        <Keyboard />
      </div>
    </>
  )
}

export default Board