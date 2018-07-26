import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Board from '../Board/Board';
import Header from '../Header/Header';
import Main from '../Main/Main';

import './App.css';

class App extends React.Component<{}, IAppState> {

    constructor(props:{}) {
        super(props);
        this.state = {
            boards: [
                {
                    name: 'Board 1',
                    number: 1
                },
                {
                    name: 'Board 2',
                    number: 2
                },
                {
                    name: 'Board 3',
                    number: 3
                }
            ]
        };
    }

    public render() {
        const MainPage = () => <Main boards={this.state.boards} />;
        const BoardPage = ({ match }:{match:IBoardURL}) => <Board board={this.state.boards.find(item => item.number === Number(match.params.id))}/>

        return (
            <div className="App">
                <Header title='Welcome to React' />
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Switch>
                    // tslint:disable-next-line jsx-no-lambda
                    <Route exact={true} path='/' render={MainPage} />
                    <Route path='/board/:id' render={BoardPage} />
                </Switch>
            </div>
        );
    }
}

export default App;

interface IAppState {
    boards: IBoard[];
}

interface IBoard {
    number: number;
    name:  string;
}

interface IBoardURL {
    params: {
        id: number
    }
}
