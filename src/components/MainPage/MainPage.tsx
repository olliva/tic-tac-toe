import * as React from "react";

import PageHeader from "@atlaskit/page-header";
import BoardsList from "../BoardsList/BoardsList";

class MainPage extends React.Component<IAppState> {
  public render() {
    return (
      <div>
        <PageHeader>Tic-tac-toe</PageHeader>
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
