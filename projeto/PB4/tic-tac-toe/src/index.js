import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

  function Square(props) {
    return (
        // 1 - A propriedade onClick diz ao React para criar um evento de escuta
        //  e quando o botão é clicado, essa função é chamada
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true, //Define que a primeira jogada é "X"
      };
    }

    // 3 - .slice() cria uma cópia do array do quadrado para modificá-lo evitando mutações
    handleClick(i) {
        const squares = this.state.squares.slice();

        //Retorna se houver um vencedor
        if (calculateWinner(squares) || squares[i]) {
            return;
          }

        squares[i] = this.state.xIsNext ? 'X' : 'O'; //Se xIsNext: true, coloca "X"
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext, 
        });
    }
  
    //2 - Essa função é chamada, e quando um quadrado for clicado, 
    //  a função handleClick(i), abaixo, é chamada em sequência
    renderSquare(i) {
      return (
      <Square 
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
      />
      );
    }
    // O state é guardado no componente Board que, 
    //  quando alterado, re-renderiza os quadrados (componentes Square).
    //  Ao manter o State de todos os quadrados no Board (tabuleiro), 
    //  será possível determinar o vencedor.

    // O componente Square recebe os valores do Board e informam quando forem clicados
    // São componentes controlados no qual o Board tem total controle

    render() {
        const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
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

  //Definindo um Vencedor

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
    //Verifica se há um vencedor
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  