import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick} onKeyPress={props.onKeyPress}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);

    const squares = [];
    for (let i = 0; i < 9; i++) {
      squares.push(Array(9).fill(null));
    }
    this.state = {
      squares
    };
  }

  handleClick (x, y) {
    this.setAt(x, y, 'X')
  }

  handleKeyPress (e, x, y) {
    const asNum = _.toNumber(e.key)
    if (_.isNumber(asNum)) {
      this.setAt(x, y, asNum) 
    }
  }

  setAt (x, y, val) {
    const squares = _.cloneDeep(this.state.squares);
    squares[x][y] = val;
    this.setState({squares: squares});
  }

  renderSquare (x, y) {
    return (
      <Square
        key={`${x}${y}`}
        value={this.state.squares[x][y] || ''}
        // onClick={() => this.handleClick(x, y)}
        onKeyPress={(e)=> this.handleKeyPress(e, x, y)}
      />
    );
  }

  renderRow (y) {
    return (
      <div className="board-row" key={`row${y}`}>
      {
        this.state.squares[0].map((val, x) => {
          return this.renderSquare(x, y)
        })
      }
      </div>
    )
  }

  render () {
    return (
      <div>
        {
          this.state.squares.map((row, y) => {
            return this.renderRow(y)
          })
        }
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
