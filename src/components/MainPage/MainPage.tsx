import * as React from "react";

import BoardsList from "../BoardsList/BoardsList";
import Header from "../Header/Header";

class MainPage extends React.Component<IAppState> {
  public render() {
    return (
      <div>
        <Header title="Tic-tac-toe" />
        <BoardsList boards={this.props.boards} />
      </div>
    );
  }
}

export default MainPage;

interface IAppState {
  boards: IBoard[];
}

interface IBoard {
  number: number;
  name: string;
}
