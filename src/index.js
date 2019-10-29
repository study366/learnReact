import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
  
  function Square(props) {
   return (
     <button className="square" onClick={props.onClick}>
      {props.value}
     </button>
   )
  }
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square 
          value={this.props.squares[i]}
          onClick={()=>this.props.onClick(i)}
          key={i}
        />
      )
    } 
    render() {
      let boxSize = 3;
      
      let cols = [];
      for(let j = 0; j < boxSize; j++){
        let row = [];
        for(let i = 0; i < boxSize; i++){
          row.push (this.renderSquare(j * boxSize + i));
        };
        console.log(row);
        let col =<div className="board-row" key={j}>
            {row}          
        </div>
        cols.push(col);
      }     
      console.log(cols);

      return (
        <div>
          {cols}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNum: 0,
        isNext: true,
        isReverse: false,
      };
    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNum + 1);
      const current = history[history.length -1];
      const squares = current.squares.slice();
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i] = this.state.isNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNum: history.length,
        isNext: !this.state.isNext,
      });     
    }

    jumpTo(step){
      this.setState({
        stepNum: step,
        isNext: (step % 2) === 0,
      });      
    }
    Reverse(){
      this.setState(
        {
          isReverse: !this.state.isReverse,
        }
      );
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNum];
      const winner = calculateWinner(current.squares);
      
      const move = history.map((step, move, arr) => {
        let desc = move ? 'go to move #' + move : 'Go to game start';
        
        let diffIndex = {};
        const currStep = step.squares;
        let lastStep;
        if(move > 0){
          lastStep = arr[move-1].squares;
          for(let i = 0; i < lastStep.length; i++){
            if(currStep[i] !== lastStep[i]){
              diffIndex.x = Math.floor(i / 3)  + 1;
              diffIndex.y = i % 3 + 1;
            }
          }
          desc += `回到坐标${diffIndex.x}、${diffIndex.y}`;
        }

        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)} index={move} className={move === this.state.stepNum ? 'color': ''}>
              {desc} 
            </button>
          </li>
        ) 
      })      
      let myThis = this;
      const reverseButton = () => {
        return ( 
        <button
          onClick={()=>{
            console.log(this);
            this.Reverse();
          }}
        >
          toggle
        </button>);
      }
        
          
      if(this.state.isReverse){
        move.sort((itemLast, itemNext) => {
          return (itemLast.key > itemNext.key) ? -1 : 1;         
        })
      }     
      
      let status;
      if(winner){
        status = 'winner: ' + winner;
      }else{
        status = 'next player: ' + (this.state.isNext ? 'X' : '0' );
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{move}</ol>
            <div>{reverseButton()}</div>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  // 判定胜负函数
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }