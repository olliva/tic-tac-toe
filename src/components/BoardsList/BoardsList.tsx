import * as React from 'react';
import { Link } from 'react-router-dom';

class BoardsList extends React.Component<IBoardsList> {
    public render() {
        return (
            <div className='BoardsList'>
                {
                    this.props.boards && this.props.boards.map(board => <Link  className='BoardsList-Item' key={board.number} to={`/board/${board.number}`}>Board {board.number}</Link>)
                }
            </div>
        );
    }
}

export default BoardsList;

interface IBoardsList {
    boards?: IBoard[]
}

interface IBoard {
    number: number;
    name:  string;
}
