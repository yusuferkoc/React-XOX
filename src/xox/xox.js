import React, {useState} from 'react'
import './xox.css'

const XOX = () => {
    const[turn,setTurn] = useState('X');
    const [cells,setCells] = useState(Array(9).fill(''))
    const [winner,setWinner] = useState();


    const checkWinner = (squares) => {
          let combos = {
            accross: [
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            dia: [
                [0,4,8],
                [2,4,6]
            ]
        };

        for(let combo in combos){
            combos[combo].forEach((pattern) => {
              if (
                squares[pattern[0]] === '' ||
                squares[pattern[1]] === '' ||
                squares[pattern[2]] === ''
              )
              {
                
              }  
              else if (
                squares[pattern[0]]=== squares[pattern[1]]&&
                squares[pattern[1]] === squares[pattern[2]])
                {
                     setWinner(squares[pattern[0]]);
                      
                }
            });
        }
    };
    
    const handleClick = (num) => {
        if (cells[num] !== ''){
            alert("zaten işaretli")
            return;
        }
         let squares = [...cells];
        if (turn === 'x'){
            squares[num] = 'x';
            setTurn('0');
        }else{
            squares[num] = 'o';
            setTurn('x');
        }

        checkWinner(squares)
        setCells(squares);
        console.log(squares)

    }

    const handleRs = () => {
        setWinner(null);
        setCells(Array(9).fill(''))
    }
    const Cell = ({num}) =>{
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }

  return (
    <div className='container'>
        <table>
            Turn:{turn}
            <body>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </body>
        </table>
        {winner && (
            <>
            <p>{winner} is the winner!!</p>
            <button onClick={() => handleRs()}> Play again</button>
            </>
        )}
    </div>
  )
}

export default XOX