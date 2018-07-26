import * as React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component<IAppState> {
    public render() {
        return (
            <div>
                <p>Links</p>
                {
                    this.props.boards && this.props.boards.map(item => <Link key={item.number} to={`/board/${item.number}`}>Board {item.number}</Link>)
                }
                <h1>Main</h1>
            </div>
        );
    }
}

export default Main;

interface IAppState {
    boards: IBoard[];
}

interface IBoard {
    number: number;
    name:  string;
}
