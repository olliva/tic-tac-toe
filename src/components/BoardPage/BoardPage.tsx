import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

class BoardPage extends React.Component<IBoardComponent> {
    public render() {
        return (
            <div>
                <Header title={this.props.board.name}/>
                <Link to='/'>Back</Link>
            </div>
        );
    }
}

export default BoardPage;

interface IBoardComponent {
    board: IBoard
}

interface IBoard {
    number: number;
    name:  string;
}
