import './App.css';
import {useState} from 'react';
  export function Tic() {
    const [board,setBoard]=useState([null,null,null,null,null,null,null,null,null]);
    const decideWinner=(board)=>{
      const lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],]
        for(let i=0;i<lines.length;i++){
      const[a,b,c]=lines[i];
      console.log(a,b,c);
if(board[a]===null && board[a]===board[b]&& board[b]===board[c]){
console.log("winner is", board[a]);
return board[a];
      }
    }
  };
    const winner=decideWinner(board);
   const[isXturn,setIsXturn]=useState(true);
    const handleClick=(index)=>{
      if(board[index]===null){
        const boardCopy=[...board];
        console.log(boardCopy,index);
       boardCopy[index]=isXturn?"X":"O";
       setBoard(boardCopy);
       setIsXturn(!isXturn);
      }
  
};
    return(
    <div className="full-game">
    <div className="board">
     {board.map((val,index)=>(
     <GameBox val={val} onPlayerClick={()=>handleClick(index)}/>))}
      </div>
      <h2>winner is:{winner}</h2>
        </div> 
    )};
        //{VAL}->object destructuring
    function GameBox({val,onPlayerClick}){
    //  const val="X";
    //const[val,setVal]=useState(null)
const styles={
color:val==="X"?"green":"red",
};
      return(
        <div onClick= {()=>onPlayerClick()}class="game-box"
         style={styles}>{val}</div>
      )

    }
  
