import * as React from 'react';
import { Link } from 'react-router-dom';

class Board extends React.Component<IBoardComponent> {
    public render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h1>Board {this.props.board && this.props.board.name}</h1>
            </div>
        );
    }
}

export default Board;

interface IBoardComponent {
    board?: IBoard
}

interface IBoard {
    number: number;
    name:  string;
}
