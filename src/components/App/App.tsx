import * as React from "react";
import { Route, Switch } from "react-router-dom";

import BoardPage from "../BoardPage/BoardPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainPage from "../MainPage/MainPage";

import "@atlaskit/css-reset";
import Page from "@atlaskit/page";

import "./App.css";

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      boards: [
        {
          name: "Board 1",
          number: 1
        },
        {
          name: "Board 2",
          number: 2
        },
        {
          name: "Board 3",
          number: 3
        }
      ]
    };
  }

  public render() {
    const MainPageRender = () => <MainPage boards={this.state.boards} />;
    const BoardOrErrorPageRender = ({ match }: { match: IBoardURL }) => {
      const BoardData = this.state.boards.find(
        item => item.number === Number(match.params.id)
      );

      return BoardData ? <BoardPage board={BoardData} /> : <ErrorPage />;
    };

    return (
      <Page className="App">
        <Switch>
          <Route exact={true} path="/" render={MainPageRender} />
          <Route path="/board/:id" render={BoardOrErrorPageRender} />
        </Switch>
      </Page>
    );
  }
}

export default App;

interface IAppState {
  boards: IBoard[];
}

interface IBoard {
  number: number;
  name: string;
}

interface IBoardURL {
  params: {
    id: number;
  };
}
